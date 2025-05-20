
console.log("hello hello");

document.querySelector("#page-title").style.color = "pink";

let pageTitle = document.querySelector("#page-title");
let body = document.body;
let header = document.querySelector("header");

setTimeout(function () {
    pageTitle.style.color = "teal";
    console.log("timer worked");
}, 1000);


// Click Event on Header changes background//
header.onclick = function () {
    console.log("clicked header");
    body.style.backgroundColor = "#1152A1";

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