const tests = require('../App/FibonacciSequence.js');


test('This number should be positive ', () => {

    expect(tests.add()).toBeLessThan(31);
    expect(tests.add()).toBeGreaterThanOrEqual(1);
});
//Test function thhat tests that array imported from the javascript file is all correct by comparing it to two identicall instances  of the array of Fibonacci sequence
test('This is the Fibonacci Sequence numbers ', () => {    
    const fibTest = tests.sequence(); 
    const arrayTest = tests.sequence();

   expect(fibTest[0]).toBe(0);
   arrayTest.forEach(element  => {
       expect(fibTest[element]).toBe(arrayTest[element]);
       console.log(element)
   });
   
});