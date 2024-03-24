// this section of code was written by ChatGPT

// Get the bunny image element
const bunny = document.querySelector('.scrolling-bunny');

// Listen for scroll events
window.addEventListener('scroll', function() {
    // Calculate the amount of scroll
    const scrollY = window.scrollY;

    // Move the bunny vertically based on the scroll amount
    bunny.style.bottom = `${scrollY}px`;
});

// end of ChatGPT section