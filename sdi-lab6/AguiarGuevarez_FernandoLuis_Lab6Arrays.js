/*
    Fernando Luis Aguiar Guevarez
    SDI - Lab 6
    Working with Arrays
    05 / 16 / 15
 */
//alert("JavaScript works!");

// Functions

function familyFunction()
{
    var family = ["Fernando", "Maritza", "Irmarie", "Nicolle", "Jakob", "Camila"];
    var descriptions = ["Father", "Mother", "Oldest Sister", "Older Sister", "Nephew", "Niece"];

    for(var i = 0; i < family.length; i++)
    {
        console.log( family[i] + " is my " + descriptions[i] + ".");
    }

    console.log("\nArray with Push:");

}

// Main Code

familyFunction();

