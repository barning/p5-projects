export default function sketch(s) {

const size = 500;

  s.setup = () => {
  s.createCanvas(size, size);
  drawLines();
  }

  s.mousePressed = () => {
    drawLines();
  }

  function drawLines() {
    s.background(255);
    let lpX = size / 2;
    let lpY = size / 2;

    for (let i = 0; i < 50; i++) {
      let npX = s.random(lpX - 50, lpX + 50);
      let npY = s.random(lpY - 50, lpY + 50);

      if (npX >= size) npX = npX * -1;
      if (npY >= size) npY = npY * -1;

      s.line(lpX, lpY, npX, npY);

      lpX = npX;
      lpY = npY;
    }
  }
}