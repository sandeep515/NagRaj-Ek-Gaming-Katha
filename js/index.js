let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameover.mp3");
const musicSound = new Audio("music.mp3");
const moveSound = new Audio("move.mp3");
let score = 0;
//musicSound.play();
// Game functions
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    { x: 38, y: 38 }
]
let food = { x: 13, y: 15 };

function main(ctime) {
    window.requestAnimationFrame(main);
    //console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();

}

function isCollide(snakeArr) {
    console.log(" CODE LATER");
}

function gameEngine() {
    //part1: updating the snake array and food 
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("🐍 GAME OVER 🐍");
        let snakeArr = [
            { x: 38, y: 38 }
        ]
        musicSound.play();
        score = 0;

    }
    // if you eaten the food increase in score and regenarate the food again

    if (snakeArr[0].y == food.y && snakeArr[0].x == food.y);

    //part2:render the snake and food 


    //display snake
    board.innerHTML = "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index == 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });


    //dispal food 
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);


}



// logic
window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    inputDir = { x: 0, y: 1 };
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("ArrowDwon");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }

})