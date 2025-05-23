// Array of image paths
let imagePaths = [];
let currentIndex = 0;
let parentDiv = document.getElementById('changing-img');
// parentDiv.appendChild(imgElement);
let imgElement = document.createElement('img');

document.body.appendChild(imgElement);
imgElement.alt = "non stop feed of random pictures"



// imgElement.parent('changing-img');

// Function to load and display the next image
function loadNextImage() {
    // Set the source of the image
    for (let i = 1; i <= 68; i++) {
        imagePaths[i] = [
            'images/img_' + i + '.jpg'
        ]

        //console.log(i);
        imgElement.id = "movingpics";
        imgElement.src = imagePaths[currentIndex];
    }
    // Increment currentIndex to load the next image
    currentIndex++;
    console.log('img ' + currentIndex)
    // If all images have been loaded, clear the interval
    if (currentIndex == imagePaths.length) {
        currentIndex = 1;
        imgElement.src = imagePaths[currentIndex];
        currentIndex++;
        clearInterval(intervalID);
        console.log(currentIndex);
    }
}

// Call loadNextImage to load and display the first image
loadNextImage();

// Call loadNextImage every second
var intervalID = setInterval(loadNextImage, 1200);


// ---------------------hide images----------------------------
var divs = document.querySelectorAll('.image-div');
divs.forEach((div) => {
    div.addEventListener('click',() => {
        console.log("foreach is working");
        div.style.visibility="hidden";
        // alert("scary words")
    })
})


document.addEventListener("mousedown", function () {
    // intervalID = setInterval(loadNextImage, 1200);
    currentIndex = 1;
    // imgElement.style.zIndex = 1;

})


