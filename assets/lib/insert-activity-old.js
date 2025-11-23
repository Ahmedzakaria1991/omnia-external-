var baseURL;
var devgateway = true;
var runPage = false;
var localhostName;
location.hostname == "127.0.0.1" ||
  location.hostname == "stblobstrgeaccount.blob.core.windows.net" || "https://www.selaheltelmeez.com/"
  ? (runPage = true)
  : (runPage = false);

devgateway
  ? (baseURL = "https://devgateway.selaheltelmeez.com/")
  : (baseURL = "https://gateway.selaheltelmeez.com/");

let resetData = `<div class="resetdata" @click="resetfunction()">
    <div class="reset" v-show=" isSuccess && isLoading"></div>
    </div>
    <div class="confirmMassaege" v-show="reset && isSuccess && isLoading">
        <div class="confirm">
            <p class="resetText"></p>
            <div class="buttons">
                <button class="button yes" @click="confirm()"></button>
                <button class="button no"  @click="cancel()"></button>
            </div>
        </div>
    </div>`;
var finalResponse = {
  submitData: function (_object, _code, par2, par3) {
  },
};



var newFinalResponse = {
  submitData: function (_object, _code, par2, error) {
    console.log({ code: _code, totalPoint: par2, totalDegree: _object.numberOfquestion, studentDegree: par2, error: error })
    if ((_code != null || _code != undefined) && error.isSuccess) {
      window.parent.postMessage(
        { code: _code, totalPoint: par2, totalDegree: _object.numberOfquestion, studentDegree: par2, error: error }, "*");
      console.log("Done")
    } else {
      window.parent.postMessage(
        { error: error }, "*");
      console.log("Error")
    }
  },
  enforceLogout:function(){
    window.parent.postMessage(
      {
        enforcedLogout : true
      },
      "*"
    );
  }
};


class Global {
  constructor() { }
  direction = "";
  subjectId = "";
  lessonId = "";
  clipId = 0;
  tokenId = "";
  code = 0;
  studentDegreeResult = 0
  timer = 0;
  setQueryStringDefaults() {
    let urlParams = new URLSearchParams(window.location.search);
    urlParams.has("subjectId")
      ? (this.subjectId = urlParams.get("subjectId"))
      : "";
    urlParams.has("lessonId")
      ? (this.lessonId = urlParams.get("lessonId"))
      : "";
    urlParams.has("clipId")
      ? (this.clipId = Number(urlParams.get("clipId")))
      : "";
    urlParams.has("token") ? (this.tokenId = urlParams.get("token")) : "";
    urlParams.has("direction")
      ? (this.direction = urlParams.get("direction"))
      : "";
    return this.direction;
  }

  async ValidateToken() {
    const requestOptionsv1 = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenId + "",
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
      const jsonData = await response.json();
      return jsonData;
    }
  }

  // async InsertActivity() {
  //   const requestOptionsv2 = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + this.tokenId + "",
  //     },
  //     body: JSON.stringify({
  //       lessonId: this.lessonId,
  //       subjectId: this.subjectId,
  //       clipId: this.clipId,
  //     }),
  //   };

  //   const response = await fetch(
  //     baseURL + "Student/InsertActivity",
  //     requestOptionsv2
  //   );
  //   setInterval(() => {
  //     this.timer++;
  //   }, 1000);
  //   const jsonData = await response.json();
  //   return jsonData;
  // }

  async InsertActivity() {
    const requestOptionsv2 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenId + "",
      },
      body: JSON.stringify({
        lessonId: this.lessonId,
        subjectId: this.subjectId,
        clipId: this.clipId,
      }),
    };
  
    try {
      const response = await fetch(baseURL + "Student/InsertActivity", requestOptionsv2);
      setInterval(() => {
      this.timer++;
       }, 1000);
      // Check if the status is 440 (enforce logout)
      if (response.status === 440) {
        newFinalResponse.enforceLogout(); // Call the enforceLogout method
        return;
      }
  
      // Check for successful response status (2xx)
      if (!response.ok) {
        // Handle unexpected HTTP status codes (like 500, 400, etc.)
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Parse the JSON response
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      if (response.status === 440) {
        newFinalResponse.enforceLogout(); // Call the enforceLogout method
        return;
      }
      // console.error("Error in InsertActivity:", error);
      // throw error; // Re-throw or handle the error as needed
    
    }
  }

  UpdateStudentActivity(id, posts, resetJson, droppable) {
    posts.subjectId = this.subjectId;
    posts.lessonId = this.lessonId;
    let correct = posts.counterCorrect;
    // console.log(correct)
    posts.UserDegree = correct;
    let jsonStringify;
    resetJson != true
      ? (jsonStringify = JSON.stringify(posts))
      : (jsonStringify = "");
    correct == posts.numberOfquestion ? (this.code = 4) : (this.code = 1);

    // this.studentDegreeResult = parseFloat(((posts.counterCorrect * posts.LODegree) / posts.numberOfquestion).toFixed(1))
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenId + "",
      },
      body: JSON.stringify({
        studentPoints: posts.counterCorrect,
        code: this.code,
        activityId: id,
        learningObjectAsJson: jsonStringify,
        totalDegree: posts.numberOfquestion,
        studentDegree: posts.counterCorrect,
        LODegree: posts.numberOfquestion,
        learningDurationInSec: this.timer
      }),
    };


    fetch(baseURL + "Student/UpdateStudentActivity", requestOptions).then(
      async (response) => {
        if (!response.ok) {
           if (response.status === 440) {
              newFinalResponse.enforceLogout();  
               return;
          }
          throw new Error(`HTTP error! status: ${response.status}`);
      }

        const data = await response.json();
        data.isSuccess && resetJson && droppable ? location.reload() : "";
        !resetJson ? newFinalResponse.submitData(posts, this.code, posts.counterCorrect, data) : "";
        console.log(response)
      }
    ).catch((error) => {
      console.log(error)
      
    });
  }
}

let globalFunctions = new Global();
let direction = globalFunctions.setQueryStringDefaults();
let returnData;

if (direction == "2") {
  returnData = globalFunctions.InsertActivity();
} else {
  returnData = globalFunctions.ValidateToken();
}