document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    }, 1000);
});

// Scroll to top button functionality
// Scroll buttons functionality
const scrollUpBtn = document.getElementById('scroll-up-btn');
const scrollDownBtn = document.getElementById('scroll-down-btn');
const containers = document.querySelectorAll('[id$="-container"]');

function updateButtonVisibility() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Hide/show up button
    if (scrollPosition < 100) {
        scrollUpBtn.style.opacity = "0";
        scrollUpBtn.style.visibility = "hidden";
    } else {
        scrollUpBtn.style.opacity = "1";
        scrollUpBtn.style.visibility = "visible";
    }
    
    // Hide/show down button
    if (scrollPosition > maxScroll - 100) {
        scrollDownBtn.style.opacity = "0";
        scrollDownBtn.style.visibility = "hidden";
    } else {
        scrollDownBtn.style.opacity = "1";
        scrollDownBtn.style.visibility = "visible";
    }
}

// Initial setup for down button
document.addEventListener('DOMContentLoaded', () => {
    // Hide up button initially
    scrollUpBtn.style.opacity = "0";
    scrollUpBtn.style.visibility = "hidden";
    
    // Show down button initially if page has scrollable content
    setTimeout(() => {
        const hasScroll = document.documentElement.scrollHeight > window.innerHeight;
        if (hasScroll) {
            scrollDownBtn.style.opacity = "1";
            scrollDownBtn.style.visibility = "visible";
        }
    }, 500); // Small delay to ensure content is loaded
    
    // Then start watching for scroll
    updateButtonVisibility();
});

// Add scroll event listener
window.addEventListener('scroll', updateButtonVisibility);

function getCurrentContainer() {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    let currentContainer = containers[0];

    containers.forEach(container => {
        const containerTop = container.offsetTop;
        if (scrollPosition >= containerTop) {
            currentContainer = container;
        }
    });
    return currentContainer;
}



