

function updateInterface(message = ""){

    document.querySelector('#output').innerText = "";
    let newDiv = document.createElement('p');
    newDiv.innerText = `${message} \n ${match.players[0].name}: ${match.players[0].score} | ${match.players[1].name}: ${match.players[1].score}`;
    document.querySelector('#output').appendChild(newDiv);

    // console.log(match.players[0].name + ":" + match.players[0].score + " " + match.players[1].name + ":" + match.players[1].score);
}

function isGameOver(){
  if(match.players[0].legs === match.legsToWin || match.players[1].legs === match.legsToWin){
    console.log("game over");
    console.log(match.players[0].name + ":" + match.players[0].legs + " " + match.players[1].name + ":" + match.players[1].legs);
    return true;
  }
}
