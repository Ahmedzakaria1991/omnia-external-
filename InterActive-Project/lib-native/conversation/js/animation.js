export function loadAnimations() {
  let father = bodymovin.loadAnimation({
    container: document.getElementById("father"),
    path: "../../../lib-native/conversation/json/father.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: false, // optional
    // name: "Feed Right", // optional
  });

   let mother = bodymovin.loadAnimation({
    container: document.getElementById("mother"),
    path: "../../../lib-native/conversation/json/mother.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: false, // optional
    // name: "Feed Right", // optional
  });

   let boy = bodymovin.loadAnimation({
    container: document.getElementById("boy"),
    path: "../../../lib-native/conversation/json/boy.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: false, // optional
    // name: "Feed Right", // optional
  });

   let girl = bodymovin.loadAnimation({
    container: document.getElementById("girl"),
    path: "../../../lib-native/conversation/json/girl.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: false, // optional
    // name: "Feed Right", // optional
  });

   let grandfather = bodymovin.loadAnimation({
    container: document.getElementById("grandfather"),
    path: "../../../lib-native/conversation/json/grandfather.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: false, // optional
    // name: "Feed Right", // optional
  });


   let grandmother = bodymovin.loadAnimation({
    container: document.getElementById("grandmother"),
    path: "../../../lib-native/conversation/json/grandmother.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: false, // optional
    // name: "Feed Right", // optional
  });

    let sad = bodymovin.loadAnimation({
    container: document.getElementById("sad"),
    path: "../../../lib-native/conversation/json/sad.json", // required
    renderer: "svg", // required
    loop: false, // optional
    autoplay: false, // optional
    // name: "Feed Right", // optional
  });
   let start = bodymovin.loadAnimation({
    container: document.getElementById("start"),
    path: "../../../lib-native/conversation/json/start.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true, // optional
    // name: "Feed Right", // optional
  });
  
  return {father,mother,boy,girl,grandfather,grandmother,sad,start};
}
