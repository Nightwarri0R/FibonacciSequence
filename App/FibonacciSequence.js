var number1 = 0;
var number2 = 1;
var randomNumber;
var nextNumber;
var fibSequence = [];

/// Function to generate random number between 1 and 30 to determine how long the sequence to be
function RandomNumberGen() {

    randomNumber = Math.floor(Math.random() * 30) + 1;
}

// Function to actually create the Fibonacci Sequence based on the random number and it prints them out
function FibonnaciSequence(randomNumber) {

    console.log("Fibonacci Sequence based on the random number of :" + randomNumber);
    fibSequence.push(number1);
    fibSequence.push(number2);
    console.log(fibSequence[0]);

    console.log(fibSequence[1]);

   
    for (nextNumber = 2; nextNumber <= randomNumber; nextNumber++) {
        fibSequence[nextNumber] = fibSequence[nextNumber - 2] + fibSequence[nextNumber - 1];
        console.log(fibSequence[nextNumber]);
    }
}
const tests = {
    add: () => randomNumber,
    sequence: ()=> fibSequence

}

RandomNumberGen();
FibonnaciSequence(randomNumber);


module.exports = tests;

