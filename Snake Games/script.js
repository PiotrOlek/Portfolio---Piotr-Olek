const canvas = document.getElementById('snake-game');
const ctx = canvas.getContext('2d');
const blockSize = 20;
const maxBlocks = canvas.width / blockSize;
let direction = 'right';
let snake, food;

function startGame() {
    snake = [
        { x: maxBlocks / 2, y: maxBlocks / 2 },
        { x: maxBlocks / 2 - 1, y: maxBlocks / 2 },
        { x: maxBlocks / 2 - 2, y: maxBlocks / 2 }
    ];

    spawnFood();
    main();
}

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction !== 'down') direction = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') direction = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') direction = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') direction = 'right';
            break;
    }
});

function main() {
    setTimeout(() => {
        moveSnake();
        drawBoard();
        drawSnake();
        drawFood();
        main();
    }, 200);
}

function moveSnake() {
    const head = { ...snake[0] };

    switch (direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }

    if (head.x === food.x && head.y === food.y) {
        spawnFood();
    } else {
        snake.pop();
    }

    if (isCollision(head)) {
        alert('Game Over!');
        startGame();
    } else {
        snake.unshift(head);
    }
}

function isCollision(head) {
    return (
        head.x < 0 ||
        head.x >= maxBlocks ||
        head.y < 0 ||
        head.y >= maxBlocks ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    );
}

function drawBoard() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    ctx.fillStyle = 'lime';

    for (const segment of snake) {
        ctx.fillRect(segment.x * blockSize, segment.y * blockSize, blockSize, blockSize);
    }
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * blockSize, food.y * blockSize, blockSize, blockSize);
}

function spawnFood() {
    food = {
        x: Math.floor(Math.random() * maxBlocks),
        y: Math.floor(Math.random() * maxBlocks)
    };

    if (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
        spawnFood();
    }
}

startGame();
