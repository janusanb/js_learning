let ogBoard;
const humanPlayer = 'O'
const compPlayer = 'X'
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector('.endgame').style.display = "none"
    ogBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false)
    }
}

function turnClick(clickEventArea) {
    /* The turnClick function only calls the turn function 
    because only the human presses a button. 
    The AI will not "click". */
    if (typeof ogBoard[clickEventArea.target.id] == 'number') {
        turn(clickEventArea.target.id, humanPlayer);
        if (!checkTie()) turn(bestSpot(), compPlayer);
    }
}

function turn(clickEventAreaID, player) {
    ogBoard[clickEventAreaID] = player;
    document.getElementById(clickEventAreaID).innerText = player;
    let gameWon = checkWin(ogBoard, player)
    if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []);
    let gameWon = null;
    // This following for loop is like an enumeration() method in python
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {index: index, player: player};
            break;
        } 
    }
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor = 
            gameWon.player == humanPlayer ? "blue" : "red";
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == humanPlayer ? "You Win" : "You Lose")
}

/* Basic AI code */
/*
function declareWinner(who) {
    document.querySelector('.endgame').style.display = 'block'
    document.querySelector('.endgame .text').innerText = who;
}
function emptySquares() {
    return ogBoard.filter(s => typeof s === 'number');
}

function bestSpot() {
    return emptySquares()[0];

}
function checkTie() {
    if (emptySquares().length == 0) {
        for (let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = 'green';
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game");
        return true;
    }
    return false;
}
*/

/* Recursive MinMax AI code */
function declareWinner(who) {
    document.querySelector('.endgame').style.display = 'block'
    document.querySelector('.endgame .text').innerText = who;
}
function emptySquares() {
    return ogBoard.filter(s => typeof s === 'number');
}

function bestSpot() {
    return minimax(ogBoard, compPlayer).index;

}
function checkTie() {
    if (emptySquares().length == 0) {
        for (let i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = 'green';
            cells[i].removeEventListener('click', turnClick, false);
        }
        declareWinner("Tie Game");
        return true;
    }
    return false;
}

function minimax(newBoard, player) {
    let availSpots = emptySquares(newBoard);

    if (checkWin(newBoard, humanPlayer)) {
        return {score: -10};
    } else if (checkWin(newBoard, compPlayer)) {
        return {score: 10};
    } else if (availSpots.length === 0) {
        return {score: 0}
    }
    let moves = [];
    for (let i = 0; i < availSpots.length; i++) {
        let move = {};
        move.index = newBoard[availSpots[i]];
        newBoard[availSpots[i]] = player;

        if (player == compPlayer) {
            let result = minimax(newBoard, humanPlayer);
            move.score = result.score;
        } else {
            let result = minimax(newBoard, compPlayer);
            move.score = result.score;
        }

        newBoard[availSpots[i]] = move.index;

        moves.push(move);
    }

    let bestMove;
    if (player === compPlayer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i
            }
        }
    }
    return moves[bestMove]
}