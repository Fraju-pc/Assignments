//set current player
let currentPlayer= "X";
//variable to check for open spaces
let plays = 0;
//variable to stop game
let gameFinished = false;
//cell tracking object
let currentPlayed= {
    X: [],
    O: [],
};
//possible win conditions
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

//main function call
$(document).ready(function() {

    $('.turn-display').text("It is Currently " + currentPlayer + "'s Turn");
  

   // $('.turn-display').text("It is Curently " + currentPlayer + "'s Turn");
//cell click event handler
$('.cell').on('click', function() {
    
    if(!gameFinished){
        //fills in cell
        $(this).text(currentPlayer);
        
        plays++
        //sends cell info to array
        currentPlayed[currentPlayer].push(parseInt($(this).attr('data-index')));
        
        //check for win or draw status
        if(isWinner()){
            gameFinished = true;
           showResult('Win') 
        };
        if(!gameFinished && isDraw()){
            showResult('Draw');
        }
        
        //switch player and update top text
        currentPlayer = (currentPlayer === "X") ? "O" : "X";
        $('.turn-display').text("It is Currently " + currentPlayer + "'s Turn");
        
    }
    });
    
});
//function to reset the game board
function playAgain(){
    currentPlayer= "X";
    plays = 0;
    gameFinished = false;
    currentPlayed= {
        X: [],
        O: [],
    };  
    $(".cell, #game-result").text(' ');
    $('.turn-display').text("It is Currently " + currentPlayer + "'s Turn");
    
};

//function to display winner or Draw
function showResult(type){
    gameFinished = true;
    if (type === 'Win'){
        $('#game-result').text('Winner is: ' + currentPlayer);
    }else{
        $('#game-result').text('It is a Draw!');
    }
    
}

//function to determine if it's a draw
function isDraw(){
    return plays === 9;
    
}

//function to determine a winner
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