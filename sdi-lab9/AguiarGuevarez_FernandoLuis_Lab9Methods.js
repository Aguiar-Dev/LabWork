/*
    Fernando Luis Aguiar Guevarez
    sdi-Lab 9
    Number, Math, and Date Methods
    05/23/15
 */

//alert("JavaScript works!");

////Problem 1

//global variables
//
//var formatNumber;
//var decimalNumber;
//var returnedNumber;
//
////function
//function decimalFormat(userNumber, decimalFormater)
//{
//    newNumber = userNumber.toFixed(decimalFormater);
//    return newNumber;
//}
//
////main code
//formatNumber = parseFloat(prompt("Please enter a number to format:", "Type in here"));
//decimalNumber = parseInt(prompt("Please enter the amount of decimal places you want:", "Type in here"));
//
//returnedNumber = decimalFormat(formatNumber, decimalNumber);
//
//console.log("You entered the number " + formatNumber + " and it was formatted into " + returnedNumber + ".");



////Problem 2

////global variables
//
//var stringNumber;
//var numberReturn;
//
////function
//function givingNumber(userNumber)
//{
//    while (isNaN(userNumber))
//    {
//        userNumber = prompt("Please, you silly billy, enter a real number:", "Type in here. NOW!");
//    }
//    var val = userNumber;
//
//    newNumber = Number(val);
//
//    return newNumber;
//}
//
////main code
//stringNumber = prompt("Please enter a number:", "Type in here");
//
//numberReturn = givingNumber(stringNumber);
//
//console.log("We added color to your number and we made it a number data type here it is: ");
//console.log(numberReturn);


////Problem 3

//global variables

var date1 = "5/20/2000";
var date2 = "5/20/1998";
var hoursDays;
var returnedDiff;

//function

function dateDiff(time1, time2, timeType)
{

}

//main code
hoursDays = prompt("Please choose whether you want the difference of dates in hours or days.", "hours or days");

returnedDiff = dateDiff(date1, date2, hoursDays);

console.log("The dates are " + date1 + " and " + date2 + ". The difference is " + returnedDiff + ".");

