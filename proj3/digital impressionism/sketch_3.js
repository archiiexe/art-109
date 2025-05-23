function setup() {
  createCanvas(1600,1600);
  background(0, 50, 100);
  noStroke();
  
  frameRate(8); //changes how fast the background changes

} 
//nested loop is loop inside another loop.

function draw() {
  let rand = random(40,55);
  let colorgrades = ['255', '125', '5', '90']
  for (let i = 0; i < 1200; i += 50) {
    for (let j = 0; j < 1200; j +=5) {
      let rand1 = random (colorgrades);
      fill (rand,13,rand1,random(10,150));
      circle (i+5,j,random(20,60));
      // fill (150,13,random(140,150),100);
      //circle(mouseY,mouseX, 50)
      //rect (i,5,i+5,j+5);
      //triangle(i,j,i+30,45, j+40, mouseX, mouseY );
      fill(random(35,60), random(220,255), random (124,167));
      rect (mouseX,mouseY,40,20);
      rect (i+5,j+20,40,20);
      //triangle(i,j,i+30,45, j+40, mouseX, mouseY );

      //fill(ran1,10);
    // circle(10,10,rand1);
    //   console.log("this has a greyscale value of" + rand);
   

  //triangle (i+random(50), i+405, j+random(400), j+random(500), i+j+50, i+200);
//circle (i+5,j+random(5,20), random(10,60));
  
  
  }
  }

}
