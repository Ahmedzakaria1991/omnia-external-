let conversation = document.querySelector("#conversation");
let pageUrl = conversation.getAttribute("data-urlpage");
let playerInstance = null;
import { loadAnimations } from "./animation.js";
import { getStrings } from "./data.js";

new Vue({
  el: "#conversation",
  data: {
    posts: [],
    startLo: false,
    vedioPlay: false,
    questionsStart: false,
    feedBack: false,
    hint: false,
    hintAr: false,
    numberOfQuestion: 0,
    numberOfChooses: 0,
    currentQuestion: 0,
    activeQuestion: null,
    progress: [0, 0, 0, 0],
    activeChoose: [],
    counterSolveChooseQuestion: 0,
    counterCorrect: 0,
    totalChooseQuestion: 0,
    animations: null,
    tabs: null,
    nameAnimation: "",
    screenClick: 0,
    setInterval: null,
    counterOfSad: 0,
    startFrameSad: 0,
    EndFrameSad: 0,
    totalStars: 5,
    activeStars: null,
    degreeFeedBack: 0,
    textFeedBack: "",
    hintText: "",
    counterOpenVedio: 0,
    questionAudio: new Audio(),
    conversationAudio: new Audio(),
    hintAudio: new Audio(),
    playConversation: false,
    playQuestion: false,

    // --------------------------------------------------------
    isLoading: false,
    isSuccess: false,
    dataLoaded: false,
    currentdate: "",
    date: null,
    // --------------------------------------------------------
    assetLink: {
      Dash: "",
      Hsl: "",
    },
    tokenId: "",
    activityId: 0,
    isPlaying: false,
  },
  async create() {},
  async mounted() {
    this.animations = loadAnimations();
    await this.reSize();
    await this.getData();
    window.addEventListener("resize", this.reSize);
  },
  methods: {
    async startButton() {
      if (direction == "2") {
        this.posts[0].title = this.data.title;
        this.activityId = this.data.activityId;
        this.posts[0].bloomLevels = this.data.bloomLevels;
        this.posts[0].learningObjectives = this.data.learningObjectives;
        this.posts[0].loDegree = this.data.loDegree;
        this.posts[0].keywords = this.data.keywords;
        this.posts[0].type = this.data.type;
        this.posts[0].unitId = this.data.unitId;
      }
      this.numberOfQuestion = this.posts[0].questions.length;
      this.posts[0].numberOfquestion = this.numberOfQuestion;
      this.posts[0].questions.forEach((q) => {
        this.numberOfChooses += q.chooses.length;
      });
      this.tabs = Array(this.numberOfChooses).fill("dimmed");
      this.posts[0].questions[this.currentQuestion].active = true;
      this.nameAnimation =
        this.posts[0].nameAnimation[this.posts[0].numOfAnimationUsed - 1];
      this.startLo = true;
      console.log(this.posts[0].vedio);
      if (!this.posts[0].vedio) {
        this.GetHint();
      } else {
        this.startVedio();
      }
    },

    startVedio() {
      this.vedioPlay = true;

      const source = {
        dash: this.posts[0].Dash,
        hls: this.posts[0].Hsl,
      };

      playerInstance.load(source).then(() => {
        // ✅ امسح الـ UI القديم إن وجد
        const existingUI = document.querySelector(".bmpui-ui-container");
        if (existingUI) {
          existingUI.remove();
        }

        // ✅ ابني واجهة جديدة مرة واحدة
        bitmovin.playerui.UIFactory.buildDefaultUI(playerInstance, {
          metadata: { markers: this.posts[0].markers },
        });

        playerInstance.on(
          playerInstance.exports.PlayerEvent.TimeChanged,
          () => {
            const current = Math.floor(playerInstance.getCurrentTime());
            // logic...
          }
        );
      });
    },

    closeVedio() {
      playerInstance.pause();
      this.vedioPlay = false;
      this.counterOpenVedio += 1;
      this.counterOpenVedio == 1 ? this.GetHint() : this.getQuestions();
    },
    GetHint() {
      this.hintText = this.posts[0].hintEn;
      this.hint = true;
      this.hintAudio.src = "./sounds/hint-eng.mp3";
      this.hintAudio.play();
    },
    closeHint() {
      this.hint = false;
      this.hintAudio.pause();
      this.hintAudio.currentTime = 0;
      this.getQuestions();
    },
    changeLang() {
      this.hintAr = !this.hintAr;
      if (this.hintAr) {
        this.hintText = this.posts[0].hintAr;
        this.hintAudio.pause();
        this.hintAudio.src = "./sounds/hint-ara.mp3";
        this.hintAudio.play();
      } else {
        this.hintText = this.posts[0].hintEn;
        this.hintAudio.pause();
        this.hintAudio.src = "./sounds/hint-eng.mp3";

        this.hintAudio.play();
      }
    },
    getQuestions() {
      let safeArea = document.querySelector("#safeArea");
      safeArea.style.pointerEvents = "auto";
      this.animationNormal();
      this.counterBoring();
      this.questionsStart = true;
      this.activeQuestion = this.posts[0].questions[this.currentQuestion];
      this.totalChooseQuestion = this.activeQuestion.chooses.length;
      this.counterOpenVedio == 1 || !this.posts[0].vedio
        ? setTimeout(() => {
            this.playConverstionAudio();
          }, 1000)
        : "";
    },
    playConverstionAudio() {
      if (!this.playConversation) {
        this.cancleAudio();
        let numOfAduioCon = this.currentQuestion + 1;
        this.conversationAudio.src = "./sounds/c" + numOfAduioCon + ".mp3";
        this.conversationAudio.play();
        this.animationTalking();
        this.playConversation = true;
        var mythis = this;
        var aduioListener = function () {
          mythis.playConversation = false;
          mythis.conversationAudio.removeEventListener("ended", aduioListener);
          aduioListener = null;
          mythis.animationNormal();
          mythis.playQuestionAudio();
        };
        this.conversationAudio.addEventListener("ended", aduioListener);
      } else {
        this.cancleAudio();
      }
    },
    playQuestionAudio() {
      if (!this.playQuestion) {
        this.cancleAudio();
        let numOfAduioCon = this.currentQuestion + 1;
        this.questionAudio.src = "./sounds/q" + numOfAduioCon + ".mp3";
        this.questionAudio.play();
        this.playQuestion = true;
        var mythis = this;
        var aduioListener = function () {
          mythis.playQuestion = false;
          mythis.questionAudio.removeEventListener("ended", aduioListener);
          aduioListener = null;
        };
        this.questionAudio.addEventListener("ended", aduioListener);
      } else {
        this.cancleAudio();
      }
    },
    home() {
      location.reload();
    },
    reSize: async function () {
      const elements = {
        safeArea: document.getElementById("safeArea"),
        safeAreaFeedback: document.getElementById("safeAreaFeedback"),
        safeAreaHint: document.getElementById("safeAreaHint"),
        videoContainer: document.getElementById("player"),
        borderFeedback: document.getElementById("borderFeedBack"),
        borderHint: document.getElementById("borderHint"),
      };

      const {
        safeArea,
        safeAreaFeedback,
        safeAreaHint,
        videoContainer,
        borderFeedback,
        borderHint,
      } = elements;

      // Exit early if essential elements are missing
      if (!safeArea) return;
      let width;
      let height;

      if (window.innerWidth > window.innerHeight) {
        width = window.innerWidth;
        height = window.innerHeight;
      } else {
        width = window.innerWidth;
        height = (window.innerWidth / 3) * 2;
      }

      // Calculate safe area dimensions (proportional scaling)
      const safeWidth = (1550 / 1800) * width;
      const safeHeight = (835 / 1200) * height;
      const left = (width - safeWidth) / 2;
      const top = (height - safeHeight) / 2;

      // Helper function to position elements
      const positionElement = (el) => {
        if (!el) return;
        Object.assign(el.style, {
          position: "absolute",
          width: `${safeWidth}px`,
          height: `${safeHeight}px`,
          left: `${left}px`,
          top: `${top}px`,
        });
      };

      // Apply position to safe area elements
      [safeArea, safeAreaFeedback, safeAreaHint].forEach(positionElement);

      // Adjust video container size based on aspect ratio (16:9)
      const aspectRatio = 16 / 9;
      const padding = 66;

      if (safeWidth / safeHeight > aspectRatio) {
        videoContainer.style.height = `${safeHeight - padding}px`;
        videoContainer.style.width = `${((safeHeight - padding) / 9) * 16}px`;
      } else if (safeWidth / safeHeight < aspectRatio) {
        videoContainer.style.width = `${safeWidth - padding}px`;
        videoContainer.style.height = `${((safeWidth - padding) / 16) * 9}px`;
      } else {
        videoContainer.style.width = `${safeWidth - padding}px`;
        videoContainer.style.height = `${safeHeight - padding}px`;
      }

      // Border adjustments
      if (borderFeedback) {
        borderFeedback.style.width = `${safeWidth / 2}px`;
        borderFeedback.style.height = `${safeWidth / 2 / 1.6}px`;
      }

      if (borderHint) {
        borderHint.style.width = `${safeWidth / 1.2}px`;
        borderHint.style.height = `${safeWidth / 1.2 / 2.7}px`;
      }
    },

    getData: async function () {
      this.tokenId = this.getTokenFromURL();
      if (direction == "2") {
        try {
          const response = await returnData;
          this.isSuccess = response.isSuccess;
          response.value.learningObjectAsJson = "";
          this.data = response.value;
          if (this.data.assetName && this.data.assetName.includes("/")) {
            this.data.assetName = this.data.assetName.split("/")[1];
          }
          if (this.data.subjectId && this.data.assetName) {
            await this.fetchAssetManifest(
              this.data.subjectId,
              this.data.assetName
            );
          } else {
            await this.fetchAssetManifest("tst_6r_1a", "oman_ara_02_01_v1");
          }
          ///////////////////////////////
          this.activityId = this.data.activityId;
          if (
            this.data.learningObjectAsJson !== "" &&
            this.data.learningObjectAsJson !== null
          ) {
            let jsonData = JSON.parse(this.data.learningObjectAsJson);
            this.posts[0] = jsonData;
            this.posts[0].Dash = this.assetLink.Dash;
            this.posts[0].Hsl = this.assetLink.Hsl;
            // console.log("Dash online Link:", this.posts[0].Dash);
            // console.log("Hsl online Link:", this.posts[0].Hsl);
          }
        } catch (error) {
          console.error("❌ Error in direction == 2 block:", error);
        }
      } else {
        if (runPage) {
          this.isSuccess = true;
        } else {
          try {
            const response = await returnData;
            this.isSuccess = response.value;
          } catch (error) {
            console.error("❌ Error fetching returnData:", error);
          }
        }
      }
      try {
        const res = await fetch(pageUrl + ".json");
        if (!res.ok) throw new Error("Failed to load local JSON");
        const data = await res.json();
        this.localPosts = data;
      } catch (error) {
        console.error("❌ Error loading local page data:", error);
      }

      if (!Array.isArray(this.posts) || this.posts.length === 0) {
        this.posts = this.localPosts;
        this.posts[0].Dash = this.assetLink.Dash;
        this.posts[0].Hsl = this.assetLink.Hsl;
        console.log(this.posts[0]);
      }
      if (this.posts.length !== 0) {
        setTimeout(() => {
          this.isLoading = true;
          if (!this.posts[0]) this.posts[0] = {};
          this.posts[0].startTime = this.getDate();
        }, 1000);
      } else {
        this.isLoading = false;
      }
      this.getParameters();
      if (this.posts[0].vedio) {
        const conf = {
          key: "93f21a64-3b8d-4394-88ec-3d24027c5360",
          playback: {
            autoplay: true,
            muted: false,
          },
          ui: true,
        };
        playerInstance = new bitmovin.player.Player(
          document.getElementById("player"),
          conf
        );
        this.vedioStatus();
      }
    },
    getTokenFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get("token");
    },
    async fetchAssetManifest(subjectId, assetName) {
      try {
        const url =
          baseURL +
          "Curriculum/GetAssetManifests?SubjectId=" +
          subjectId +
          "&AssetName=" +
          assetName;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.tokenId,
          },
        });

        if (!response.ok) {
          throw new Error(
            "Asset manifest fetch failed with status " + response.status
          );
        }
        const data = await response.json();
        if (data && data.value) {
          this.assetLink.Dash = data.value.Dash || "";
          this.assetLink.Hsl = data.value.Hsl || "";
          // console.log("🎯:", this.assetLink);
        } else {
          console.warn("⚠️ Unexpected asset manifest response format:", data);
        }
      } catch (error) {
        console.error("❌ Error fetching asset manifest:", error);
      }
    },
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
    togglePlayPause() {
      if (playerInstance) {
        if (this.isPlaying) {
          playerInstance.pause();
        } else {
          playerInstance.play();
        }
      }
    },
    rewindVideo() {
      if (playerInstance) {
        const currentTime = playerInstance.getCurrentTime();
        playerInstance.seek(Math.max(0, currentTime - 10)); // يرجع 10 ثواني
      }
    },
    forwardVideo() {
      if (playerInstance) {
        const currentTime = playerInstance.getCurrentTime();
        const duration = playerInstance.getDuration();
        playerInstance.seek(Math.min(duration, currentTime + 10)); // يقدم 10 ثواني
      }
    },
    vedioStatus() {
      playerInstance.on(bitmovin.player.PlayerEvent.Playing, () => {
        this.isPlaying = true;
      });

      playerInstance.on(bitmovin.player.PlayerEvent.Paused, () => {
        this.isPlaying = false;
      });

      playerInstance.on(bitmovin.player.PlayerEvent.PlaybackFinished, () => {
        this.isPlaying = false;
      });
    },

    getChooses(index, event) {
      this.cancleAudio();
      event.target.style.pointerEvents = "none";
      this.activeQuestion.chooses.forEach((el) => {
        el.show = false;
      });
      this.resetScreenClick();
      this.activeChoose = this.activeQuestion.chooses[index];
      this.activeChoose.show = true;
      let safeArea = document.querySelector("#safeArea");
      safeArea.style.pointerEvents = "none";
      this.posts[0].questions[this.currentQuestion].startTime = this.getDate();
    },
    checkChoose(event, answer) {
      this.cancleAudio();
      this.counterSolveChooseQuestion += 1;
      let correctAnswer = checkChoose(event, answer, this.posts[0].upper)[0];
      correctAnswer ? this.trueAnswerChoose() : this.falseAnswerChoose();
      this.resetScreenClick();
      this.posts[0].questions[this.currentQuestion].endTime = this.getDate();
      setTimeout(() => {
        this.activeChoose.show = false;
        if (this.counterSolveChooseQuestion != this.totalChooseQuestion) {
          let safeArea = document.querySelector("#safeArea");
          safeArea.style.pointerEvents = "auto";
        }
      }, 2000);
      this.UpdateStudentActivity();
    },
    trueAnswerChoose() {
      const firstDimmedIndex = this.tabs.findIndex((item) => item === "dimmed");
      this.tabs[firstDimmedIndex] = "true";
      this.counterCorrect += 1;
      this.posts[0].LOcorrectcounter += 1;
      this.checkQuestionEnd();
      this.animationHappy();
    },
    falseAnswerChoose() {
      const firstDimmedIndex = this.tabs.findIndex((item) => item === "dimmed");
      this.tabs[firstDimmedIndex] = "false";
      this.posts[0].questions[this.currentQuestion].numberOfTrial += 1;
      this.animationSad();
      this.getSadProgress();
    },
    checkQuestionEnd() {
      if (this.counterSolveChooseQuestion == this.totalChooseQuestion) {
        let safeArea = document.querySelector("#safeArea");
        safeArea.style.pointerEvents = "none";
        setTimeout(() => {
          this.nextQuestion();
        }, 3000);
      }
    },
    nextQuestion() {
      this.counterSolveChooseQuestion = 0;
      clearInterval(this.setInterval);
      this.resetScreenClick();
      if (this.currentQuestion + 1 < this.numberOfQuestion) {
        this.currentQuestion += 1;
        this.posts[0].questions.forEach((question) => {
          question.active = false;
        });
        this.posts[0].questions[this.currentQuestion].active = true;
        this.getQuestions();
      } else if (this.currentQuestion + 1 == this.numberOfQuestion) {
        this.getfeedback();
      }
    },
    getfeedback() {
      clearInterval(this.setInterval);
      this.feedBack = true;
      this.activeStars = this.getActiveStars();
      this.textFeedBack;
      this.degreeFeedBack = Math.round(
        (this.counterCorrect / this.numberOfChooses) * 100
      );
      console.log(this.degreeFeedBack);
      this.getTxtFeedBack();
      this.posts[0].endTime = this.getDate();
      console.log(this.activeStars);
    },

    getActiveStars() {
      if (this.numberOfChooses <= 0) return 0;
      return Math.round(
        (this.counterCorrect / this.numberOfChooses) * this.totalStars
      );
    },
    animationNormal() {
      this.animations[this.nameAnimation].playSegments([2, 60], true);
      this.animations[this.nameAnimation].loop = true;
    },
    animationHappy() {
      this.animations[this.nameAnimation].playSegments([61, 120], true);
      this.animations[this.nameAnimation].loop = false;
      this.resetAnimate();
    },
    animationBored() {
      this.animations[this.nameAnimation].playSegments([121, 180], true);
      this.animations[this.nameAnimation].loop = false;
      this.resetAnimate();
    },
    animationSad() {
      this.animations[this.nameAnimation].playSegments([181, 240], true);
      this.animations[this.nameAnimation].loop = false;
      this.resetAnimate();
    },
    animationTalking() {
      this.animations[this.nameAnimation].loop = true;
      this.animations[this.nameAnimation].playSegments([241, 269], true);
    },
    resetAnimate() {
      setTimeout(() => {
        this.animations[this.nameAnimation].playSegments([0, 60], true);
        this.animations[this.nameAnimation].loop = true;
      }, 2000);
    },
    counterBoring() {
      this.setInterval = setInterval(() => {
        this.screenClick += 1;
        console.log(this.screenClick);
        if (this.screenClick == 30) {
          this.screenClick = 0;
          this.animationBored();
        }
      }, 1000);
    },
    resetScreenClick() {
      this.screenClick = 0;
    },

    getSadProgress() {
      let num = Math.round(this.numberOfChooses / 2);
      let totalFrames = 60;
      let playFram = Math.round(totalFrames / num);
      if (this.EndFrameSad < totalFrames) {
        this.startFrameSad = this.counterOfSad * playFram;
        this.startFrameSad > 0
          ? (this.startFrameSad = this.startFrameSad + 1)
          : "";
        this.counterOfSad += 1;
        this.EndFrameSad = playFram * this.counterOfSad;
        this.animations.sad.playSegments(
          [this.startFrameSad, this.EndFrameSad],
          true
        );
        if (this.EndFrameSad >= totalFrames) {
          setTimeout(() => {
            this.getfeedback();
          }, 3000);
        } else {
          this.checkQuestionEnd();
        }
      }
      console.log(this.startFrameSad, this.EndFrameSad);
    },
    home() {
      location.reload();
    },
    getTxtFeedBack() {
      let strings = getStrings();
      if (this.degreeFeedBack <= 16) {
        this.textFeedBack = strings.feedBackTexts[0].text;
      } else if (this.degreeFeedBack >= 17 && this.degreeFeedBack <= 32) {
        this.textFeedBack = strings.feedBackTexts[1].text;
      } else if (this.degreeFeedBack >= 33 && this.degreeFeedBack <= 49) {
        this.textFeedBack = strings.feedBackTexts[2].text;
      } else if (this.degreeFeedBack >= 50 && this.degreeFeedBack <= 66) {
        this.textFeedBack = strings.feedBackTexts[3].text;
      } else if (this.degreeFeedBack >= 67 && this.degreeFeedBack <= 82) {
        this.textFeedBack = strings.feedBackTexts[4].text;
      } else if (this.degreeFeedBack >= 83 && this.degreeFeedBack <= 99) {
        this.textFeedBack = strings.feedBackTexts[5].text;
      } else if (this.degreeFeedBack == 100) {
        this.textFeedBack = strings.feedBackTexts[6].text;
      }
    },
    openVedio() {
      this.resetAll();
      this.questionsStart = false;
      this.vedioPlay = true;
      playerInstance.play();
      playerInstance.on(bitmovin.player.PlayerEvent.Playing, () => {
        this.isPlaying = true;
      });
    },
    openHint() {
      this.resetAll();
      this.questionsStart = false;
      this.hintText = this.posts[0].hintEn;
      this.hint = true;
    },

    resetAll() {
      clearInterval(this.setInterval);
      this.resetScreenClick();
      this.cancleAudio();
    },

    cancleAudio() {
      this.conversationAudio.pause();
      this.questionAudio.pause();
      this.playConversation = false;
      this.playQuestion = false;
      this.animationNormal();
    },

    UpdateStudentActivity() {
      direction != ""
        ? ((this.posts[0].title = this.data.title),
          (this.posts[0].bloomLevels = this.data.bloomLevels),
          (this.posts[0].learningObjectives = this.data.learningObjectives),
          (this.posts[0].loDegree = this.data.loDegree),
          (this.posts[0].keywords = this.data.keywords),
          (this.posts[0].type = this.data.type),
          (this.posts[0].unitId = this.data.unitId),
          globalFunctions.UpdateStudentActivity(this.activityId, this.posts[0]))
        : "";
    },

    getParameters() {
      let urlParams = new URLSearchParams(window.location.search);
      let vediox = this.parseBoolean(urlParams.get("vedio")) || false;
      let character = parseInt(urlParams.get("character")) || 1;
      this.posts[0].numOfAnimationUsed = character;
      this.posts[0].vedio = vediox;
    },
    parseBoolean(value) {
      if (typeof value === "string") {
        const normalized = value.trim().toLowerCase();
        return ["true", "1", "yes", "on"].includes(normalized);
      }
      return Boolean(value);
    },
  },
});
