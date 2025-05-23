let body = document.querySelector("body");
let x=0;
// let bgpos=document.querySelector("body").style.backgroundPosition;
// let body = document.body;
// body.style.backgroundColor =

document.addEventListener("click", function() {
    console.log("change bg")
   let colors = ["#ed7e7e", "#bcf7bc","#9acff5", "#f5f59a", "#ffb3ff", "#54dede"]; // Example colors
   let randomColor1 = colors[Math.floor(Math.random() * colors.length)];
   let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
   let randomColor3 = colors[Math.floor(Math.random() * colors.length)];
   let randomColor4 = colors[Math.floor(Math.random() * colors.length)];
    
 x = (Math.random(180)*360) % 45 /// change angle

document.body.style.background = "linear-gradient(" + x + "deg, " + randomColor1 + ", " + randomColor4 + ", " + randomColor2 + ", " + randomColor3 + ")";
console.log(x);
});


/*  ----------------------------manual preset color array---------------------
// Start animation when page loads
// if (bgpos){
//     bgpos = 0.01 + bogpos;


// // }
const bggradients = [
    'linear-gradient(60deg,rgb([r=random],100,100), #fad0c4, #fbc2eb, #a6c1ee',
    'linear-gradient(45deg, #84fab0, #8fd3f4, #a6c1ee, #fbc2eb)',
    'linear-gradient(90deg, #a1c4fd,rgb(10, 140, 27), #fbc2eb,rgb(176, 255, 154))',
    'linear-gradient(70deg,rgb(145, 115, 75), #fcb69f, #ff9a9e, #fbc2eb)',
    'linear-gradient(18deg, #ffecd2, #fcb69f, #ff9a9e, #fbc2eb)',
    'linear-gradient(60deg,rgb([r=random],100,100), #fad0c4, #fbc2eb, #a6c1ee',
    'linear-gradient(0deg, #ff8177,rgb(255, 255, 255),rgb(95, 18, 10),rgb(31, 45, 34))',
    'linear-gradient(45deg, #30cfd0, #330867,rgb(random(200), 88,random(255) ), #330867)',
    'linear-gradient(33deg, #667eea,rgb(random(190), 30, 49), #667eea,rgb(random(100), random(200), 118))',
    'linear-gradient(180deg, #667eea, #764ba2, #667eea, #764ba2)',
    'linear-gradient(45deg, #f093fb, #f5576c, #f093fb, #f5576c)'

];

let currentGradient = 0;

body.addEventListener('click', () => {
    currentGradient = (currentGradient + 1) % bggradients.length;
    body.style.background = bggradients[currentGradient];
    console.log("change color");

});

let bgpos = 0;

function animateBackground() {
    bgpos += 0.1;

  bgpos.x += 0.05;
            bgpos.y += Math.sin(bgpos.x * 0.01) * 0.1;
            
            body.style.backgroundPosition = `${bgpos.x}% ${bgpos.y}%`;
            if (bgpos.x > 100) bgpos.x = 0;
    
}
animateBackground();  

------------------------------------------------------------------------------------*/