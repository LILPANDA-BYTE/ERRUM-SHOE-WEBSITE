let slides = document.querySelectorAll('.slide-container');
let index = 0;

// Array of background colors corresponding to each slide's circular background
const backgroundColors = ["yellow", "rebeccapurple", "teal", "gray"];

function updateSlide() {
    slides.forEach(slide => {
        slide.classList.remove('active');
        
        // Reset the background color for all circular elements
        let circularBackground = slide.querySelector('.slider-image-background');
        if (circularBackground) {
            circularBackground.style.backgroundColor = ''; // Clear previous styles
        }
    });

    slides[index].classList.add('active');

    let circularBackground = slides[index].querySelector('.slider-image-background');
    if (circularBackground) {
        circularBackground.style.backgroundColor = backgroundColors[index];
    }
}


// Function to go to the next slide
function next() {
    index = (index + 1) % slides.length; // Increment index and wrap around if necessary
    updateSlide(); // Update slide and circular background
}

// Function to go to the previous slide
function prev() {
    index = (index - 1 + slides.length) % slides.length; // Decrement index and wrap around if necessary
    updateSlide(); // Update slide and circular background
}

// Initialize the first slide
updateSlide();
updateSlidenew();
