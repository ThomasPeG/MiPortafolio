"use strict";
class PortfolioAnimations {
    constructor() {
        this.observers = [];
        this.initializeAnimations();
        this.createStars();
        this.handleScroll();
    }
    initializeAnimations() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.3 });
            observer.observe(section);
            this.observers.push(observer);
        });
    }
    createStars() {
        const starsContainer = document.querySelector('.floating-elements');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            starsContainer === null || starsContainer === void 0 ? void 0 : starsContainer.appendChild(star);
        }
    }
    handleScroll() {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            document.documentElement.style.setProperty('--scroll', `${scrolled}px`);
        });
    }
}
// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioAnimations();
});
