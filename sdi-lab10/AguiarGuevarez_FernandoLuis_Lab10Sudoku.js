/*
    Fernando Luis Aguiar Guevarez
    sdi - Lab 10
    05/26/15
    Sudoku and Puzzles
 */

//alert("JavaScript works!");

//global var
var userPick;
var returnedResult;

//function
function lotteryFunk(userOpt)
{
    //local variables
    var floridaLottery = [];
    var powerBall = [];
    var newNumbers;

    //conditionals
    if(userOpt === "FL")
    {
        for(var i = 0; i < 6; i++)
        {
            floridaLottery.push(Math.round((Math.random() * 53) + 1));
        }
        newNumbers = floridaLottery;
        return newNumbers;
    }
    else if(userOpt === "PB")
    {
        for(var i = 0; i < 4; i++)
        {
            powerBall.push(Math.round((Math.random() * 59) + 1));
        }
        powerBall.push(Math.round((Math.random() * 35) + 1));

        newNumbers = powerBall;
        return newNumbers;
    }

}

//main code

userPick = prompt("Do you want a Quick Pick from the Powerball Numbers or the Florida Lottery Numbers? Write FL for the Florida lottery or write PB for the Powerball Numbers.", "Write in here");

returnedResult = lotteryFunk(userPick);

if(userPick === "FL")
{
    console.log("You picked the Florida Lottery and the numbers you got from the quick pick are " + returnedResult);
}
else if(userPick === "PB")
{
    console.log("You picked Powerball and the numbers you got from the quick pick are " + returnedResult);
}
