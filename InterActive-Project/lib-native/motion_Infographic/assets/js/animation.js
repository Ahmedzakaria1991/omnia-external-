export function loadTimerAnimation() {
  const Timer = bodymovin.loadAnimation({
    container: document.getElementById("Timer"),
    path: "./timer.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
  });

  Timer.goToAndStop(0, false);
  Timer.addEventListener("data_failed", (e) => {
    console.error("❌data_failed timer.json", e);
  });
  return Timer;
}
export function loadtransitionAnimation() {
  const Transition = bodymovin.loadAnimation({
    container: document.getElementById("transition"),
    path: "../../../lib-native/motion_Infographic/assets/animations/transition.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
  });

  // transition_vid.goToAndStop(0, false);
  // transition_vid.addEventListener("data_failed", (e) => {
  //   console.error("❌data_failed slidshow.json", e);
  // });
  return Transition;
}
