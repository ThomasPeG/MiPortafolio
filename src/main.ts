interface AnimationElement {
    element: HTMLElement;
    threshold: number;
}

class PortfolioAnimations {
    private observers: IntersectionObserver[] = [];

    constructor() {
        this.initializeAnimations();
        this.createStars();
        this.handleScroll();
    }

    private initializeAnimations(): void {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                },
                { threshold: 0.3 }
            );

            observer.observe(section);
            this.observers.push(observer);
        });
    }

    private createStars(): void {
        const starsContainer = document.querySelector('.floating-elements');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            starsContainer?.appendChild(star);
        }
    }

    private handleScroll(): void {
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