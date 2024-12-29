const planets = document.querySelectorAll('.planet');
const contentBox = document.getElementById('planet-content');

planets.forEach(planet => {
    planet.addEventListener('click', () => {
        contentBox.textContent = planet.dataset.content;
        contentBox.style.display = 'block';
    });

    planet.addEventListener('mouseover', () => {
        planet.style.animationPlayState = 'paused';
    });

    planet.addEventListener('mouseleave', () => {
        planet.style.animationPlayState = 'running';
    });
});

contentBox.addEventListener('click', () => {
    contentBox.style.display = 'none';
});