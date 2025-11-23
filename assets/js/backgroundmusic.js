 
new Vue({
  el: "#music",
  data: {
    title: "Background Music",
    background_sound: "../../../assets/audio/music.mp3",
    toggle: "toggle-sound",
  },
  methods: {
    toggleSound() {
      let audio = this.$refs.audio;
      if (audio.paused && event.target.classList.contains("paused")) {
        // console.log("play it")
        audio.play();
        event.target.classList.remove("paused");
      } else {
        // console.log("pause it")
        audio.pause();
        event.target.classList.add("paused");
      }
    },
  },
});
