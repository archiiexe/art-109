function setup() {
createCanvas (400,400);
background (100);

noStroke();

function draw() {
background (0);
rect(width/2,height/2,200,200);

//let is to initialize variable let x = mouseX;
/*
for loop (let i=0; i<height; i+=20)=>(intial definition; boolean test;change)
inside bracet we have intialization; then test condition; then next variable;
for (let i=0; true or false ; i+=20)
{everthing inside the brace is code executed once the conditions are met}
*/

for (let i=0; i < width; i+=20) {
    fill(20,255,40);
    rect(0, i, width, 24);
    //fill(245);
   // rect(0,i,10,height);
    console.log(i)
}
/* if LOOP => simpler than a for LOOP,anything inside bracket is just a boolean test
 if (2<3), if true braces will execute {rect(20,20,20,20)}, 
 if false, else {} will execute
*/

if (let x=45; x>2) {
    fill(0,20,20)
    rect(10,100,100,10)
} 
