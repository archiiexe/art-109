function setup() {
  createCanvas(1600,1600);
  background(0, 50, 100);
  noStroke();
  
  frameRate(20); //changes how fast the background changes

} 
//nested loop is loop inside another loop.

function draw() {
  
  for (let i = 0; i < 1600; i += 50) {
    for (let j = 0; j < 1600; j +=5) {
      fill (50,random(50,100),random(200,240));
      circle (i,j+random(5,20), random(10,60, 70));
      fill(random(10,20),random(0,5));
      rect (i,j,i+10,j+5);
    }
  }
}
      //triangle(i,j,i+30,45, j+40, mouseX, mouseY );

      //fill(ran1,10);
    // circle(10,10,rand1);
    //   console.log("this has a greyscale value of" + rand);
   

  //triangle (i+random(50), i+405, j+random(400), j+random(500), i+j+50, i+200);
//circle (i+5,j+random(5,20), random(10,60));
  