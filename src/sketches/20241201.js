export default function sketch(s) {
    s.setup = () => {
        s.createCanvas(500, 800);
    };

    s.draw = () => {
        let startcolor = s.color(179, 200, 216);
        let endcolor = s.color(250, 142, 75);
        let blockSteps = s.height / 10;

        drawGradientBlocks(s, startcolor, endcolor, blockSteps);
        drawMiddleStripes(s, endcolor, startcolor, blockSteps);
    };

    function drawGradientBlocks(s, startcolor, endcolor, blockSteps) {
        for (let y = 0; y < s.height; y += blockSteps) {
            s.fill(s.lerpColor(startcolor, endcolor, s.map(y, 0, s.height, 0.1, 1)));
            s.noStroke();
            s.rect(0, y, s.width, blockSteps);
        }
    }

    function drawMiddleStripes(s, startcolor, endcolor, blockSteps) {
        for (let y = blockSteps * 2; y < blockSteps * 8; y += 1) {
            s.fill(s.lerpColor(endcolor, startcolor, s.map(y, blockSteps * 2, blockSteps * 8, 0.1, 1)));
            s.noStroke();
            s.rect(s.width / 3, y, s.width / 3, 1);
        }
    }
}