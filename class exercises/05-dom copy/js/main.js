
// loop though all the class items to apply JS funtion on all of them at once//

//first store all the image-div class elements in a variable //

let divsNodes = document.querySelectorAll('.image-div');
let divs = Array.from(divsNodes);

//then use for loop to access both the current div and the next one in the loop;//

for (i = 0; i < divs.length; ++i) {
    let currentDiv = divs[i];
    let nextDiv = divs[i+1];

  currentDiv.addEventListener('click',() => {
    nextDiv.style.visibility = "visible";
    console.log("next",i);
    if (i > 5){i=0}

    })
}


/* ------------------------changing without storing in variables-----------------



setTimeout(function () {
    document.querySelector("#page-title")= "teal";
    console.log("timer worked");
}, 1000);


// Click Event on Header changes background//
document.querySelector("header").onclick = function () {
    console.log("clicked header");
    body.style.backgroundColor = "#1152A1";

}
*/