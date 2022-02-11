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
