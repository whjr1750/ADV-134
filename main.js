status = "";
object = [];

function preload() {

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    object = results;
}

function draw() {
    image(video, 0, 0, 300, 300);
    if (status != "") {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.length; i++) {
            fill("#fc0303");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x - 150, object[i].y - 150);
            noFill();
            stroke("#fc0303");
            rect(object[i].x - 150, object[i].y - 150, object[i].width - 500, object[i].height - 300);
        }
    }
    else {
        // allert.play()
    }
}
function play() {
    allert = "email_allert.mp3"
}

