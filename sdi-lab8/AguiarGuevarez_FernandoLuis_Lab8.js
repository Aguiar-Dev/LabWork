/*
    Fernando Luis Aguiar Guevarez
    sdi-Lab 8
    05/21/15
 */

//alert("JavaScript works!");

//Problem 1

 //global variables

var emailPrompt;

 //function

function checkEmail(email)
{
    var checkAt = email.indexOf("@");
    var checkAtAgain = email.lastIndexOf("@");
    var atSymbol;

    if(checkAt >= 0 && checkAtAgain === checkAt)
    {
        atSymbol = true;
    }
    else
    {
        atSymbol = false;
    }
    if( atSymbol === false || email.indexOf(".") <= 0 || email.indexOf(" ") >= 0)
    {
        console.log("The email " + email + " is not a valid email.");
    }

    else
    {
        console.log("The email " + email + " is a valid email.");
    }
}

 //main code

emailPrompt = prompt("Please enter an email:");

checkEmail(emailPrompt);


//Problem 2

//global variables

var stringList = "Noob,Scrub,Player,Gamer,MLG";
var stringSeparator = ",";
var stringSeparator2 = "/";
var returnedString;

//function

function stringFix(list, separator1, separator2)
{
    var newList;
    var newSeparator = "";

    newList = list.split(separator1);
}

//main code

returnedString = stringFix(stringList, stringSeparator, stringSeparator2);
console.log("The ranking system in Gamerpocalypse is as follows: " + returnedString + ". You are currently ranked at Noob.");
