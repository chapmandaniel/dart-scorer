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

        //two registered players
        this.playerA = new Player(name1);
        this.playerB = new Player(name2);

        //player 1 and player 2 list
        this.players = [];

        //the winner of the coin toss to go first
        this.coinTossWinner = null;
        this.atTheOche = null;  //******** temporary this needs to be sey dynamically ******************
    }

    // set the coin toss winner
    coinToss(playsFirst){
        if(playsFirst === this.playerA){
            this.players[0] = this.playerA;
            this.players[1] = this.playerB;
        }else{
            this.players[0] = this.playerB;
            this.players[1] = this.playerA;
        }
        this.upFirst();
    }

    throwDarts(score){
        if(!isGameOver()){
            this.atTheOche.score -= score;
            this.alternateTurns();
            updateInterface();
            this.isLegOver();
        }
    }

    upFirst(){
        let currentGame = this.legsPlayed + 1;
        this.atTheOche = (currentGame % 2) ? this.players[0] : this.players[1];
    }

    alternateTurns(){
        this.atTheOche = (this.atTheOche === this.players[0]) ? this.players[1] : this.players[0];
    }

    isLegOver(){
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
            isGameOver() ? null : this.startNewLeg();
        }
    }

    startNewLeg(){
        this.players.forEach(function(player){player.score = 501});
        this.upFirst();
        updateInterface("Leg over, starting new leg");
    }

    printScore(){
        console.log(this.players[0].name + ":" + this.players[0].legs + " " + this.players[1].name + ":" + this.players[1].legs);
    }

}

