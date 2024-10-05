let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Increment slide index
    slideIndex++;
    // Reset to first slide if index exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    // Change slide every 10 seconds
    setTimeout(showSlides, 10000);
}
