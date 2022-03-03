var randomNumber = Math.floor(Math.random() * 100);
var number1 = 0;
var number2 = 1;
var nextNumber;


console.log("This random number was chosen " + randomNumber);

function FibonnaciSequence(randomNumber) {

    console.log("Fibonacci Sequence:");
    console.log(number1);
    console.log(number2);

    nextNumber = number1 + number2;


    do {
        console.log(nextNumber);
        number1 = number2;
        number2 = nextNumber;
        nextNumber = number1 + number2;
    } while (nextNumber <= randomNumber);
}
FibonnaciSequence();