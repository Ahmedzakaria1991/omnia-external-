function checkChoose(event, answer,upper) {
     let correctAnswer = null
    let chooses = document.querySelectorAll(".active .activeChoose .choose");
    let correct = document.querySelectorAll(".active .activeChoose .choose.correct");
    chooses.forEach((el) => {
      el.classList.remove("false");
    });
   
    if (answer.answer) {
      correct.forEach((el) => {
        el.classList.add("true");
      });
     correctAnswer = true
    } else {
      event.target.classList.add("false");
      correctAnswer = false
    }
    answer.solve = true
    setTimeout(() => {
      if (!upper) {
        correct.forEach((el) => {
          el.classList.add("true");
        });
      }
    },1000)
   
    chooses.forEach((el) => {
      el.style.cssText = "pointer-events:none";
    });
    
    return [correctAnswer , answer ] ;
}