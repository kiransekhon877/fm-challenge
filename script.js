let slideIndex = 0;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Update with actual images

function showSlide(index) {
    document.getElementById("slide").src = images[index];
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % images.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + images.length) % images.length;
    showSlide(slideIndex);
}
