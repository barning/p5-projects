import ml5 from 'ml5';

export default function sketch(s) {
  let facemesh;
  let video;
  let predictions = [];

  s.setup = async () => {
    s.createCanvas(500, 500);

    // Setup video capture
    video = s.createCapture(s.VIDEO);
    video.size(500, 500);
    video.hide();

    // Load facemesh model asynchronously
    facemesh = await ml5.facemesh(video, { flipHorizontal: true }, modelReady);

    // Listen for predictions
    facemesh.on('predict', (results) => {
      predictions = results;
    });
  };

  function modelReady() {
    console.log('Facemesh model loaded.');
  }

  s.draw = () => {
    s.background(230, 200, 230);
    s.image(video, 0, 0, 500, 500);

    drawKeypoints();
  };

  // Function to draw ellipses over detected keypoints
  function drawKeypoints() {
    for (let i = 0; i < predictions.length; i += 1) {
      const keypoints = predictions[i].scaledMesh;

      for (let j = 0; j < keypoints.length; j += 1) {
        const [x, y, z] = keypoints[j]; // z-Wert hinzufügen für 3D-Tiefe (falls benötigt)
        s.fill(50, 50, 50, 150);
        s.noStroke();
        s.ellipse(x, y, 4, 4); // Größere Punkte für bessere Sichtbarkeit
      }
    }
  }
}