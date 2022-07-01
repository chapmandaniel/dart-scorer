
// create a listener for the button if start-match-button is clicked
document.querySelector('#start-match-button').addEventListener('click', function() {
    // toggle display of the registration form
    document.querySelector('#registration').classList.toggle('hide');
    document.querySelector('#app-container').classList.toggle('hide');
    let name1 = document.querySelector('#player1-name-input').value;
    let name2 = document.querySelector('#player2-name-input').value;
    let raceTo = document.querySelector('#race-to-input-field').value;
    match.scoreToWin = 501;

    //set default match parameters
    match.playerA.name = (name1 === "") ? "Player A" : name1;
    match.playerB.name = (name2 === "") ? "Player B" : name2;
    match.legsToWin = (raceTo === "") ? 1 : parseInt(raceTo);

    match.startNewLeg();
});

const player1NameDiv = document.querySelector('#player1-name');
const player2NameDiv = document.querySelector('#player2-name');
const player1ScoreDiv = document.querySelector('#player1-score');
const player2ScoreDiv = document.querySelector('#player2-score');
const p1legs = document.querySelector('#p1legs');
const p2legs = document.querySelector('#p2legs');
const turnScore = document.querySelector('#turn-score');
const p1TurnLog = document.querySelector('#player1-turn-log');
const p2TurnLog = document.querySelector('#player2-turn-log');
const finishButton1 = document.querySelector('#finish-darts-1');
const finishButton2 = document.querySelector('#finish-darts-2');
const finishButton3 = document.querySelector('#finish-darts-3');

// add event listener for all items of class "quick-pick-button"
const quickPickButtons = document.querySelectorAll('.quick-pick-button');

quickPickButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        validateScore(e.target.innerText);
        turnScore.innerText = e.target.innerText;
        setTimeout(function() {
            turnScore.innerText = "";
        }, 1000);
    });
});

// add event listener for all items of class "calculator-button"
const calculatorButtons = document.querySelectorAll('.calculator-button');
calculatorButtons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        numPadPress(e.target.innerText);
    }
    );
});

// add event listener for all items of class "finish-btn"
const finishButtons = document.querySelectorAll('.finish-btn');
finishButtons.forEach(function(button) {

    button.addEventListener("click", function(e) {
        if(e.target.id === "finish-darts-1") {
           match.throwDarts(match.atTheOche.score, 1);
        } else if(e.target.id === "finish-darts-2") {
            match.throwDarts(match.atTheOche.score, 2);
        } else if(e.target.id === "finish-darts-3") {
            match.throwDarts(match.atTheOche.score, 3);
        }
    });

});


const nmButton = document.querySelector('#nm-submit');

nmButton.addEventListener("click", function(e) {
    match.throwDarts(parseInt(nmButton.innerHTML));
    console.log("nm button clicked");
    nmModal.style.display = "none";
});