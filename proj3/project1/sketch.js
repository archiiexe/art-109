
let currentkey = '1';
let bgc ;
let gkcount;
let k, k1;
let mx, my;
let gridSize;
let imgSize;
let tree;
let cocotree;
let cocotree2;
let textgrass;
let textgrass1;
let funflower;
let funflower_mat;
let texture_van;
let cimg;
let tool;
let mark;
let s;
let sat;
let brtness;
let collage, collage2;


function setup() {
    createCanvas(800, 800);
    background(255);
    smooth();
    colorMode(HSB);
    bgc = color(255);
    gkcount = 20;
    funflower = loadImage("assets/funlower.png");
    textgrass = loadImage("assets/grass.png"); 
    textgrass1= loadImage("assets/texture grass.png")
    cocotree = loadImage("assets/coco tree.png");
    cocotree2 = loadImage("assets/cocotree_2.png");
    funflower_mat =loadImage("assets/flower.png");
    funflower_van = loadImage("assets/funflower.png");
    tree = loadImage("assets/texture tree.png");
    texture_van = loadImage("assets/vangogh texture.png");
    collage = loadImage("assets/collage1.png");
    collage2 = loadImage("assets/collage2.png");


    imgSize = 40;
    gridSize = 120;
    textSize(40);
    cimg = 0;
    tool = "";
    mark = 0;
    mx = mouseX;
    my = mouseY;
    s= 0;
    sat=50;
    brtness = 100;
}

 

function draw() {
    // triggering the clear_print function
    
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
      }

    }
    
    function mousePressed(){
      image(cimg,mouseX-gridSize/2,mouseY-gridSize/2,gridSize,gridSize);
      console.log(x,y, gridSize)
    //   if (keypressed == "=" || "+") {
    //     console.log ("-");
    //     gridSize++;
    //   }  
    //   if (keyPressed == "-"){
    //     gridSize--;
    //   }
    }

function drawChoice() {
  x = mouseX;
  y = mouseY;

  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
  let k = color(0);
  drawline(k, x, y, pmouseX, pmouseY);
  break;

  case '2':
  console.log("2");  // brown line
  drawFatLine(color(40,sat*.823,brtness), mouseX, mouseY, pmouseX, pmouseY);
  break;

case '3'://yellow line
  console.log("3" + "sat" + sat); 
  aryellowline(gkcount/2, mouseX, mouseY,  pmouseX, pmouseY)
  
  gkcount += 0.5;
  if (gkcount>44){gkcount = 13}
  break;

case '4' :
    console.log("9", "brush size="+gkcount);//red line
    armatisseline(gkcount/2, mouseX, mouseY, pmouseX, pmouseY);
    if (gkcount > 22 ) {
  
      gkcount = 13;
  } else {
      gkcount+= 1;  
  }
    break;
  case '5'://green line
  console.log("5 " + "brushsize =" + gkcount);  
  argreenline(gkcount/2, mouseX, mouseY, pmouseX, pmouseY);
  gkcount += 0.59;
  if (gkcount >45){
    gkcount=15
  }
  break;
  case '6': // blueline
    console.log("6"); 
    arblueline(gkcount, mouseX, mouseY, pmouseX, pmouseY);
    if (gkcount > 35 ) {

      gkcount = 3;
  } else {
      gkcount+= .53;
  }
  break;
  case '7': // circles
    console.log("7"+ "hue=" +random(0,100)); 
    kf=random(0,1);
    k1=random(0,20),100;
    drawlineFillCirc(k1,kf,mouseX, mouseY, random(10,70))
  break;

  case '8': // strong redline
  console.log(8, sat+ "=sat")
  armatisseline2(gkcount/2, mouseX, mouseY, pmouseX, pmouseY);
    if (gkcount > 25 ) {
      gkcount = 13;
  } else {
      gkcount+= 1;  
  }
    break;

  case '9':
    console.log ("9-black line");
    arline (gkcount/2, mouseX, mouseY,  pmouseX, pmouseY);
      if (gkcount > 25 ) {
        gkcount = 13;
    } else {
        gkcount+= .57;  }
    
  break;

  case 'e':
  console.log("eraser");  // erase with bg color
  eraser(bgc,mouseX, mouseY,14);
   break;
/*  case '7':
    console.log("7"); 
    steveRanBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);
    if (gkcount > 43 ) {

      gkcount = 1;
  } else {
      gkcount+= .65;
  }
  break;

 case '5':
//     console.log("5"); 
//     steveCrazeBrush(gkcount, mouseX, mouseY, pmouseX, pmouseY);

//     if (gkcount > 50 ) {

//         gkcount = 1;
//     } else {
//         gkcount+= .5;
//     }
  break;*/
  
      case 'a':
        console.log("a - cocotree");  // 1st img
        cimg = cocotree;
        tool = "pix";
        break;
      case 's':
        console.log("s - grass");   // 2nd img
        cimg = textgrass;  // replace with your own images
        tool = "pix";
        break;
        case 'd':
        console.log("d - grass2");  //3rd img
        cimg = textgrass1;  // replace with your own images
        tool = "pix";
        break
        case 'f':
        console.log("f - funflower");  //4th img
        cimg = funflower ;  // replace with your own images
        tool = "pix";
        break;
        case 'q':
        console.log("q - 2nd cocotree");  // 5th img
        cimg = cocotree2 ;  // replace with your own images
        tool = "pix";
        break;
        case 'w':
        console.log("w - matisse lower"); //6th img
        cimg = funflower_mat;  // replace with your own images
        tool = "pix";
        break;
        case 'r':
        console.log("r - van gogh flower");  // 7th second img
        cimg = texture_van ;  // replace with your own images
        tool = "pix";
        break;
        case 'z':
        console.log("z tree");  // 8th second img
        cimg = tree ;  // replace with your own images
        tool = "pix";
        break;
        case 'g':
        console.log("g - tree");  // 7th second img
        cimg =  funflower_van ;  // replace with your own images
        tool = "pix";
        break;
        case 'j':
        console.log(" j - painting extract1");  // 7th second img
        cimg = collage2 ;  // replace with your own images
        tool = "pix";
        break;
        case 'k':
        console.log("k - painting extract2");  // 7th second img
        cimg = collage ;  // replace with your own images
        tool = "pix";
        break;
        case 'l':
        console.log("l - painting extract 3");  // 7th second img
        cimg = texture ;  // replace with your own images
        tool = "pix";
        break;
    default:             // Default executes if the case labels
      console.log("None");   // don't match the switch parameter
      break;
    }
}
    // if (mark == 1) {
    //   if (tool == "pix"  )  {
    //     stampImage(cimg,mx,my,s,s); 
    //   // } else if (tool == "circ") {
    //   //   drawCircle( k, cx,cy, imgSize, imgSize);
    //   // } else if (tool == "rect"){
    //   //   drawRect( k, cx,cy, imgSize, imgSize)
    //   // } else if (tool == "erase"){
    //   //   eraser(bgc,cx,cy,imgSize);
    //   // } else {
    //     // do nothing
    //   }
      
    // mark=0;  // resets the option if we make a mark or not
    
    // }
  
function keyPressed() { 
   if ( key == 't' || key == 'T' ) { 
     // example of toggle logic 
       if (sat == 55) { 
            sat = 85;}
            // if (sat == 70) {
            //   sat = 125;
            // }
          else { 
            sat = 55;
          }
          console.log( sat + "= saturation")}
    if ( key == "-"){
      gridSize -= 25;
      console.log( "-gridsize =" + gridSize )
    }
    if (key == "="){
      gridSize += 50;
      console.log("+ gridsize =" + gridSize)
    }
    if (key == 'o' || key == '0' || key == 'O'){
      cimg = 0;
    }
   
   }



function stampImage(pix,mx,my,imgSize,imgSize)  {
  // cheap centering trick with the s var /2
  image(pix,x,y,imgSize,gridSize);
}


function drawline( k,  lx, ly,  px, py) {
  
  strokeWeight(1);
  stroke(k);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}
function drawlineFillCirc( k1, kf, lx, ly,  px, py) {//( k, kf, lx, ly,  px, py) 
 
  strokeWeight(kf);
  stroke(k1);
  line(lx, ly, px, py);
  fill(random(0,100),sat,100);
  ellipse(lx, ly, random(4,35));
  console.log(mouseX);
  console.log(pmouseX);
}

function drawFatLine( k,  lx, ly,  px, py) {
  strokeWeight(10);
  stroke(k);
  line(lx, ly, px, py);
}

function arblueline(kcount, lx, ly,  px, py) {
  strokeWeight(kcount);
  stroke(240,kcount*(150/sat),75);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}
function aryellowline(kcount, lx, ly,  px, py) {
  strokeWeight(kcount);
  stroke(55,sat - 15,100);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}
function armatisseline(kcount, lx, ly, px,py){
  // color(0,100,10, 100);
 stroke(1,sat-23, 100);
  strokeWeight(kcount);
  line(lx, ly, px, py);
}
  
function argreenline(kcount, lx, ly,px,py){
  stroke(75, sat-15, 100);
  strokeWeight(kcount);
line(lx, ly, px, py);
}
function arline(kcount, lx, ly,  px, py) {
  strokeWeight(kcount);
  stroke(25,sat/25,25);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}
function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function armatisseline2(kcount, lx, ly, px,py){
  // color(0,100,10, 100);
 stroke(2.3, kcount * 20+sat, 100);
  strokeWeight(kcount);
  line(lx, ly, px, py);
}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100

// mouseX > 100
// mouseX > 110
// pmouseX> 100
// mouseX > 120
// pmouseX> 110
// mouseX > 130

