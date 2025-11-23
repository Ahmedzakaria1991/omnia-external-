let baseURL;
const devgateway = true;
let runPage = false;
const localhostNames = [
  "127.0.0.1",
  "stblobstrgeaccount.blob.core.windows.net",
  "www.selaheltelmeez.com",
];
runPage = localhostNames.includes(location.hostname);
baseURL = devgateway
  ? "https://devgateway.selaheltelmeez.com/"
  : "https://gateway.selaheltelmeez.com/";

const resetData = `
  <div class="resetdata" @click="resetfunction()">
    <div class="reset" v-show="isSuccess && isLoading"></div>
  </div>
  <div class="confirmMassaege" v-show="reset && isSuccess && isLoading">
    <div class="confirm">
      <p class="resetText"></p>
      <div class="buttons">
        <button class="button yes" @click="confirm()"></button>
        <button class="button no" @click="cancel()"></button>
      </div>
    </div>
  </div>
`;

const finalResponse = {
  submitData: (_object, _code, par2, par3) => {},
};

const newFinalResponse = {
  submitData: (_object, _code, par2, error) => {
    console.log({
      code: _code,
      totalPoint: par2,
      totalDegree: _object.numberOfquestion,
      studentDegree: par2,
      error: error,
    });
    if (_code && error.isSuccess) {
      window.parent.postMessage(
        {
          code: _code,
          totalPoint: par2,
          totalDegree: _object.numberOfquestion,
          studentDegree: par2,
          error: error,
        },
        "*"
      );
      console.log("Done");
    } else {
      window.parent.postMessage({ error: error }, "*");
      console.log("Error");
    }
  },

  enforceLogout: () => {
    window.parent.postMessage({ enforcedLogout: true }, "*");
  },
};

class Global {
  first = true;
  durationUpdateInterval;

  constructor() {
    this.direction = "";
    this.subjectId = "";
    this.lessonId = "";
    this.clipId = 0;
    this.tokenId = "";
    this.code = 0;
    this.studentDegreeResult = 0;
    this.timer = 0;
  }

  setQueryStringDefaults() {
    const urlParams = new URLSearchParams(window.location.search);
    this.subjectId = urlParams.get("subjectId") || this.subjectId;
    this.lessonId = urlParams.get("lessonId") || this.lessonId;
    this.clipId = Number(urlParams.get("clipId")) || this.clipId;
    this.tokenId = urlParams.get("token") || this.tokenId;
    this.direction = urlParams.get("direction") || this.direction;
    return this.direction;
  }

  async ValidateToken() {
    const requestOptionsv1 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.tokenId}`,
      },
    };
    if (runPage) {
      return true;
    } else {
      const response = await fetch(
        baseURL + "Identity/ValidateToken",
        requestOptionsv1
      );
      if (!response.ok) {
        if (response.status === 440) {
          newFinalResponse.enforceLogout();
          return;
        }
      }
      return await response.json();
    }
  }

  async InsertActivity() {
    const requestOptionsv2 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.tokenId}`,
      },
      body: JSON.stringify({
        lessonId: this.lessonId,
        subjectId: this.subjectId,
        clipId: this.clipId,
      }),
    };
    try {
      const response = await fetch(
        baseURL + "Student/InsertActivity",
        requestOptionsv2
      );
      setInterval(() => {
        this.timer++;
      }, 1000);

      if (response.status === 440) {
        newFinalResponse.enforceLogout();
        return;
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.log("Error in InsertActivity:", error);
    }
  }
  UpdateStudentActivity(id, posts, resetJson, droppable) {
    console.log(id, posts, resetJson, droppable);
    posts.subjectId = this.subjectId;
    posts.lessonId = this.lessonId;
    let correct = posts.counterCorrect;
    posts.UserDegree = correct;
    let jsonStringify = resetJson !== true ? JSON.stringify(posts) : "";
    this.code = correct === posts.numberOfquestion ? 4 : 1;
    if (resetJson) {
      this.timer = 0;
    }
    const dataStorge = JSON.stringify({
      studentPoints: posts.counterCorrect,
      code: this.code,
      activityId: id,
      learningObjectAsJson: jsonStringify,
      totalDegree: posts.numberOfquestion,
      studentDegree: posts.counterCorrect,
      LODegree: posts.numberOfquestion,
      learningDurationInSec: this.timer,
    });
    this.first && id
      ? [this.startAutoUpdate(this.timer), (this.first = false)]
      : "";
    id
      ? [
          this.setLocalStorage(dataStorge),
          this.setStudentActivity(dataStorge, resetJson, droppable, posts),
        ]
      : "";
    if (correct === posts.numberOfquestion) {
      this.stopAutoUpdate();
      this.removeLocalStorage();
    }
  }

  getLocalStorage() {
    return localStorage.getItem("learningObjectBackup");
  }
  setLocalStorage(backUpData) {
    localStorage.setItem("learningObjectBackup", backUpData);
  }
  removeLocalStorage() {
    localStorage.removeItem("learningObjectBackup");
  }
  checkLocalStorage() {
    const getStoredData = localStorage.getItem("learningObjectBackup");
    const changeStorgeData = JSON.stringify(getStoredData);
    // console.log(changeStorgeData);
    if (getStoredData) {
      this.setStudentActivity(getStoredData);
      this.removeLocalStorage();
    }
  }

  setStudentActivity(dataStorge, resetJson, droppable, posts) {
    console.log(dataStorge, resetJson, droppable);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.tokenId}`,
      },
      body: dataStorge,
    };
    // console.log(requestOptions);
    fetch(baseURL + "Student/UpdateStudentActivity", requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          if (response.status === 440) {
            newFinalResponse.enforceLogout();
            return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.isSuccess && resetJson && droppable) location.reload();

        // console.log("out", posts, this.code, posts.counterCorrect, data);
        if (!resetJson) {
          // console.log("in", posts, this.code, posts.counterCorrect, data);
          newFinalResponse.submitData(
            posts,
            this.code,
            posts.counterCorrect,
            data
          );
        }
      })
      .catch(console.log);
  }
  startAutoUpdate() {
    if (this.durationUpdateInterval) {
      clearInterval(this.durationUpdateInterval);
    }
    this.updateLearningDuration(this.timer);
    this.durationUpdateInterval = setInterval(() => {
      this.updateLearningDuration(this.timer);
    }, 1000);
  }
  updateLearningDuration(newDuration) {
    const storedData = localStorage.getItem("learningObjectBackup");
    let learningObjectBackup = {};

    try {
      learningObjectBackup = storedData ? JSON.parse(storedData) : {};
    } catch (e) {
      console.warn("Failed to parse localStorage data", e);
      learningObjectBackup = {};
    }

    learningObjectBackup.learningDurationInSec = newDuration;
    localStorage.setItem(
      "learningObjectBackup",
      JSON.stringify(learningObjectBackup)
    );
  }
  stopAutoUpdate() {
    if (this.durationUpdateInterval) {
      clearInterval(this.durationUpdateInterval);
      this.durationUpdateInterval = null;
    }
  }
}

const globalFunctions = new Global();
const direction = globalFunctions.setQueryStringDefaults();
let returnData;
direction === "2"
  ? ((returnData = globalFunctions.InsertActivity()),
    returnData.then((response) => {
      const insertData = response.value;
      console.log(insertData.activityId);
      globalFunctions.checkLocalStorage(insertData.activityId);
    }))
  : (returnData = globalFunctions.ValidateToken());
