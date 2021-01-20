
// This game is devloped by Aftab alam
// Date:20-1-21
// I have use html,css, javascript for this game

var score = 0;
incrScore = true;


// adding Key to 
document.addEventListener('keydown', keyd);
function keyd(e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) {
        console.log("key is 38");
        bheem = document.querySelector('.bheem');
        bheem.classList.add('animateBeem');
        setTimeout(() => {
            bheem.classList.remove('animateBeem');
        }, 700);


    }

    else if (e.keyCode == 39) {
        console.log("key is 38");
        bheem = document.querySelector('.bheem');
        bx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
        bheem.style.left = bx + 112 + "px";

    }


    else if (e.keyCode == 37) {
        console.log("key is 38");
        bheem = document.querySelector('.bheem');
        bx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
        bheem.style.left = bx - 112 + "px";

    }


}

//to dtect collison
setInterval(() => {
    bheem = document.querySelector('.bheem');
    gameOver = document.querySelector('.gameOver');
    car = document.querySelector('.car');

    bx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
    by = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('top'));
    cx = parseInt(window.getComputedStyle(car, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(car, null).getPropertyValue('top'));

    offsetX = Math.abs(bx - cx);
    offsetY = Math.abs(by - cy);

    //console.log(offsetX,offsetY);

    if (offsetX < 72 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        car.classList.remove('carAnimation');
        bheem.style.transform = 'rotate(-90deg)';

        // after game over
        newScore = document.getElementById('scoreCont');
        newScore.style.visibility = 'hidden'
        document.getElementById('heighest-score').innerHTML = "Your Heighest-Score:" + score;
        incrScore = false;


    } else if (offsetX < 90 && incrScore) {
        updateScore();

        setTimeout(() => {
            SpeedUp();
        }, 2000);
        incrScore = false;

        setTimeout(() => {
            incrScore = true;
        }, 500);


    }
    newScore = document.getElementById('scoreCont');
    newScore.innerHTML = score;
}, 100);


// calculate score

function updateScore() {
    score += 1;

}

// increase  Speed of car

function SpeedUp() {
    cardur = document.querySelector('.carAnimation');
    speed = parseFloat(window.getComputedStyle(cardur, null).getPropertyValue('animation-duration'));
    if (score == 10 && score < 20) {

        newSpeed = speed - 0.8;
        cardur.style.animationDuration = newSpeed + "s";


    }

    else if (score == 20 && score < 30) {
        newSpeed = speed - 0.2;
        cardur.style.animationDuration = newSpeed + "s";


    }
}

