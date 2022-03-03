var randomNumber;
var number1 = 0;
var number2 = 1;
var nextNumber;
var fibSequence = [];

// Function to generate randome number to determine how long the sequence to be
function RandomNumberGen() {

    randomNumber = Math.floor(Math.random() * 1000),
        console.log("This is the random number generated: " + randomNumber);

}


// Function to actually create the Fibonacci Sequence based on the random number and it prints them out
function FibonnaciSequence(randomNumber) {

    console.log("Fibonacci Sequence:");
    console.log(number1);
    console.log(number2);

    fibSequence.push(number1);
    fibSequence.push(number2);
    fibSequence.push(number1 + number2);
    
    nextNumber = number1 + number2;

    do {
        console.log(nextNumber);
        number1 = number2;
        number2 = nextNumber;
        nextNumber = number1 + number2;
    } while (nextNumber <= randomNumber);

    fibSequence.forEach(element => {
        console.log("" + fibSequence[element])
    });
   
}
const randomNum = {
    add: () => randomNumber,
    addNum1: () => number1,
    addNum2: () => number2,
    addNumNext: () => nextNumber


}

RandomNumberGen();
FibonnaciSequence(randomNumber);




module.exports = randomNum;
//module.exports = FibSequence;
