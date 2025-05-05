document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.background-circles');
    const numberOfCircles = 200; // Puedes ajustar este número

    for (let i = 0; i < numberOfCircles; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.top = `${Math.random() * 100}%`;
        circle.style.left = `${Math.random() * 100}%`;
        container.appendChild(circle);
    }
});