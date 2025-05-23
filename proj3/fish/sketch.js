let counter;
let speedX, speedY, loX, loY, loX1,loY1;
let speedX2, speedY2,loX2,loY2;
let theta;
let x, randY;
let r1,r2,r3;
let wallpaper;
let rot1;
let hu1,hu2;

function setup() {
  createCanvas(1000, 720);
  speedX = random(-2, 3);
  speedY = random(-5, 5);
  speedX1 = random(-5,5);
  speedX2 = random(-1,3);
 speedY2 = random(-8,-5);
 loX = height / 2;
  loY = width / 2;
  counter = 0;
  randY=random(200,400);
  x = random(100,300);
  angleMode(DEGREES);
  hu1=color(random(45,120),random(5,155),random(225));
  hu2=color(random(50),200,random(20));
  r1=0;
  r2=0;
  r3=0;
  rot1=random(-10,10);
  loX1=0;
  loY1=0;
  loX2= random(1,4);
  loY2=random(400,700);
  wallpaper=loadImage("/dma-portfolio/fish/assets/fishbck.jpg");
  


}


  function draw() {
    let theta= asin(mouseY/width)*1.2;
    background(25,20,205);
    image(wallpaper,0,0,width,height);
    stroke(255);
    strokeWeight(6);
    noFill();
    
   


push();

     fish1(hu1, loX1, loY1, 60,40,2, r1);
   r1=atan((loY1+random(10))/(loX1));
    if ((loX1 < 0) || (loX1 > width)) {
      speedX = -speedX} 
     if ((loY1 < 0) || (loY1 > width))
     {speedY = -speedY} 
   
    console.log("angle = "+r1 + "X-speed =" + speedX + "Y-speed =" + speedY + "location X ="+ loX1 + " location Y = " + loY1) 
   
    loX1 += speedX;
    loY1 += speedY;
    // if (r1=atan(loY1/(loX1))){r1=r1}
    // else (r1++);
    if (speedX < 0){r1= 180+r1}
    else {r1=r1};
    if (speedY < 0) {r1 = -r1}
   
    loX1 += speedX;
    loY1 += speedY;

    //dog fish here
    fish2(hu2,mouseX-100,(mouseY/3) +100,40,40,1.5,theta);
    console.log(theta + "=angle" + " of radio active fish");
    

    //redfish  function fish3(k,lx,ly,d,d2,sc,rot)
    fish3(color(200,0,25),loX,randY,40,25,1,r2);
    r2=random(5);
    if ((loX < 0) || (loX > width)) {
     speedX1 = -speedX1};  
     console.log(speedX + "speed of red fish");
    if (speedX1 < 0){r2= r2-180};
    console.log(r2 +"= red fish rot, speed =" + speedX1);
    loX += speedX1;

    //blue dead fish here
   // loY2=400;
      fish4(color(0,50,200), loX2, loY2+x, 55,40,1.2,r3,rot1);
    r3=180-(atan(loY2/(loX2)));
if ((loX2 < 0) && (loX2 > height)) {
    //speedX2 = -speedX2;
    loX2 = width/1.2}
    //if (loX2 < 0){
    //loX2 == width/1.2}
  
    speedX2 += 0.05;
    speedY2++;
      if (loY2 <0 || loY2>height){
      speedY2 --;
    }
    loX2=speedX2;
   loY2 = speedY2;
   
    // //  if (loX2 < 0) {
    // //   speedX2 = -speedX2;
    // //  }
    // if (loX2 > width) {
    //   //loX2= loX2--;
    //  speedX2 = -speedX2;
    // }
    // // this is the short hand way of doing the same as the 2 'ifs' above
    // // this uses or '||'
    
    console.log (loY2 + "= loY2" + "location of runner fish =" + loX2)
      loX2 += speedX2;
    
    //speedY2++ ;
    //speedX2 = random (0,2);
  


pop();
    
    
  }
   
  function fish1(k,lx,ly,d,d2,sc,rot){
  push();
  translate(lx,ly);
  scale(sc);
  rotate(rot);
  body(k,d,d2);
  fins(k,sc,random(5));
  hat(2);
  eye(30,0);
   pop();
}

  function fish2(k,lx,ly,d,d2,sc,rot) {
    push();
    translate(lx,ly);
    scale(sc);
    rotate(rot);
    body(k,d,d2);
    fins3(k,random(5));
    eye(0,0);
    pop(); 
    }
  function fish3(k,lx,ly,d,d2,sc,rot) {
    push();
    translate(lx,ly);
    scale(sc);
    rotate(rot);
    body(k,d,d2);
     fins(k,sc);
     eye(0,0);
     hat
     pop(); 
  }
  function fish4(k,lx,ly,d,d2,sc,rot,rot1){
    push();
    translate(lx,ly);
    scale(sc);
    rotate(rot);
    body(k,d,d2);
    fins2(k,sc);
    eye2(0,0);
    classichat();
  }

  function eye(lx,ly){
    //let c=color(c,c,c);
    fill(3);
    ellipse(lx+40,ly,20);
  }
  function eye2(lx,ly){
    fill(89,4,5);
    ellipse(lx+40,ly,20);
  }
  function body(k,d,d2){
    fill(k);
    ellipse(0,0,3*d,2*d2);
  }
  function fins(k,sc,rot){
    fill(k);
    push();
    scale(sc);
    rot=random(20);
    triangle(-50, 0, -80, 20, -80, -20);
    pop();
  }
  function fins2(k,sc){
    fill(k);
    push();
    rotate(rot1);
    scale(sc);
    triangle(-55, 0, -95, 30, -85, -40);
    pop();
  }
function fins3(k,rot1){
    fill(k);
     push();
    rotate(rot1);
    rot1=random(20);
    triangle(-50, 0, -80, 25, -80, -40);
   pop();
}
  function hat(){

    // Draw a simple hat
    fill(0); // Black color
    rect(0, 20, 100, 30,5); // Hat base
    rect(0,45, 50, 50, 5); // Hat top
  }
  
  function classichat(){
  fill(0);
  rect(15,-70,30,30,5);
  rect (0,-40,55,15,5);
  
  }
    
