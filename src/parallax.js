const canvas = document.getElementById('parallax');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1920;
const CANVAS_HEIGHT = canvas.height = 1080;
let gameSpeed = 1;

const spaceBackground = new Image();
spaceBackground.src = './assets/imgs/space.png';
const foreground = new Image();
foreground.src = './assets/imgs/barTest.png'


let x = 0;
let x2 = 1920;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(spaceBackground, x, 0);
    ctx.drawImage(spaceBackground, x2, 0);
    ctx.drawImage(foreground, 0, 0);
    if (x < -1920) x = 1920 + x2 - gameSpeed;
    else x -= gameSpeed;
    if (x2 < -1920) x2 = 1920 + x - gameSpeed;
    else x2 -= gameSpeed;
    requestAnimationFrame(animate);
};
animate();