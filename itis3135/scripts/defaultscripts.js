function alertMessage() {
    alert("The script is working");
}

function convertToFahrenheit(userInput) {

    convertedNumber = (userInput * (9/5)) + 32;
    alert(userInput + " degrees Celsius is equal to " + convertedNumber + " degrees Fahrenheit.");
}

function convertToCelsius(userInput) {

    convertedNumber = (userInput - 32) * 5/9;
    alert(userInput + " degrees Fahrenheit is equal to " + convertedNumber + " degrees Celsius.");
}

function product(number1, number2) {
    var product = number1*number2;
    alert(number1 + " * " + number2 + " = " + product);
}

function headsOrTails() {
    var counter = parseInt(Math.random() * 2);
    if (counter == 0) {
        alert("heads");
    }
    else {
        alert("tails");
    }
    
}

function randomNumGenerator() {
    alert(parseInt(Math.random() * 101));
}

/* function that returns an alert about polygon size
 / and returns boolean to either enter while loop again (false)
 / or exit the loop (true) the function is being called in.
*/
function getShape(index) {
    switch (index) {
        case 0:
            alert("There is no polygon with 0 sides");
            return true;
        case 1:
            alert("A polygon with 1 side is called a henagon or monogon");
            return true;
        case 2:
            alert("A polygon with 2 sides is called a digon or bigon");
            return true;
        case 3:
            alert("A polygon with 3 sides is called a trigon or trinagle");
            return true; 
        case 4:
            alert("A polygon with 4 sides is called a tetragon or quadrilateral");
            return true;
        case 5:
            alert("A polygon with 5 sides is called a pentagon");
            return true;
        case 6: 
            alert("A polygon with 6 sides is called a hexagon");
            return true;
        case 7:
            alert("A polygon with 7 sides is called a heptagon or septagon");
            return true;
        case 8:
            alert("A polygon with 8 sides is called an octagon");
            return true;
        case 9:
            alert("A polygon with 9 sides is called a nonagon");
            return true;
        case 10:
            alert("A polygon with 10 sides is called a decagon");
            return true;
        default:
            return false;
        
    }
}

/* Function that verifies the user input and changes
 / input into an integer if in range or returns an
 / alert saying entry is invalid
*/
function validateEntry(value) {
    if (value >= -10 && value <= 10) {
        if (Number.isInteger(value)) {
            value = parseInt(value);
            value = Math.abs(value);
            return value;
        }
        else {
            value = parseInt(parseFloat(value));
            value = Math.abs(value);
            return value;
        }
    }
    else {
        alert("This is invalid. Please enter an integer from 0-10:")
    }
}


function polygon() {
    var userEntry;

           // Boolean condition for do while loop
           var counter = false;
           do {
                  userEntry = prompt("The Kiwi Narwhal asks you to enter a number from 1-10 or its negative counter"
                                      + "parts and then we will tell you the name of a polygon with that number of sides!");   
                  counter = getShape(validateEntry(parseInt(userEntry)));
           } while (counter == false);
}