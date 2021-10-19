const currentImage = document.querySelector("#image");

const images = ["images/pic1.jpeg", "images/pic2.jpeg", "images/pic3.jpeg"]

function changeImage() {

let randomNumber = Math.floor(Math.random() * images.length);
console.log(randomNumber);
currentImage.src = images[randomNumber];
}