let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    canvas.parent('sketch-holder');
    angleMode(DEGREES);

    //background(225);
}
function windowResized() {
    console.log("lets see if it works");
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
    noFill();
    stroke(0);
    rotateX(60)
    
    for (i = 0; i < 50; i++) {
        let r = map(sin(frameCount), -1, 1, 0, 255);
        let g = map(i, 0, 20, 0, 255);
        let b = map(cos(frameCount), -1, 1, 255, 0)
 stroke(r,g,b);

        beginShape()
        for (j = 0; j < 360; j += 90) {
            let rad = i * 100;
            let x = rad * cos(j)*100;
            let y = rad * sin(j);
            let z = sin(frameCount * 0.1 + i * 10) * 100;
            vertex(x, y, z)
              console.log("j="+j,"x="+x,y,z,r,g,b)
        }
        endShape(CLOSE)
      
    }
}



// function
//     stroke(80, 0,67);
// fill(random(_x), random(pmouseY), 20, 20);
// ellipse(_x, _y, pmouseX / mouseX + 10, 23 + pmouseY);
// }