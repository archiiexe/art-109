function setup() {
  createCanvas(960,960);
  background(0, 50, 100);
  noStroke();
  
  frameRate(25); //changes how fast the background changes

} 
//nested loop is loop inside another loop.

function draw() {
  let rand = random(20,mouseY/4);
    let rand2=random(0,mouseX);
  let colorgrades = ['255', '125', '5', '60', '90']
  for (let i = 0; i < 1200; i += 30) {
    for (let j = 0; j < 1200; j += 30) {
      let rand1 = random (colorgrades);
      fill (rand,rand1,rand2,mouseX/10);
       circle (i+5,j,random(20,45));
       fill (200,rand,random(140,150),80);
       circle (mouseY,mouseX,50);
      console.log("rand1 being used " + rand1);
      console.log("rand" + rand);
   

  }
  }

}
