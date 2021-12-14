import ml5 from 'ml5';

// ml5.js: Pose Estimation with PoseNet
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/ml5/7.1-posenet.html
// https://youtu.be/OIo-DIOkNVg
// https://editor.p5js.org/codingtrain/sketches/ULA97pJXR
export default function sketch(s) {
  let facemesh;
  let video;
  let predictions = [];
  
  s.setup = () => {
    s.createCanvas(500, 500);
    video = s.createCapture(s.VIDEO);
    video.size(500, 500);
  
    facemesh = ml5.facemesh(video, modelReady);
  
    // This sets up an event that fills the global variable "predictions"
    // with an array every time new predictions are made
    facemesh.on("predict", results => {
      predictions = results;
    });
  
    // Hide the video element, and just show the canvas
    video.hide();
  }
  
  function modelReady() {
    console.log("Model ready!");
  }
  
  s.draw = () => {
    s.background(230,200,230);
    
    // We can call both functions to draw all keypoints
    drawKeypoints();
  }
  
  // A function to draw ellipses over the detected keypoints
  function drawKeypoints() {
    for (let i = 0; i < predictions.length; i += 1) {
      const keypoints = predictions[i].scaledMesh;
  
      // Draw facial keypoints.
      for (let j = 0; j < keypoints.length; j += 1) {
        const [x, y] = keypoints[j];
  
        s.fill('rgba(50,50,50, 0.1)');
        s.ellipse(x, y, 1, 1);
      }
    }
  }
}