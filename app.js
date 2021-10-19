const currentImage = document.querySelector("#image");

const images = ["images/pic1.jpeg", "images/pic2.jpeg", "images/pic3.jpeg"]

function changeImage() {

let randomnumber = Math.floor(Math.random() * images.length);
console.log(randomnumber);
currentImage.src = images[randomNumber];
}