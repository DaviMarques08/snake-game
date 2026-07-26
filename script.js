const canvas = document.getElementById("tela-game");
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const reset = document.getElementById("reset");

const gridSize = 20;
let snake = [
    {x: 200, y: 200},
    {x: 180, y: 200},
    {x: 160, y: 200}
];
let food = {x: 100, y: 100};
let dx = 1, dy = 0
let score = 0
let gameinterval;
let isGameOver = false

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.forEach((pedaco) => {
        ctx.fillStyle = "green";
        ctx.fillRect(pedaco.x, pedaco.y, gridSize, gridSize);
    });

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function update() {
    const novaCabeca = {
        x: snake[0].x + (dx * gridSize),
        y: snake[0].y + (dy * gridSize)
    };
    snake.unshift(novaCabeca);
    snake.pop()
}

update()
draw()
