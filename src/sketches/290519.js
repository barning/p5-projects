export default function sketch(s) {

  var pointArray = [];
  const size = 500;
  s.setup = () => {
    s.createCanvas(size, size);
  }

  s.draw = () => {
    s.background(255);

    s.textStyle(s.BOLD);
    s.text('Click on canvas to create a shape', 10, 20);

    s.stroke('#3700B3');

    s.beginShape();
    for (let i = 0; i < pointArray.length; i++) {
      let pointX = pointArray[i].x;
      let pointY = pointArray[i].y;
      s.vertex(pointX, pointY)
    }
    s.endShape(s.CLOSE);
  }

  s.mousePressed = () => {
    let newpoint = s.createVector(s.mouseX, s.mouseY);
    s.append(pointArray, newpoint);
  }
}