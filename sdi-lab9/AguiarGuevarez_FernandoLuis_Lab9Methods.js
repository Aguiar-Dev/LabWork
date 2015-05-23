/*
    Fernando Luis Aguiar Guevarez
    sdi-Lab 9
    Number, Math, and Date Methods
    05/23/15
 */

//alert("JavaScript works!");

////Problem 1

//global variables

var formatNumber;
var decimalNumber;
var returnedNumber;

//function
function decimalFormat(userNumber, decimalFormater)
{
}

//main code
formatNumber = parseFloat(prompt("Please enter a number to format:", "Type in here"));
decimalNumber = parseInt(prompt("Please enter the amount of decimal places you want:", "Type in here"));

returnedNumber = decimalFormat(formatNumber, decimalNumber);

console.log("You entered the number " + formatNumber + " and it was formatted into " + returnedNumber + ".");


