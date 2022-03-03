const randomNum = require('../App/FibonacciSequence.js');


test('This number should be positive ', () => {

    expect(randomNum.add()).toBeLessThan(1000);
    expect(randomNum.add()).toBeGreaterThanOrEqual(1);
});
test('This number should be positive ', () => {

   

    
    //expect((randomNum.addNum1())).toBeGreaterThanOrEqual(1);
    //expect((randomNum.addNumNext())).toBeLessThan(1000);
    //expect(functions.add()).toBeGreaterThanOrEqual(1);
});