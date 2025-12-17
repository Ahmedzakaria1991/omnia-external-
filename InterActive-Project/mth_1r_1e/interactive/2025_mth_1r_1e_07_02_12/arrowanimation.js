// arrowanimation_1.js

let arrowAnimation = null;

const QUESTION_FRAMES = [
  { start: 1,   end: 52   },  // سؤال 1
  { start: 55,  end: 179  },  // سؤال 2
  { start: 182, end: 367  },  // سؤال 3
  { start: 370, end: 574  }   // سؤال 4
];

function initArrowAnimation() {
  const container = document.querySelector(".arrowanimation");
  if (!container) {
    console.warn("تحذير: عنصر .arrowanimation غير موجود");
    return;
  }

  // تحقق من وجود الملف أولاً
  fetch("./arrowanimation/data.json")
    .then(r => {
      if (!r.ok) throw new Error("الملف غير موجود أو المسار غلط");
      return r.json();
    })
    .then(data => {
      // console.log("تم تحميل data.json بنجاح:", data.op, "فريم");

      arrowAnimation = bodymovin.loadAnimation({
        container: container,
        animationData: data,  // استخدم البيانات مباشرة
        renderer: "svg",
        loop: false,
        autoplay: false,
        name: "main-arrow-animation"
      });

      // console.log("Total Frames:", arrowAnimation.totalFrames);
      arrowAnimation.stop();
    })
    .catch(err => {
      console.error("خطأ في تحميل الأنيميشن:", err);
    });
}

// الانتقال لفريم البداية (بدون تشغيل)
function goToStartFrame(questionIndex) {
  const frames = QUESTION_FRAMES[questionIndex];
  if (!frames || !arrowAnimation) {
    console.warn(`تحذير: لا يوجد فريم للسؤال ${questionIndex + 1}`);
    return;
  }
  arrowAnimation.playSegments([frames.start, frames.start + 1], true);
  // arrowAnimation.goToAndStop(frames.start, true);
  // console.log(`تم الانتقال إلى فريم ${frames.start} (سؤال ${questionIndex + 1})`);
}

// تشغيل الأنيميشن من البداية للنهاية
function playQuestion(questionIndex) {
  const frames = QUESTION_FRAMES[questionIndex];
  if (!frames || !arrowAnimation) {
    console.error(`خطأ: لا يوجد سؤال رقم ${questionIndex + 1}`);
    return;
  }
  arrowAnimation.playSegments([frames.start, frames.end], true);
}

// تصدير الوظائف
window.ArrowAnimation = {
  init: initArrowAnimation,
  goTo: goToStartFrame,        // جديد: لما السؤال يظهر
  play: playQuestion,          // قديم: لما تضغط تحقق
  getFrames: () => QUESTION_FRAMES,
  raw: () => arrowAnimation
};