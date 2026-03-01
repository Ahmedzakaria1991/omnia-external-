let Question = document.querySelector("#Question");
let pageUrl = Question.getAttribute("data-urlpage");

window.app = new Vue({
  el: "#Question",

  data() {
    return {
      posts: [],
      localPosts: [],
      currentQuestion: null,
      questionIndex: 0,

      totalQuestions: 0,

      // status

      activityId: 0,
      dropResults: [],

      draggedItem: null,
      dropAnswers: [],
      touchElement: null,
      offsetX: 0,
      offsetY: 0,

      line: null,
      matchID: null,
      dropID: null,
      endX: null,
      endY: null,
      svgRect: null,
      lines: [],
      svg: null,
      lineCounter: 0,
      isDrawing: false,
      currentSourceEl: null,
      feedback: false,
      correctAnswer: false,
      numOfAttemp: 0,
      borderQuestion: null,
      titlePage: "",
      isMobile: false,
      startX: null,
      startY: null,
      numberOfAnswer: 0,
      finishLO: false,
      start: false,
      // --------------------------------------------------------
      isLoading: false,
      isSuccess: false,
      dataLoaded: false,
      currentdate: "",
      date: null,
      // --------------------------------------------------------
    };
  },

  async mounted() {
    await this.resize();
    await this.getData();
    window.addEventListener("resize", this.resize);

    this.checkDevice();
    window.addEventListener("resize", this.checkDevice);
  },

  computed: {
    currentPost() {
      return this.posts?.[0] || null;
    },
    questions() {
      return this.currentPost?.questions || [];
    },
    shuffledQuestions() {
      return this.shuffleArray(this.questions);
    },
  },

  methods: {
    /* ===================== BASIC ===================== */

    home() {
      location.reload();
    },

    getDate() {
      const now = new Date();
      return `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}
      ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    },

    /* ===================== RESIZE ===================== */
    resize() {
      const viewport = document.getElementById("Question");
      const safeArea = document.getElementById("safeArea");
      const ASPECT = 16 / 9;
      const MAX_W = 1920;
      const MAX_H = 1080;
      const availW = viewport.clientWidth;
      const availH = viewport.clientHeight;
      let finalW, finalH;

      const wFromWidth = Math.min(availW, MAX_W);
      const hFromWidth = wFromWidth / ASPECT;

      const hFromHeight = Math.min(availH, MAX_H);
      const wFromHeight = hFromHeight * ASPECT;

      if (hFromWidth <= availH) {
        finalW = wFromWidth;
        finalH = hFromWidth;
      } else {
        finalW = wFromHeight;
        finalH = hFromHeight;
      }

      safeArea.style.width = finalW + "px";
      safeArea.style.height = finalH + "px";
    },

    checkDevice() {
      this.isMobile = window.matchMedia("(pointer: coarse)").matches;
    },

    /* ===================== DATA ===================== */

    async getData() {
      if (direction == "2") {
        await returnData.then((response) => {
          this.isSuccess = response.isSuccess;
          this.data = response.value;
          this.activityId = this.data.activityId;
          if (
            this.data.learningObjectAsJson != "" &&
            this.data.learningObjectAsJson != null
          ) {
            let jsonData = JSON.parse(this.data.learningObjectAsJson);
            this.posts[0] = jsonData;
          }
          // console.log(this.data);
        });
      } else {
        if (runPage) {
          this.isSuccess = true;
        } else {
          await returnData.then((response) => {
            this.isSuccess = response.value;
          });
        }
      }
      await fetch(pageUrl + ".json")
        .then((res) => res.json())
        .then((data) => {
          this.localPosts = data;
        });
      if (this.posts.length == 0) {
        this.posts = this.localPosts;
      }
      this.posts.length != 0
        ? setTimeout(() => {
            this.isLoading = true;
            this.posts[0].startTime = this.getDate();
            this.posts[0].numberOfquestion = this.posts[0].questions.length;
          }, 1000)
        : (this.isLoading = false);
      this.titlePage = this.posts[0].navgations[0].title;
      this.totalQuestions = this.posts[0].questions.length;
    },

    /* ===================== NAVIGATION ===================== */

    startLo() {
      this.start = true;
      this.startQuestions();
    },

    /* ===================== QUESTIONS ===================== */

    startQuestions() {
      this.questionIndex = 0;
      this.posts[0].questions[this.questionIndex].startTime = this.getDate();
      this.loadQuestion();
    },

    loadQuestion() {
      this.borderQuestion = document.getElementById("border-content");
      if (this.questionIndex < this.questions.length) {
        this.questions.forEach((q) => (q.active = false));
        this.questions[this.questionIndex].active = true;
        this.currentQuestion = this.questions[this.questionIndex];
        this.titlePage = this.currentQuestion.title;
      } else {
        this.posts[0].endTime = this.getDate();
        this.finishLO = true;
        this.finished();
      }
    },

    nextQuestion() {
      this.feedback = false;
      this.posts[0].questions[this.questionIndex].endTime = this.getDate();
      this.questionIndex++;
      this.numOfAttemp = 0;
      this.loadQuestion();
    },

    reloadQuestion() {
      resetAnswer();
      this.feedback = false;
      this.currentQuestion.type == "dragDrop" ? this.resetDragDrop() : "";
      this.currentQuestion.type == "match" ? this.resetMatching() : "";
    },

    /* ===================== ANSWERS ===================== */

    selectChoose(event, answer) {
      this.numOfAttemp += 1;
      this.currentQuestion.numberOfTrial = this.numOfAttemp;
      const [isCorrect] = checkChoose(event, answer);
      this.correctAnswer = isCorrect;
      const hasTwoAnswers = this.currentQuestion.answers.length === 2;
      this.numberOfAnswer = this.currentQuestion.answers.length;
      const isSecondAttempt = this.numOfAttemp === 2;
      const shouldShowTrueAnswer = this.correctAnswer;
      if (!shouldShowTrueAnswer) {
        if (hasTwoAnswers) {
          getTrueAnswer();
          this.borderQuestion.classList.add("poniterEvent");
          setTimeout(() => {
            this.getFeedback();
          }, 2000);
        }
        if (!hasTwoAnswers && !isSecondAttempt) {
          this.borderQuestion.classList.add("poniterEvent");
          setTimeout(() => {
            this.getFeedback();
          }, 2000);
        }
        if (!hasTwoAnswers && isSecondAttempt) {
          getTrueAnswer();
          this.borderQuestion.classList.add("poniterEvent");
          setTimeout(() => {
            this.getFeedback();
          }, 2000);
        }
      } else {
        this.borderQuestion.classList.add("poniterEvent");
        this.posts[0].LOcorrectcounter += 1;
        setTimeout(() => {
          this.getFeedback();
        }, 2000);
      }
      this.UpdateStudentActivity();
    },

    /* ================= drag web ================= */
    dragstart(drag) {
      this.draggedItem = drag;
    },
    handleDrop(index) {
      if (!this.draggedItem) return;
      if (this.dropAnswers[index]) {
        this.dropAnswers[index].placed = false;
      }
      this.$set(this.dropAnswers, index, this.draggedItem);
      this.draggedItem.placed = true;
      this.draggedItem = null;
    },

    removeFromDrop(index) {
      const item = this.dropAnswers[index];
      if (!item) return;
      item.placed = false;
      this.$set(this.dropAnswers, index, null);
    },

    checkDragDrop() {
      this.numOfAttemp += 1;
      this.currentQuestion.numberOfTrial = this.numOfAttemp;
      this.numberOfAnswer = this.currentQuestion.drags.length;
      this.borderQuestion.classList.add("poniterEvent");
      let correct = true;
      this.dropResults = [];
      this.currentQuestion.drags.forEach((drag, index) => {
        if (
          !this.dropAnswers[index] ||
          this.dropAnswers[index].id !== drag.id
        ) {
          this.dropResults[index] = false;
          correct = false;
        } else {
          this.dropResults[index] = true;
        }
      });
      if (correct) {
        console.log("Correct Order ✅");
        this.posts[0].LOcorrectcounter += 1;
      } else {
        console.log("Wrong Order ❌");
      }
      this.correctAnswer = correct;
      this.checkStateFeedBack();
      this.UpdateStudentActivity();
    },
    checkStateFeedBack() {
      if (!this.correctAnswer && this.numOfAttemp == 2) {
        setTimeout(() => {
          this.currentQuestion.type == "dragDrop"
            ? this.shoWDragDropAnswer()
            : "";
          this.currentQuestion.type == "match"
            ? this.showCorrectMatching()
            : "";

          setTimeout(() => {
            this.getFeedback();
          }, 5000);
        }, 3000);
      } else if (!this.correctAnswer && this.numOfAttemp == 1) {
        setTimeout(() => {
          this.getFeedback();
        }, 5000);
      } else {
        setTimeout(() => {
          this.getFeedback();
        }, 5000);
      }
    },
    resetDragDrop() {
      this.dropAnswers = [];
      this.dropResults = [];

      this.currentQuestion.drags.forEach((drag) => {
        drag.placed = false;
      });

      this.correctAnswer = false;
      this.draggedItem = null;
    },
    shoWDragDropAnswer() {
      this.currentQuestion.drags.forEach((drag, index) => {
        this.$set(this.dropAnswers, index, drag);
      });
      this.dropResults = this.currentQuestion.drags.map(() => true);
    },

    /* ================= drag mobile ================= */

    touchStartDrag(event, drag) {
      event.preventDefault();

      this.draggedItem = drag;
      this.touchElement = event.currentTarget;

      const rect = this.touchElement.getBoundingClientRect();

      // المسافة بين الصباع وأعلى/شمال العنصر
      this.offsetX = event.touches[0].clientX - rect.left;
      this.offsetY = event.touches[0].clientY - rect.top;

      this.touchElement.style.position = "fixed";
      this.touchElement.style.zIndex = "1000";
    },

    touchMoveDrag(event) {
      if (!this.touchElement) return;

      event.preventDefault();

      this.touchElement.style.left =
        event.touches[0].clientX - this.offsetX + "px";

      this.touchElement.style.top =
        event.touches[0].clientY - this.offsetY + "px";
    },

    touchEndDrag(event) {
      if (!this.touchElement) return;

      const touch = event.changedTouches[0];

      // 🔥 نخفي العنصر مؤقتًا
      this.touchElement.style.display = "none";

      let dropElement = document.elementFromPoint(touch.clientX, touch.clientY);

      // رجعيه تاني
      this.touchElement.style.display = "";

      // مهم جدًا عشان لو لمس عنصر جوا الـ drop
      if (dropElement) {
        dropElement = dropElement.closest(".drop");
      }

      if (dropElement) {
        const drops = Array.from(document.querySelectorAll(".drop"));
        const index = drops.indexOf(dropElement);

        if (index !== -1) {
          this.handleDrop(index);
        }
      }

      // reset style
      this.touchElement.style.position = "";
      this.touchElement.style.left = "";
      this.touchElement.style.top = "";
      this.touchElement.style.zIndex = "";

      this.touchElement = null;
    },
    /* ===================== Match web ===================== */

    createSVG(ev) {
      const container = document.querySelector(".svg-dist");
      if (!container) return;

      this.lineCounter++;

      this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this.svgRect = container.getBoundingClientRect();

      this.svg.style.position = "absolute";
      this.svg.style.top = "0";
      this.svg.style.left = "0";
      this.svg.style.width = "100%";
      this.svg.style.height = "100%";
      this.svg.style.pointerEvents = "none";

      this.svg.setAttribute("data-line-id", this.lineCounter);

      this.line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      this.line.setAttribute("stroke", "black");
      this.line.setAttribute("stroke-width", "3");

      this.svg.appendChild(this.line);
      container.appendChild(this.svg);

      this.lines.push({
        id: this.lineCounter,
        sourceEl: ev.currentTarget,
        targetEl: null,
        line: this.line,
        svg: this.svg,
      });

      // خزني id الخط على العنصر نفسه
      ev.currentTarget.dataset.activeLine = this.lineCounter;
    },

    dragStart(ev) {
      const oldLineId = ev.currentTarget.dataset.activeLine;

      // لو العنصر عليه خط قديم امسحه
      if (oldLineId) {
        const index = this.lines.findIndex((l) => l.id == oldLineId);
        if (index !== -1) {
          this.lines[index].svg.remove();
          this.lines.splice(index, 1);
        }
      }

      this.createSVG(ev);

      const rect = ev.currentTarget.getBoundingClientRect();
      console.log(rect);

      let x = ev.currentTarget.classList.contains("flip")
        ? rect.right - this.svgRect.left
        : rect.left - this.svgRect.left;

      let y = rect.top - this.svgRect.top + rect.height / 2;

      this.line.setAttribute("x1", x);
      this.line.setAttribute("y1", y);
      this.line.setAttribute("x2", x);
      this.line.setAttribute("y2", y);
    },

    dragOver(ev) {
      ev.preventDefault();
      if (!this.line) return;

      const x = ev.clientX - this.svgRect.left;
      const y = ev.clientY - this.svgRect.top;

      this.line.setAttribute("x2", x);
      this.line.setAttribute("y2", y);
    },

    dragEnd(ev, drag) {
      const dropZone = document.elementFromPoint(ev.clientX, ev.clientY);
      if (!dropZone || !dropZone.dataset.number) {
        this.removeline();
        return;
      }
      this.drop(dropZone, drag);
    },

    drop(dropZone) {
      const rect = dropZone.getBoundingClientRect();

      let x = dropZone.classList.contains("flip")
        ? rect.right - this.svgRect.left
        : rect.left - this.svgRect.left;

      let y = rect.top - this.svgRect.top + dropZone.clientHeight / 2;

      this.line.setAttribute("x2", x);
      this.line.setAttribute("y2", y);

      const currentLine = this.lines[this.lines.length - 1];

      currentLine.targetEl = dropZone;

      // خزني id الخط على التارجت كمان
      dropZone.dataset.activeLine = currentLine.id;
    },

    removeline() {
      if (!this.line) return;

      this.line.remove();

      const index = this.lines.findIndex((l) => l.line === this.line);
      if (index !== -1) this.lines.splice(index, 1);

      this.line = null;
    },

    removeExistingLine(pointID) {
      const index = this.lines.findIndex((l) => l.source == pointID);
      if (index !== -1) {
        this.lines[index].line.remove();
        this.lines.splice(index, 1);
      }
    },

    checkAnswers() {
      this.numOfAttemp += 1;
      this.currentQuestion.numberOfTrial = this.numOfAttemp;
      this.numberOfAnswer = this.currentQuestion.matchs.length;
      this.borderQuestion.classList.add("poniterEvent");
      let correct = true;
      let counterCorrectAnswer = 0;
      this.lines.forEach((l) => {
        const sourcePoint = l.sourceEl.dataset.number;
        const targetPoint = l.targetEl?.dataset.number;

        if (!targetPoint) return;

        if (sourcePoint == targetPoint) {
          // ✅ صحيح
          l.line.setAttribute("stroke", "green");
          l.line.setAttribute("stroke-width", "4");
          counterCorrectAnswer += 1;
        } else {
          // ❌ خطأ
          l.line.setAttribute("stroke", "red");
          l.line.setAttribute("stroke-width", "4");
          correct = false;
        }
      });
      this.numberOfAnswer == counterCorrectAnswer
        ? ((this.correctAnswer = true), (this.posts[0].LOcorrectcounter += 1))
        : (this.correctAnswer = false);

      this.checkStateFeedBack();
      this.UpdateStudentActivity();
    },

    /* ===================== Match mobile ===================== */
    getTouchPosition(ev) {
      const touch = ev.changedTouches[0];
      return {
        x: touch.clientX,
        y: touch.clientY,
      };
    },
    touchStart(ev) {
      const target = ev.currentTarget;

      this.currentSourceEl = target;

      const oldLineId = target.dataset.activeLine;

      // امسحي الخط القديم لو موجود
      if (oldLineId) {
        const index = this.lines.findIndex((l) => l.id == oldLineId);
        if (index !== -1) {
          this.lines[index].svg.remove();
          this.lines.splice(index, 1);
        }
      }

      // أنشئ SVG
      this.createSVG({ currentTarget: target, target: target });

      const rect = target.getBoundingClientRect();

      let x = target.classList.contains("flip")
        ? rect.right - this.svgRect.left
        : rect.left - this.svgRect.left;

      let y = rect.top - this.svgRect.top + rect.height / 2;

      this.line.setAttribute("x1", x);
      this.line.setAttribute("y1", y);
      this.line.setAttribute("x2", x);
      this.line.setAttribute("y2", y);

      this.isDrawing = true;
    },
    touchMove(ev) {
      if (!this.isDrawing || !this.line) return;

      const pos = this.getTouchPosition(ev);

      const x = pos.x - this.svgRect.left;
      const y = pos.y - this.svgRect.top;

      this.line.setAttribute("x2", x);
      this.line.setAttribute("y2", y);
    },
    touchEnd(ev) {
      if (!this.isDrawing) return;

      const pos = this.getTouchPosition(ev);

      const dropZone = document.elementFromPoint(pos.x, pos.y);

      if (!dropZone || !dropZone.dataset.number) {
        this.removeline();
        this.isDrawing = false;
        return;
      }

      this.drop(dropZone);

      this.isDrawing = false;
    },
    resetMatching() {
      this.lines.forEach((item) => {
        if (item.svg) {
          item.svg.remove();
        }
      });
      this.lines = [];
      this.lineCounter = 0;
      const elements = document.querySelectorAll("[data-active-line]");
      elements.forEach((el) => {
        delete el.dataset.activeLine;
      });
      this.line = null;
      this.svg = null;
    },
    drawCorrectLine(sourceEl, targetEl) {
      const container = document.querySelector(".svg-dist");
      if (!container) return;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      const svgRect = container.getBoundingClientRect();
      svg.style.position = "absolute";
      svg.style.top = "0";
      svg.style.left = "0";
      svg.style.width = "100%";
      svg.style.height = "100%";
      svg.style.pointerEvents = "none";

      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );

      line.setAttribute("stroke", "green"); // 👈 لون الحل الصح
      line.setAttribute("stroke-width", "3");

      const rect1 = sourceEl.getBoundingClientRect();
      const rect2 = targetEl.getBoundingClientRect();
      console.log(rect1);

      const x1 = rect1.left - svgRect.left;
      const y1 = rect1.top - svgRect.top + rect1.height / 2;

      const x2 = rect2.right - svgRect.left;
      const y2 = rect2.top - svgRect.top + rect2.height / 2;

      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);

      svg.appendChild(line);
      container.appendChild(svg);

      this.lines.push({ svg, line });
    },
    showCorrectMatching() {
      this.resetMatching(); // امسحي أي خطوط غلط الأول
      this.currentQuestion.matchs.forEach((match) => {
        const sourceEl = document.querySelector(
          `.point.drag[data-number="${match.point}"]`,
        );
        const targetEl = document.querySelector(
          `.point.drop[data-number="${match.point}"]`,
        );
        if (sourceEl && targetEl) {
          this.drawCorrectLine(sourceEl, targetEl);
        }
      });
    },

    getFeedback() {
      this.feedback = true;
      this.borderQuestion.classList.remove("poniterEvent");
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

    home() {
      location.reload();
    },
    finished() {
      let result =
        (this.posts[0].LOcorrectcounter / this.posts[0].numberOfquestion) * 100;
      this.posts[0].counterCorrect =
        result == 0
          ? 0
          : result == 0
            ? 0
            : result <= 25
              ? 2.5
              : result <= 50
                ? 5
                : result <= 75
                  ? 7.5
                  : 10;
      finalResponse.submitData(
        JSON.stringify(this.posts[0]),
        (this.posts[0].counterCorrect * 4) / 10,
        this.posts[0].counterCorrect,
      );
    },
    shuffleArray(arr) {
      const newArr = [...arr];
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    },
  },
});
