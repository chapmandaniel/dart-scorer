

const match = new Match(501, 3, 'Chapman', 'Bungay');

match.coinToss(match.playerA);

match.startNewLeg();

let waiting = 0;


function simulateTurn(score){
    setTimeout(function() {match.throwDarts(score);}, waiting);
    waiting += 1000;
}

// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(141);
//
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(141);
//
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(141);
//
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(141);
//
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(180);
// simulateTurn(141);