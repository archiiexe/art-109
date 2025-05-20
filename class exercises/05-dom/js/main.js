/* ---------change visible for each img element------------------

document.querySelector("#img-1").addEventListener("click", function () {
    document.querySelector("#img-1").style.visibility = "hidden";
    console.log("click click");
})

document.querySelector("#img-2").addEventListener("click", function () {
    document.querySelector("#img-2").style.visibility = "hidden";
    console.log("click click");
})

document.querySelector("IMAGE ELEMENT HERE").addEventListener("click", function () {
    document.querySelector("IMAGE ELEMENT HERE").style.visibility = "HIDE OR VISIBLE";
    console.log("click click");
})


*/
//------------------for a lot of images images use this below---------------------//
var divs = document.querySelectorAll('.image-div');

divs.forEach((div) => {
    div.addEventListener('click',() => {
        console.log("foreach is working");
        div.style.visibility="hidden";
        alert("scary words")
    })
})
//
/* ------------------------changingfor a lot of images images upto here-----------------

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