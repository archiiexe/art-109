let canvas;

function setup() {
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
canvas.style("z-index", -2);
canvas.parent('sketch-holder');

//background(225);
}
function windowResized(){
    console.log("lets see if it works");
    resizeCanvas(windowWidth, windowHeight);
}
function draw(){

}

function mouseMoved(){
  drawThing(mouseX,mouseY);
   drawThing(mouseY,mouseX)
}

function drawThing(_x, _y){
       // background(125,125,125,40);
    stroke(80, 0,67);
    fill(random(_x),random(pmouseY),20,20);
    ellipse(_x,_y,pmouseX/mouseX+10,23+pmouseY);
}