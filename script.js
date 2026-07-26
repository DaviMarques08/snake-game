const tela = document.getElementById("tela-games");
const score = document.getElementById('score');
const reset = document.getElementById("reset");
const ctx = canvas.getContext('2d');

const gridSize = 20;
let snake = []
let food = {}
let dx = 1, dy = 0
let score = 0
let gameinterval;
let isGameOver = false

function draw() {
    ctx.clearReact (0, 0, 400, 400);

    snake.forEach((pedaco) => {
        ctx.fillStyle = "green";
        ctx.fillRect(pedaco.x, pedaco.y, gridSize, gridSize);
    })

    ctx.fillStyle = "red";
    ctx.fillRect = (food.x, food.y, gridSize, gridSize);
}