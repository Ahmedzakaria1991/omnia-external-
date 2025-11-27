 

let progressbar = bodymovin.loadAnimation({
    container: document.getElementById('progressbar'),
    path: './content/json/data.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Feed Right", // optional
});

let progress = bodymovin.loadAnimation({
    container: document.getElementById('progress'),
    path: './content/json/data.json', // required
    renderer: 'svg', // required
    loop: false, // optional
    autoplay: false, // optional
    name: "Feed Right", // optional
});



progressbar.goToAndStop(0, false);
// infoScreen.playSegments([0, 80], true);
