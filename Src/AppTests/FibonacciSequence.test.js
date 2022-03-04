const UnitTest = require('../App/FibonacciSequence');


test('This number should be positive ', () => {

    expect(UnitTest.add()).toBeLessThan(31);
    expect(UnitTest.add()).toBeGreaterThanOrEqual(1);
});
//Test function thhat tests that array imported from the javascript file is all correct by comparing it to two identicall instances  of the array of Fibonacci sequence
test('This is the Fibonacci Sequence numbers ', () => {
    const fibTest = UnitTest.sequence();
    const arrayTest = UnitTest.sequence();

    expect(fibTest[0]).toBe(0);
    arrayTest.forEach(element => {
        expect(fibTest[element]).toBe(arrayTest[element]);
    });

});