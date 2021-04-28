export default function sketch(s) {
  let centerX, centerY;

  let x = [];
  let y = [];

  const width = 500;
  const height = 500;

  const detail = 5;
  const initRadius = 20;
  const stepSize = 2;

  s.setup = () => {
    s.createCanvas(width, height);
    centerX = 0;
    centerY = -50;

    var angle = s.radians(360 / detail);

    for (var i = 0; i < detail; i++) {
      x.push(s.cos(angle * 0 ) * initRadius);
      y.push(s.sin(angle * 0 ) * initRadius);
    }

    s.background(230,200,230);
  };

  s.draw = () => {
    for (let i = 0; i < detail; i++) {
      x[i] += s.random(-stepSize, stepSize);
      y[i] += s.random(-stepSize, stepSize);
    }
    s.noFill();
    s.strokeWeight(1);
    s.stroke(50, 50, 50, 50);
    s.beginShape();
      s.curveVertex(x[detail - 1] + centerX, y[detail - 1] + centerY);
      
      for (let i = 0; i < detail; i++) {
        s.curveVertex(x[i] + centerX, y[i] + centerY);
      }

      s.curveVertex(x[0] + centerX, y[0] + centerY);
      s.curveVertex(x[1] + centerX, y[1] + centerY);
    s.endShape();

    centerX+= s.random(0.1,0.5);
    centerY+= s.random(0.1,0.5);
    if (centerX >= s.width) {
      s.noLoop();
    }
  };

  s.mousePressed = () => {

  };
}