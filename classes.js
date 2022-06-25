class Player{
    constructor(name){
        this.name = name;
        this.score = null;
        this.legs = 0;
    }

    toString(){
        return this.name;
    }
}

class Match{
    constructor(scoreToWin, legsToWin, name1='PlayerA', name2='PlayerB'){
        this.scoreToWin = scoreToWin;
        this.legsToWin = legsToWin;
        this.legsPlayed = 0;

        this.playerA = new Player(name1);   //two registered players
        this.playerB = new Player(name2);

        this.players = [];      //player 1 and player 2 array for order of turns after coin toss
        this.coinTossWinner = null;     //the winner of the coin toss to go first
        this.atTheOche = null;        //the player who is at the toe line (oche)

    }

    coinToss(playsFirst){         // set the coin toss winner

        this.players[0] = (playsFirst === this.playerA) ? this.playerA : this.playerB;
        this.players[1] = (playsFirst === this.playerA) ? this.playerB : this.playerA;
        this.upFirst();
    }


    throwDarts(score){  // method that performs a players turn

        if(!isGameOver()){
            this.atTheOche.score -= score;
            this.alternateTurns();
            updateInterface();
            this.isLegOver();
        }
    }


    upFirst(){ // method for setting the player who goes first
        let currentGame = this.legsPlayed + 1;
        this.atTheOche = (currentGame % 2) ? this.players[0] : this.players[1];
    }


    alternateTurns(){ // method for alternating turns
        this.atTheOche = (this.atTheOche === this.players[0]) ? this.players[1] : this.players[0];
    }


    isLegOver(){  // method for checking if a leg is over, and if so, check if the game is over
        let over = false;

        if(this.players[0].score === 0){
            this.players[0].legs++;
            console.log(this.players[0].name + " wins leg " + this.players[0].legs);
            over = true;
        }

        if(this.players[1].score === 0) {
            this.players[1].legs++;
            console.log(this.players[1].name + " wins leg " + this.players[1].legs);
            over = true;
        }

        if(over){
            this.legsPlayed++;
            isGameOver() ? null : this.startNewLeg("Leg over, starting new leg");
        }
    }


    startNewLeg(message = ""){  // method to start a new leg
        this.players.forEach(function(player){player.score = 501});
        this.upFirst();
        updateInterface(message);
    }

    printScore(){
        console.log(this.players[0].name + ":" + this.players[0].legs + " " + this.players[1].name + ":" + this.players[1].legs);
    }

}

