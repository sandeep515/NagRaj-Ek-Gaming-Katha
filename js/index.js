let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("audio/food.mp3");
const gameOverSound = new Audio("audio/gameover.mp3");
const musicSound = new Audio("audio/music.mp3");
const moveSound = new Audio("audio/move.mp3");
let score = 0;


//musicSound.play();
// Game functions
let speed = 10;
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




//collide function 



function isCollide(snake) {
    //if sanke collide itself 
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    //if collide with wall
    if (snake[0].x >= 40 || snake[0].x <= 0 || snake[0].y >= 40 || snake[0].y <= 0) {

        return true;
    }
}



function gameEngine() {
    //part1: updating the snake array and food 
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause();
        inputDir = { x: 0, y: 0 };
        alert("🐍 GAME OVER 🐍");
        location.reload();
        snakeArr = [
            { x: 38, y: 38 }
        ];
        musicSound.play();
        score = 0;

    }


    // if you eaten the food increase in score and regenarate the food again

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score += 1;
        if (score > hiscoreval) {
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            HiscoreBox.innerHTML = "Hight score : " + hiscoreval;
        }
        scoreBox.innerHTML = "Scor" + "  " + ":" + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 38;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };


    }


    //function for moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        //const element = snakeArr[i];
        snakeArr[i + 1] = {...snakeArr[i] }; //it is used for make new object {}
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;



    //part2:render the snake and food 
    //display snake
    board.innerHTML = ""; //make board blank
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);

    });


    //dispal food 
    foodElement = document.createElement('div'); //create div using javascript
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);


}








// logic

let hiscore = localStorage.getItem("hiscore");
let hiscoreval = 0;
if (hiscore === null) {

    localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
} else {
    hiscoreval = JSON.parse(hiscore);
    HiscoreBox.innerHTML = "High Score : " + hiscore;
}


window.requestAnimationFrame(main);
window.addEventListener('keydown', e => {
    musicSound.play();
    inputDir = { x: 0, y: 1 }; //start game
    moveSound.play();
    switch (e.key) {
        case "ArrowUp":
            //console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            //console.log("ArrowDwon");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            //console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            //console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;
    }

})