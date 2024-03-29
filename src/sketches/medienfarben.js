import returnRandomColor from '../helpers/colors';

export default function sketch(s) {

  let bubbles = [];

  let ctx = 0;

  const size = 500;

  s.setup = () => {
    ctx = s.createCanvas(size, size);
    s.noLoop();
  }

  s.draw = () => {
    s.background(250);
    bubbles = [];
    for (var i = 0; i < 10; i++) {
      bubbles.push(new Bubble());
    }
    for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].display();
    }
    drawText();
  }

  // s.mousePressed = () => {
  //   s.redraw();
  //   s.save('myCanvas.jpg');
  // }

  function drawText() {
    s.textAlign(s.LEFT);
    s.textStyle(s.BOLD);
    s.fill(250);
    s.textSize(size / 4);
    s.textLeading(size / 4 * 0.9);
    s.text('medien\nfarben', (size / 2) / 8, size / 2 - 20);
  }

  function Bubble() {
    this.diameter = s.random(size - 300, size + 300);
    this.x = s.random(this.diameter / 4, size - this.diameter / 4);
    this.y = s.random(this.diameter / 4, size - this.diameter / 4);
    this.speed = 10;
    this.mainCol = returnRandomColor();

    this.display = function () {
      s.fill(this.mainCol);
      s.noStroke();
      s.ellipse(this.x, this.y, this.diameter, this.diameter);
    };
  };
}