class Global {
  constructor() {
    // direction = "";
    // isLoading = false;
    // isSuccess = false;
    // subjectId = "";
    // lessonId = "";
    // clipId = 0;
    // tokenId = "";
    // activityId = 0;
    // code = 0;
  }
  direction = "";
  // isSuccess = false;
  subjectId = "";
  lessonId = "";
  clipId = 0;
  tokenId = "";
  // activityId = 0;
  code = 0;

  setQueryStringDefaults() {
    let urlParams = new URLSearchParams(window.location.search);
    urlParams.has("sub") ? (this.subjectId = urlParams.get("sub")) : "";
    urlParams.has("le") ? (this.lessonId = urlParams.get("le")) : "";
    urlParams.has("clipId")
      ? (this.clipId = Number(urlParams.get("clipId")))
      : "";
    urlParams.has("tokenId") ? (this.tokenId = urlParams.get("tokenId")) : "";
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
      const jsonData = await response.json();
      return jsonData;
    }
  }

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

    const response = await fetch(
      baseURL + "Student/InsertActivity",
      requestOptionsv2
    );
    const jsonData = await response.json();
    return jsonData;
  }

  UpdateStudentActivity(id, posts) {
    let correct = posts.counterCorrect;
    console.log(posts.numberOfquestion);
    correct == posts.numberOfquestion ? (this.code = 4) : (this.code = 1);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.tokenId + "",
      },
      body: JSON.stringify({
        studentPoints: posts.counterCorrect,
        //   learningDurationInSec: 0,
        code: this.code,
        // activityId: id,
        // learningObjectAsJson: JSON.stringify(posts),
      }),
    };
 
    fetch(baseURL + "Student/UpdateStudentActivity", requestOptions).then(
      async (response) => {
        const data = await response.json();
        console.log(data);
      }
    );
  }
}

let globalFunctions = new Global();
let direction = globalFunctions.setQueryStringDefaults();
let returnData;

if (direction == "v2") {
  returnData = globalFunctions.InsertActivity();
} else {
  returnData = globalFunctions.ValidateToken()
}
