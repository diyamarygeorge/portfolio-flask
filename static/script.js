// Function to handle scroll animations for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
            // Add the 'visible' class to trigger the CSS transition/animation
            entry.target.classList.add('visible');
            // Stop observing once visible (optional: for one-time animation)
            observer.unobserve(entry.target);
        }
    });
}, {
    // Root margin allows us to start the animation before the section hits the viewport center
    rootMargin: '0px',
    threshold: 0.1 // Triggers when 10% of the item is visible
});

// Select elements you want to animate on scroll
const sections = document.querySelectorAll('.content-section');
const projectCards = document.querySelectorAll('.project-card');

// Hide all elements initially using the 'hidden' class
sections.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el); // Start observing
});

projectCards.forEach(card => {
    card.classList.add('hidden');
    observer.observe(card); // Start observing
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});