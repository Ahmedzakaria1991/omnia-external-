var baseURL;
var devgateway = true;
var localhostName = "127.0.0.1";
devgateway
  ? (baseURL = "https://devgateway.selaheltelmeez.com/")
  : (baseURL = "https://gateway.selaheltelmeez.com/");

var finalResponse = {
  submitData: function (_object, _code, par2, par3) {
    if (_code != null || _code != undefined) {
      window.parent.postMessage({ code: _code, totalPoint: par2 }, "*");
    }
  },
};

class Global {
  constructor() {}
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

    posts.subjectId = this.subjectId;
    let correct = posts.counterCorrect;
    // console.log(posts.numberOfquestion);
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
        activityId: id,
        learningObjectAsJson: JSON.stringify(posts),
      }),
    };
    console.log(requestOptions)

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
  returnData = globalFunctions.ValidateToken();
}
