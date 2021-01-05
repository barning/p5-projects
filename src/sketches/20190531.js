export default function sketch(s) {
	let r = 0;
	const grid = 10;
	const size = 500;
	
	s.setup = () => {
		s.createCanvas(size, size);
	}

	s.draw = () => {
		s.background(255);
		for (let i = 0; i < 5; i++) {
			var theGrid = size / grid;
			s.translate(theGrid, 20);
			drawCircle(s.random(0.05));	
		}
	}

	function drawCircle(randomness) {
		r += s.random(randomness);
		var d1 = 10 + (s.sin(r) * size/2) + size/2;
		s.ellipse(0, 0, d1);		
	}
}