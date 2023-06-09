let currentPlayer= "X";
let plays = 0;
let gameFinished = false;
let currentPlayed= {
    X: [],
    O: [],
};

const winPositions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]

];

$(document).ready(function() {

   // $('.turn-display').text("It is Curently " + currentPlayer + "'s Turn");
$('.cell').on('click', function() {
    
    if(!gameFinished){
        $(this).text(currentPlayer);
        plays++
        currentPlayed[currentPlayer].push(parseInt($(this).attr('data-index')));

        if(isWinner()){
            gameFinished = true;
           showResult('Win') 
        };
        if(!gameFinished && isDraw()){
            showResult('Draw');
        }
        
        currentPlayer = (currentPlayer === "X") ? "O" : "X";

        $('.turn-display').text("It is Curently " + currentPlayer + "'s Turn");
    }
    });
    
});

function playAgain(){
    currentPlayer= "X";
    plays = 0;
    gameFinished = false;
    currentPlayed= {
        X: [],
        O: [],
    };  
    $(".cell, #game-result").text(' ');
    
};

function showResult(type){
    gameFinished = true;
    if (type === 'Win'){
        $('#game-result').text('Winner is: ' + currentPlayer);
    }else{
        $('#game-result').text('It is a Draw!');
    }
    
}

function isDraw(){
    return plays === 9;
    
}

function isWinner(){
    if (plays < 5)
    return;

    for (let i = 0; i < winPositions.length; i++){
        let isWinner = true;

        for(let j=0; j < winPositions[i].length; j++){
            if ($.inArray(winPositions[i][j], currentPlayed[currentPlayer]) < 0){
                isWinner = false;
                break;
            }
        }
            if (isWinner)
            return true;

    }
}