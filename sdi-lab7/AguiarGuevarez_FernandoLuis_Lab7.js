/*
    Fernando L. Aguiar
    sdi-lab 7
    Loops, Functions, and Arrays
    05/19/15
 */

//alert("JavaScript works!");

//Global Variables

var array1 = [5, 2, 8, 4, 9, 1];
var array2 = [15, 28, 11, 24, 16, 21, 30, 10];
var array3 = [35, 50, 42, 39, 65, 90, 71, 100, 48, 86, 55, 82];
var orderedArray;

//Function

function bubbleFunction(accArray)
{


}

//Main Code


for(var i = 0; i < 3; i++)
{
    if(i === 0)
    {
        orderedArray = bubbleFunction(array1);
        console.log("The ordered version of Array 1 is: " + orderedArray);
    }
    else if(i === 1)
    {
        orderedArray = bubbleFunction(array2);
        console.log("The ordered version of Array 2 is: " + orderedArray);
    }
    else if(i === 2)
    {
        orderedArray = bubbleFunction(array3);
        console.log("The ordered version of Array 3 is: " + orderedArray)
    }
}