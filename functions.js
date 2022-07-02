/**--------------------------------------------------------------------------------
 * @function updateInterface
 * @param message
 ---------------------------------------------------------------------------------*/

function updateInterface(message = ""){
    console.log("update interface");
    player1NameDiv.innerHTML = match.players[0].name;
    player2NameDiv.innerHTML = match.players[1].name;
    player1ScoreDiv.innerHTML = match.players[0].score;
    player2ScoreDiv.innerHTML = match.players[1].score;
    p1legs.innerHTML = match.players[0].legs;
    p2legs.innerHTML = match.players[1].legs;
    match.atTheOche === match.players[0] ? player1NameDiv.classList.add('active') : player1NameDiv.classList.remove('active');
    match.atTheOche === match.players[1] ? player2NameDiv.classList.add('active') : player2NameDiv.classList.remove('active');
    updateFinishButtons();
    turnLogManager();
}


/**--------------------------------------------------------------------------------------
 * @function isMatchOver
 * @returns {boolean}
 ---------------------------------------------------------------------------------------*/

function isMatchOver(){

    updateInterface();
      if(match.players[0].legs === match.legsToWin || match.players[1].legs === match.legsToWin){
        console.log("The Match is Over...");
        console.log(match.players[0].name + ":" + match.players[0].legs + " " + match.players[1].name + ":" + match.players[1].legs);

          var elem = document.getElementById('app-container');
          elem.replaceWith(elem.cloneNode(true));

        return true;
  }
}



function endMatch(){
    console.log("overrrrrrrrrrrr");
    document.querySelector('#player1-name').classList.remove('active');
    document.querySelector('#player2-name').classList.remove('active');
}




/**-------------------------------------------------------------------------------------
 * @function numPadPress - handles the press of the number pad buttons and manages typos
 * @param num
 * @returns {null}
 --------------------------------------------------------------------------------------*/


function numPadPress(num){

    if(num === "ENTER"){                            // if num is "enter"
      let score = parseInt(turnScore.innerHTML);    // get score from turnScore div
        if(validateScore(score)) {                  // if score is valid conduct throw and enter loop
            turnScore.innerHTML = "";               // clear turnScore div
            return null;                            // return null to end function
        }
    }

    let currentValue = turnScore.innerHTML;         // get current value from turnScore div
    let newValue = currentValue + num;              // add num to current value
    if(newValue.length > 3){                        // if new value is greater than 3
      newValue = newValue.substring(0,1);           // set new value to 3 characters
    }

    turnScore.innerHTML = newValue;                 // set turnScore div to new value
}


/**-------------------------------------------------------------------------------------
 * @function validateScore - confirms a score is valid and completes the throw if it is
 * @param score
 * @returns {boolean}
 -------------------------------------------------------------------------------------*/

function validateScore(score){
    console.log("validate score");
    let validate180 = (score <= 180);                                // if score is less than or equal to 180
    let validate0 = (score >= 0);                                   // if score is greater than or equal to 0
    let validateBust = (score <= match.atTheOche.score);            // if score is less than or equal to current player's score
    let validate1 = (score !== (match.atTheOche.score - 1));        // if score is not equal to current player's score minus 1

    if(!validate180){window.alert("Score must be less than 180");}  // if score is not valid, alert user
    if(!validate0){window.alert("Score must be greater than 0");}
    if(!validateBust){window.alert("Busted!");}
    if(!validate1){window.alert("Busted!");}


    if( validate180 && validate0 && validateBust && validate1){
        match.throwDarts(score);
        match.calculateAverages();
        return true;
    }

}



function turnLogManager(){

    p2TurnLog.innerHTML = "";
    p1TurnLog.innerHTML = "";

    let p1Log = document.createElement("div");
    let p2Log = document.createElement("div");


    if(match.players[0].visits.length > 0){
        match.players[0].visits.forEach(function(visit){
            // create new div for turn log
            p1TurnLog.innerHTML = "";
            let p1TurnLogEntry = document.createElement('div');
            p1TurnLogEntry.classList.add('turn');
            p1TurnLogEntry.innerText = visit.score;
            p1Log.appendChild(p1TurnLogEntry);
        });
    }

    if(match.players[1].visits.length > 0){
        match.players[1].visits.forEach(function(visit){
            let p2TurnLogEntry = document.createElement('div');
            p2TurnLogEntry.classList.add('turn');
            p2TurnLogEntry.innerText = visit.score;
            p2Log.appendChild(p2TurnLogEntry);
        });
    }

    p1TurnLog.appendChild(p1Log);
    p2TurnLog.appendChild(p2Log);
}


function updateFinishButtons(){

    if(match.atTheOche.score <= 170){
        finishButton1.classList.remove('disable-btn');
        finishButton2.classList.remove('disable-btn');
        finishButton3.classList.remove('disable-btn');
    }else{
        finishButton1.classList.add('disable-btn');
        finishButton2.classList.add('disable-btn');
        finishButton3.classList.add('disable-btn');
    }
}

var elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

