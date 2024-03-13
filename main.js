noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/VLX9n80G/download-removebg-preview.png');
}
function setup(){
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function draw(){
  image(video, 0, 0, 500, 500);
  image(clown_nose, noseX, noseY, 130, 130);
 // fill(255, 0, 0);
 // stroke(255, 0, 0);
 // circle(noseX, noseY, 20);
}

function take_snapshot() {
  save('myFilterImage.png');
}

function gotPoses(results) {
  if(results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x -60;
    noseY = results[0].pose.nose.y -70;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}