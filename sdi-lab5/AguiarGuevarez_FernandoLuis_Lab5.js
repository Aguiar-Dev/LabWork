/*
    Fernando Luis Aguiar Guevarez
    Lab 5 Functions
    05/14/15
    SDI
 */

//alert("JavaScript works!");

// Global Variables

var operationResult;

// Functions

function addingFunction(addNum1, addNum2)
{
    //Addition Function
    operationResult = (addNum1 + addNum2);
    return operationResult;
}

function subtractingFunction(subtractNum1, subtractNum2)
{
    //Subtraction Function
    operationResult = (subtractNum1 - subtractNum2);
    return operationResult;
}

function multiplicationFunction(multiplyNum1, multiplyNum2)
{
    //Multiplication Function
    operationResult = (multiplyNum1 * multiplyNum2);
    return operationResult;
}

function divisionFunction(divideNum1, divideNum2)
{
    //Division Function
    operationResult = (divideNum1 / divideNum2);
    return operationResult;
}

// Prompts

var userNumber1 = parseFloat(prompt("Please enter the first number for the equation:", "Enter your number here"));
var userNumber2 = parseFloat(prompt("Enter the second number of the equation:", "Enter your number here"));
var operationPick = prompt("Choose which operation you want to do: Add, Subtract, Multiply or Divide.", "Add, Sub, Multi or Div");

if(operationPick === "Add" || operationPick === "+")
{
    operationResult = addingFunction(userNumber1, userNumber2);
    console.log("You decided to add the numbers " + userNumber1 + " and " + userNumber2 + ", the result of which is " + operationResult);
    console.log("The operation looks like this: " + userNumber1 +" + " + userNumber2 + " = " + operationResult + ".");

}

else if(operationPick === "Sub" || operationPick === "-")
{
    operationResult = subtractingFunction(userNumber1, userNumber2);
    console.log("You decided to subtract the numbers " + userNumber1 + " and " + userNumber2 + ", the result of which is " + operationResult);
    console.log("The operation looks like this: " + userNumber1 + " - " + userNumber2 + " = " + operationResult + ".");

}

else if(operationPick === "Multi" || operationPick === "*")
{
    operationResult = multiplicationFunction(userNumber1, userNumber2);
    console.log("You decided to multiply the numbers " + userNumber1 + " and " + userNumber2 + ", the result of which is " + operationResult);
    console.log("The operation looks like this: " + userNumber1 + " * " + userNumber2 + " = " + operationResult + ".");

}

else if(operationPick === "Div" || operationPick === "/")
{
    if(userNumber1 === 0 || userNumber2 === 0)
    {
        console.log("You cannot divide by 0.");
        userNumber2 = parseFloat(prompt("Please choose a different number than 0 for division."));
    }
        divisionFunction(userNumber1 && userNumber2);
        operationResult = divisionFunction(userNumber1, userNumber2);
        console.log("You decided to divide the numbers " + userNumber1 + " and " + userNumber2 + ", the result of which is " + operationResult);
        console.log("The operation looks like this: " + userNumber1 + " / " + userNumber2 + " = " + operationResult + ".");
}

