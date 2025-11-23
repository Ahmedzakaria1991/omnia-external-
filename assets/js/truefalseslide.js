var trueFalse = document.querySelector("#trueSlide");
var pageUrl = trueFalse.getAttribute("data-urlpage");
new Vue({
  el: "#trueSlide",
  data: {
    posts: [
      {
        nameId: "",
        title: "",
        finshedChoose: false,
        help: true,
        subject: "",
        colorTemplate: "",
        quizChooses: [],
        popup: "",
        hand: true,
        popuptext: "",
        counterCorrect: 0,
        randomNumber: null,
        loTargets: null,
        numberOfquestion: null,
        // --------------------------------------------------------
        subjectId: "",
        conceptId: "",
        unitId: "",
        lessonId: "",
        title: "",
        keyWords: "",
        learningOjectives: "",
        BloomLevels: [],
        type: "",
        LODegree: null,
        UserDegree: 0,
        SubType: "trueSlide",
        startTime: "",
        endTime: "",
        // --------------------------------------------------------
      },
    ],
    lang: "ar",
    shuffledQuiz: null,
    slideQ: null,
    quizLength: null,

        // Change Here  -------------------------------------------

    popUpState: false,
    popUpTextLoop: "",

    // --------------------------------------------------------
    isLoading: false,
    isSuccess: false,
    activityId: 0,
    dataLoaded: false,
    currentdate: "",
    data: null,
    reset: false,
    quizLocAction: null,
    // --------------------------------------------------------
  },
  created() {
    this.background();
    this.addTextarea();
    this.resetTemp();
  },
  async mounted() {
    await this.getData();
    this.slide();
    this.resetLang();
  },

  methods: {
    resetLang() {
      var resetText = document.querySelector(".resetText");
      var yes = document.querySelector(".yes");
      var no = document.querySelector(".no");
      // console.log(this.posts[0].subject.includes("eng"));
      resetText.innerHTML += this.posts[0].subject.includes("eng")
        ? "Do you wish to delete the previous recordings?"
        : "هل تريد حذف التسجيلات السابقة ؟";
      yes.innerHTML += this.posts[0].subject.includes("eng") ? "Yes" : "نعم";
      no.innerHTML += this.posts[0].subject.includes("eng") ? "No" : "لا";
    },
    resetTemp() {
      trueFalse.insertAdjacentHTML("afterbegin", resetData);
    },
    // --------------------------------------------------------
    getDate() {
      this.currentdate = new Date();
      return (
        this.currentdate.getDate() +
        "/" +
        (this.currentdate.getMonth() + 1) +
        "/" +
        this.currentdate.getFullYear() +
        " " +
        this.currentdate.getHours() +
        ":" +
        this.currentdate.getMinutes() +
        ":" +
        this.currentdate.getSeconds()
      );
    },
    getData: async function () {
      if (direction == "2") {
        await returnData.then((response) => {
          this.isSuccess = response.isSuccess;
          this.data = response.value;
          // console.log(this.data);

          this.activityId = this.data.activityId;
          if (
            this.data.learningObjectAsJson != null &&
            this.data.learningObjectAsJson != ""
          ) {
            let jsonData = JSON.parse(this.data.learningObjectAsJson);
            trueFalse.id == jsonData.nameId
              ? ((this.posts[0] = jsonData), (this.dataLoaded = true))
              : "";
          }
        });
      } else {
        if (runPage) {
          this.isSuccess = true;
        } else {
          await returnData.then((response) => {
            // console.log(response.value);
            this.isSuccess = response.value;
          });
        }
      }
      // --------------------------------------------------------

      !this.dataLoaded
        ? await fetch("../json/" + pageUrl + ".json")
            .then((res) => res.json())
            .then((data) => {
              this.posts = data;
              this.posts[0].trueSlide.forEach((element) => {
                this.posts[0].numberOfquestion += element.quizChooses.length;
              });
            })
        : "";
      // --------------------------------------------------------
      this.posts[0].length != 0
        ? setTimeout(() => {
            this.isLoading = true;
            this.posts[0].startTime = this.getDate();
            this.clearChecked();
          }, 1000)
        : (this.isLoading = false);
      // --------------------------------------------------------
      this.posts[0].numberOfquestion = 0;
      this.posts[0].trueSlide.forEach((element) => {
        this.posts[0].numberOfquestion += element.quizChooses.length;
      });
      this.posts[0].counterCorrect == this.posts[0].numberOfquestion
        ? (this.posts[0].finshedChoose = true)
        : "";
      finalResponse.submitData(
        JSON.stringify(this.posts),
        1,
        this.posts[0].counterCorrect
      );
      console.log("numberOfquestion = " + this.posts[0].numberOfquestion);
    },
    clearChecked() {
      this.posts[0].trueSlide.forEach((element) => {
        element.quizChooses.forEach((elem) => {
          elem.chooseUrl != "" && !elem.result
            ? ((elem.chooseUrl = ""), (elem.show = false))
            : "";
        });
      });
    },

    sound_true: function () {
      let audio;
      this.posts[0].counterCorrect == this.posts[0].numberOfquestion
        ? ""
        : ((audio = new Audio("../../../assets/audio/true.mp3")),
          audio.load(),
          audio.play());
      const percent = Math.round(
        (this.posts[0].counterCorrect / this.posts[0].numberOfquestion) * 100
      )
        .toString()
        .trim();
      // console.log("percent = " + percent)
      if (percent >= 85) {
        this.code = 4;
        finalResponse.submitData(
          JSON.stringify(this.posts),
          4,
          this.posts[0].counterCorrect
        );
      } else {
        this.code = 1;
        finalResponse.submitData(
          JSON.stringify(this.posts),
          1,
          this.posts[0].counterCorrect
        );
      }

      this.posts[0].endTime = this.getDate();
      direction != ""
        ? ((this.posts[0].nameId = "trueSlide"),
          // (this.posts[0].title = this.data.title),
          (this.posts[0].bloomLevels = this.data.bloomLevels),
          (this.posts[0].learningObjectives = this.data.learningObjectives),
          (this.posts[0].LODegree = this.data.loDegree),
          (this.posts[0].keywords = this.data.keywords),
          (this.posts[0].type = this.data.type),
          (this.posts[0].unitId = this.data.unitId),
          globalFunctions.UpdateStudentActivity(this.activityId, this.posts[0]))
        : "";
    },
    addTextarea: function () {
      var put_text = document.querySelector(".input-popup");
      if (put_text) {
        put_text.innerHTML += `<div class="text_area"><textarea :id="'val_textarea_'+i" rows="4" cols="50" name="comment" form="usrform" ></textarea></div>`;

        setTimeout(() => {
          this.posts[0].subject.includes("eng")
            ? document
                .querySelectorAll("textarea")
                .forEach((x) =>
                  x.setAttribute(
                    "placeholder",
                    "Write your answer.............."
                  )
                )
            : document
                .querySelectorAll("textarea")
                .forEach((x) =>
                  x.setAttribute("placeholder", "اكتب إجابتك....")
                );
          // console.log(this.posts[0].subject.startsWith)
        }, 1000);
      }
    },

    sound_false: function () {
      var audio = new Audio("../../../assets/audio/false.mp3");
      audio.load();
      audio.play();
    },
    finshed: function () {
      var audio = new Audio("../../../assets/audio/finshed.mp3");
      audio.load();
      this.posts[0].finshedChoose = true;
      // finalResponse.submitData(JSON.stringify(this.posts), 4, this.posts[0].counterCorrect)
      audio.play();
    },

    logo: function () {
      if (
        this.posts[0].subject.startsWith("science") &&
        !this.posts[0].subject.includes("eng")
      ) {
        return "../../../assets/images/subject-logo/science.png";
      } else if (
        this.posts[0].subject.startsWith("math") &&
        !this.posts[0].subject.includes("eng")
      ) {
        return "../../../assets/images/subject-logo/math.png";
      } else if (this.posts[0].subject.startsWith("arabic")) {
        return "../../../assets/images/subject-logo/arabic.png";
      } else if (this.posts[0].subject.startsWith("eng")) {
        return "../../../assets/images/subject-logo/eng.png";
      } else if (this.posts[0].subject.startsWith("social")) {
        return "../../../assets/images/subject-logo/social.png";
      } else if (this.posts[0].subject.startsWith("ict")) {
        return "../../../assets/images/subject-logo/ict.png";
      } else if (this.posts[0].subject.startsWith("rel")) {
        return "../../../assets/images/subject-logo/rel.png";
      } else if (this.posts[0].subject.startsWith("tsk")) {
        return "../../../assets/images/subject-logo/tsk.png";
      } else if (this.posts[0].subject.includes("science", "eng")) {
        return "../../../assets/images/subject-logo/science_eng.png";
      } else if (this.posts[0].subject.includes("math", "eng")) {
        return "../../../assets/images/subject-logo/math_eng.png";
      }
    },

    background: function () {
      var question = document.querySelector(".bottom");
      question.innerHTML += `<svg class="portairt" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 768 1024" style="enable-background:new 0 0 768 1024;" xml:space="preserve"><g><g><g><rect x="29" y="775.3" class="st0" width="1.6" height="4.8"/></g><g><path class="st0" d="M30.6,765.6H29v-9.7h1.6V765.6z M30.6,746.2H29v-9.7h1.6V746.2z M30.6,726.8H29v-9.7h1.6V726.8z M30.6,707.5H29v-9.7h1.6V707.5z M30.6,688.1H29v-9.7h1.6V688.1z M30.6,668.7H29V659h1.6V668.7z M30.6,649.3H29v-9.7h1.6V649.3z M30.6,630H29v-9.7h1.6V630z M30.6,610.6H29v-9.7h1.6V610.6z M30.6,591.2H29v-9.7h1.6V591.2z M30.6,571.8H29v-9.7h1.6V571.8z M30.6,552.5H29v-9.7h1.6V552.5z M30.6,533.1H29v-9.7h1.6V533.1z M30.6,513.7H29V504h1.6V513.7z M30.6,494.3H29v-9.7h1.6V494.3z M30.6,475H29v-9.7h1.6V475z M30.6,455.6H29v-9.7h1.6V455.6z M30.6,436.2H29v-9.7h1.6V436.2z M30.6,416.8H29v-9.7h1.6V416.8z M30.6,397.5H29v-9.7h1.6V397.5z M30.6,378.1H29v-9.7h1.6V378.1z M30.6,358.7H29V349h1.6V358.7z M30.6,339.3H29v-9.7h1.6V339.3z M30.6,320H29v-9.7h1.6V320z M30.6,300.6H29v-9.7h1.6V300.6z M30.6,281.2H29v-9.7h1.6V281.2z M30.6,261.8H29v-9.7h1.6V261.8z M30.6,242.5H29v-9.7h1.6V242.5z M30.6,223.1H29v-9.7h1.6V223.1z M30.6,203.7H29V194h1.6V203.7z M30.6,184.3H29v-9.7h1.6V184.3z M30.6,165H29v-9.7h1.6V165z M30.6,145.6H29v-9.7h1.6V145.6z M30.6,126.2H29v-9.7h1.6V126.2z M30.6,106.8H29v-9.7h1.6V106.8z M30.6,87.5H29v-9.7h1.6V87.5z"/></g></g><g><circle class="st0" cx="29.8" cy="73" r="5"/></g><g class="st1"><path :style="{fill : this.posts[0].colorTemplate}" class="st2" d="M0,462.3c0,0,86.7,99.4,54.5,257.3c-33.2,162.7-3.6,279.2,90,276.5s421.3-57.7,623.2,27.8H0V462.3z"/></g><g><path class="st0" d="M729.1,995.1h-9.7v-1.6h9.7V995.1z M709.8,995.1h-9.7v-1.6h9.7V995.1z M690.4,995.1h-9.7v-1.6h9.7V995.1z M671.1,995.1h-9.7v-1.6h9.7V995.1z M651.8,995.1h-9.7v-1.6h9.7V995.1z M632.4,995.1h-9.7v-1.6h9.7V995.1z M613.1,995.1h-9.7v-1.6h9.7V995.1z M593.8,995.1h-9.7v-1.6h9.7V995.1z M574.4,995.1h-9.7v-1.6h9.7V995.1z M555.1,995.1h-9.7v-1.6h9.7V995.1z M535.8,995.1h-9.7v-1.6h9.7V995.1z M516.4,995.1h-9.7v-1.6h9.7V995.1z M497.1,995.1h-9.7v-1.6h9.7V995.1z M477.8,995.1h-9.7v-1.6h9.7V995.1z M458.4,995.1h-9.7v-1.6h9.7V995.1z M439.1,995.1h-9.7v-1.6h9.7V995.1z M419.8,995.1h-9.7v-1.6h9.7V995.1z M400.4,995.1h-9.7v-1.6h9.7V995.1z M381.1,995.1h-9.7v-1.6h9.7V995.1z M361.8,995.1h-9.7v-1.6h9.7V995.1z M342.4,995.1h-9.7v-1.6h9.7V995.1z M323.1,995.1h-9.7v-1.6h9.7V995.1z M303.8,995.1h-9.7v-1.6h9.7V995.1z M284.4,995.1h-9.7v-1.6h9.7V995.1z M265.1,995.1h-9.7v-1.6h9.7V995.1z M245.8,995.1h-9.7v-1.6h9.7V995.1z M226.4,995.1h-9.7v-1.6h9.7V995.1z"/></g><g><circle class="st0" cx="729.5" cy="993.3" r="5"/></g></g></svg>`;
      question.innerHTML += `<svg class="landscape" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1500 1004" style="enable-background:new 0 0 1500 1004;" xml:space="preserve"><g><g><path :style="{fill : this.posts[0].colorTemplate}" class="st0" d="M0,398.3c0,0,93.6,107.2,58.8,277.5C23,851.2,54.9,976.9,155.9,974c101-2.9,454.4-62.2,672.1,30H0V398.3z"/><g><g><rect x="27.2" y="753.3"  class="st1" width="1.6" height="4.8"/></g><g><path  class="st1" d="M28.8,743.6h-1.6v-9.7h1.6V743.6z M28.8,724.3h-1.6v-9.7h1.6V724.3z M28.8,704.9h-1.6v-9.7h1.6V704.9z M28.8,685.5h-1.6v-9.7h1.6V685.5z M28.8,666.1h-1.6v-9.7h1.6V666.1z M28.8,646.8h-1.6v-9.7h1.6V646.8z M28.8,627.4h-1.6v-9.7h1.6V627.4z M28.8,608h-1.6v-9.7h1.6V608z M28.8,588.6h-1.6v-9.7h1.6V588.6z M28.8,569.3h-1.6v-9.7h1.6V569.3z M28.8,549.9h-1.6v-9.7h1.6V549.9z M28.8,530.5h-1.6v-9.7h1.6V530.5z M28.8,511.1h-1.6v-9.7h1.6V511.1z M28.8,491.8h-1.6v-9.7h1.6V491.8z M28.8,472.4h-1.6v-9.7h1.6V472.4z M28.8,453h-1.6v-9.7h1.6V453z M28.8,433.6h-1.6v-9.7h1.6V433.6z M28.8,414.3h-1.6v-9.7h1.6V414.3z M28.8,394.9h-1.6v-9.7h1.6V394.9z M28.8,375.5h-1.6v-9.7h1.6V375.5z M28.8,356.1h-1.6v-9.7h1.6V356.1z M28.8,336.8h-1.6v-9.7h1.6V336.8z M28.8,317.4h-1.6v-9.7h1.6V317.4z M28.8,298h-1.6v-9.7h1.6V298z M28.8,278.6h-1.6v-9.7h1.6V278.6z M28.8,259.3h-1.6v-9.7h1.6V259.3z M28.8,239.9h-1.6v-9.7h1.6V239.9z M28.8,220.5h-1.6v-9.7h1.6V220.5z M28.8,201.1h-1.6v-9.7h1.6V201.1z M28.8,181.8h-1.6v-9.7h1.6V181.8z M28.8,162.4h-1.6v-9.7h1.6V162.4z"/></g></g><g><circle class="st1" cx="28" cy="144" r="5"/></g><g><path  class="st1" d="M727.3,973.1h-9.7v-1.6h9.7V973.1z M707.9,973.1h-9.7v-1.6h9.7V973.1z M688.6,973.1h-9.7v-1.6h9.7V973.1z M669.3,973.1h-9.7v-1.6h9.7V973.1z M649.9,973.1h-9.7v-1.6h9.7V973.1z M630.6,973.1h-9.7v-1.6h9.7V973.1z M611.3,973.1h-9.7v-1.6h9.7V973.1z M591.9,973.1h-9.7v-1.6h9.7V973.1z M572.6,973.1h-9.7v-1.6h9.7V973.1z M553.3,973.1h-9.7v-1.6h9.7V973.1z M533.9,973.1h-9.7v-1.6h9.7V973.1z M514.6,973.1H505v-1.6h9.7V973.1z M495.3,973.1h-9.7v-1.6h9.7V973.1z M476,973.1h-9.7v-1.6h9.7V973.1z M456.6,973.1H447v-1.6h9.7V973.1z M437.3,973.1h-9.7v-1.6h9.7V973.1z M418,973.1h-9.7v-1.6h9.7V973.1z M398.6,973.1H389v-1.6h9.7V973.1z M379.3,973.1h-9.7v-1.6h9.7V973.1z M360,973.1h-9.7v-1.6h9.7V973.1z M340.6,973.1H331v-1.6h9.7V973.1z M321.3,973.1h-9.7v-1.6h9.7V973.1z M302,973.1h-9.7v-1.6h9.7V973.1z M282.6,973.1H273v-1.6h9.7V973.1z M263.3,973.1h-9.7v-1.6h9.7V973.1z M244,973.1h-9.7v-1.6h9.7V973.1z M224.6,973.1H215v-1.6h9.7V973.1z"/></g><g><path class="st1" d="M1250.3,973.1h-9.7v-1.6h9.7V973.1z M1230.9,973.1h-9.7v-1.6h9.7V973.1z M1211.6,973.1h-9.7v-1.6h9.7V973.1z M1192.3,973.1h-9.7v-1.6h9.7V973.1z M1172.9,973.1h-9.7v-1.6h9.7V973.1z M1153.6,973.1h-9.7v-1.6h9.7V973.1z M1134.3,973.1h-9.7v-1.6h9.7V973.1z M1114.9,973.1h-9.7v-1.6h9.7V973.1z M1307.6,973.1h-9.7v-1.6h9.7V973.1z M1288.3,973.1h-9.7v-1.6h9.7V973.1z M1268.9,973.1h-9.7v-1.6h9.7V973.1z M1362.6,973.1h-9.7v-1.6h9.7V973.1z M1380.6,973.1h-9.7v-1.6h9.7V973.1z M1396.6,973.1h-9.7v-1.6h9.7V973.1z M1343.3,973.1h-9.7v-1.6h9.7V973.1z M1324.9,973.1h-9.7v-1.6h9.7V973.1z M1095.6,973.1h-9.7v-1.6h9.7V973.1z M1076.3,973.1h-9.7v-1.6h9.7V973.1z M1056.9,973.1h-9.7v-1.6h9.7V973.1z M1037.6,973.1h-9.7v-1.6h9.7V973.1z M1018.3,973.1h-9.7v-1.6h9.7V973.1z M999,973.1h-9.7v-1.6h9.7V973.1z M979.6,973.1H970v-1.6h9.7V973.1z M960.3,973.1h-9.7v-1.6h9.7V973.1z M941,973.1h-9.7v-1.6h9.7V973.1z M921.6,973.1H912v-1.6h9.7V973.1z M902.3,973.1h-9.7v-1.6h9.7V973.1z M883,973.1h-9.7v-1.6h9.7V973.1z M863.6,973.1H854v-1.6h9.7V973.1z M844.3,973.1h-9.7v-1.6h9.7V973.1z M825,973.1h-9.7v-1.6h9.7V973.1z M805.6,973.1H796v-1.6h9.7V973.1z M786.3,973.1h-9.7v-1.6h9.7V973.1z M767,973.1h-9.7v-1.6h9.7V973.1z M747.6,973.1H738v-1.6h9.7V973.1z"/></g><g><circle class="st1" cx="1401.7" cy="971.4" r="5"/></g></g></g></svg>`;
    },

    chechedClicked: function (quiz) {
      this.posts[0].help = false;
      if (quiz.type != 4) {
        quiz.show = !quiz.show;
      } else {
        if (event.target.getAttribute("data-number") == 1) {
          quiz.show1 = !quiz.show1;
        } else if (event.target.getAttribute("data-number") == 2) {
          quiz.show2 = !quiz.show2;
        }
      }
    },
    chooseAnswer: function (answer, quiz) {
      if (quiz.type == 1) {
        quiz.show = !quiz.show;
        if (answer.answerSelect) {
          quiz.chooseUrl = answer.url[1];
          quiz.close = !quiz.close;
          quiz.result = !quiz.result;
          this.posts[0].counterCorrect += 1;

          this.sound_true();
          // console.error('Error:', error);
        } else {
          quiz.chooseUrl = answer.url[2];
          this.sound_false();
        }
      } else if (quiz.type === 4) {
        if (answer.number == 1) {
          quiz.show1 = !quiz.show1;
          if (answer.answerSelect) {
            quiz.chooseUrl1 = answer.url[0];
            quiz.result1 = !quiz.result1;
            this.posts[0].counterCorrect += 0.5;

            this.sound_true();
          } else {
            quiz.chooseUrl1 = answer.url[0];
            this.sound_false();
          }
        } else {
          quiz.show2 = !quiz.show2;
          if (answer.answerSelect) {
            quiz.chooseUrl2 = answer.url[0];
            quiz.result2 = !quiz.result2;
            this.posts[0].counterCorrect += 0.5;

            this.sound_true();
          } else {
            quiz.chooseUrl2 = answer.url[0];
            this.sound_false();
          }
        }
      } else {
        quiz.show = !quiz.show;

        if (answer.answerSelect) {
          quiz.chooseUrl = answer.url[0];
          quiz.close = !quiz.close;
          quiz.result = !quiz.result;
          this.posts[0].counterCorrect += 1;

          this.sound_true();
        } else {
          quiz.chooseUrl = answer.url[0];
          this.sound_false();
        }
      }

      this.posts[0].counterCorrect == this.posts[0].numberOfquestion
        ? this.finshed()
        : this.posts[0].finshedChoose;
    },

    slide: async function () {
      let numbers = [...this.posts[0].trueSlide];
      this.slideQ = numbers;
    },
    swiperPrev: function (mySlides, index) {
      let counterIndex = index - 1;
      if (index != 0) {
        this.posts[0].trueSlide.forEach((element) => {
          element.active = false;
        });
        this.posts[0].trueSlide[counterIndex].active = true;
      }
    },
    swiperNext: function (mySlides, index) {
      let lengthInput = this.posts[0].trueSlide.length;
      let counterIndex = index + 1;
      if (lengthInput != counterIndex) {
        this.posts[0].trueSlide.forEach((element) => {
          element.active = false;
        });
        this.posts[0].trueSlide[counterIndex].active = true;
      }
    },
    popupOpen: function (quiz) {
       this.quizLocAction = quiz;
      event.target.parentNode.parentNode
        .querySelector("textarea")
        .setAttribute("disabled", true);
      event.target.parentNode.parentNode
        .querySelector("textarea")
        .setAttribute("placeholder", "");
      this.posts[0].hand = false;
      this.posts[0].popup = !this.posts[0].popup;

       this.popUpState = !this.popUpState;
      this.popUpTextLoop = quiz.popup;
      quiz.isActive = true;
    },
    popupClose: function () {
      this.posts[0].popup = !this.posts[0].popup;
      this.popUpState = !this.popUpState;
      this.quizLocAction.isActive = false;
    },

    passageOpen: function (mySlides) {
         this.posts[0].passageHand = false;
                 // Change Here  -------------------------------------------
       this.popUpState = !this.popUpState;
       this.popUpTextLoop = mySlides.popuptext;
               //  -------------------------------------------

       this.quizLocAction = mySlides;
      this.posts[0].audio_in_page = mySlides.audio_in_page;

    },
    toggleSound($event) {
      let soundQ = document.querySelector(".soundQ");
      if (soundQ) {
        // console.log($event.target.querySelector('audio'))
        let audio = $event.target.querySelector("audio");
        if (audio.paused && event.target.classList.contains("paused")) {
          let stopSound = document.querySelectorAll(".play_sound  audio");
          for (var i = 0; i < stopSound.length; ++i) {
            stopSound[i].pause();
            stopSound[i].parentElement.classList.add("paused");
          }
          // console.log("play it")
          audio.play();
          event.target.classList.remove("paused");
        } else {
          // console.log("pause it")
          audio.pause();
          event.target.classList.add("paused");
        }
        audio.onended = function () {
          event.target.parentElement.classList.add("paused");
        };
      }
    },
    resetfunction: function () {
      this.reset = true;
    },
    cancel: function () {
      this.reset = false;
    },
    confirm: function (event) {
      this.posts[0].counterCorrect = 0;
      fetch("../json/" + pageUrl + ".json")
        .then((res) => res.json())
        .then((data) => {
          this.posts = data;
          this.slide();
          this.posts[0].trueSlide.forEach((element) => {
            this.posts[0].numberOfquestion += element.quizChooses.length;
          });
          this.posts[0].endTime = this.getDate();

          direction != ""
            ? globalFunctions.UpdateStudentActivity(
                this.activityId,
                this.posts[0],
                true
              )
            : "";
        });
      this.reset = false;
    },
  },
});
