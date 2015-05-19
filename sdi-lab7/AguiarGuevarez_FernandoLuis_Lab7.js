/*
    Fernando L. Aguiar
    sdi-lab 7
    Loops, Functions, and Arrays
    05/19/15
 */

//alert("JavaScript works!");

//Global Variables

var array1 = [5, 2, 8, 4, 9, 1, 10];
var array2 = [15, 28, 11, 24, 16, 21, 30, 10];
var array3 = [35, 50, 42, 39, 65, 90, 70, 48, 86, 55, 82];
var orderedArray;

//Function

function bubbleFunction(accArray)
{
    var length = accArray.length;

    for(var i = 0; i < length; i++)
    {
        for (var j = 0; j < length; j++)
        {
            if (accArray[j] > accArray[j + 1])
            {
                var subArray = accArray[j];
                accArray[j] = accArray[j + 1];
                accArray[j + 1] = subArray;
            }
        }
    }

    return accArray;
}

//Main Code

console.log("The first array is: " + array1);
console.log("The second array is: " + array2);
console.log("The third array is: " + array3 + "\n\n");

for(var i = 0; i < 3; i++)
{
    if(i === 0)
    {
        orderedArray = bubbleFunction(array1);
    }
    else if(i === 1)
    {
        orderedArray = bubbleFunction(array2);
    }
    else if(i === 2)
    {
        orderedArray = bubbleFunction(array3);
    }

    console.log("The sorted Array is: " + orderedArray);
}