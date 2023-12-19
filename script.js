// script.js

const container = document.getElementById('container');
const card = document.getElementById('card');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;

    updateCardTransform();
});

function updateCardTransform() {
    card.style.transform = `rotateX(${mouseY * 30}deg) rotateY(${mouseX * 30}deg)`;
}
