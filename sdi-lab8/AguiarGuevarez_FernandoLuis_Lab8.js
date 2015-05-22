/*
    Fernando Luis Aguiar Guevarez
    sdi-Lab 8
    05/21/15
 */

//alert("JavaScript works!");

//Problem 1

 //global variables

var emailPrompt;

 function

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
}

 //main code

emailPrompt = prompt("Please enter an email:");

checkEmail(emailPrompt);


