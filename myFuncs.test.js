const myFuncs = require('./myFuncs.js');


describe('test fizzBuzz', () => {
    let fizzBuzz = myFuncs.fizzBuzz;
    
    test('it exists', () => {
        expect(fizzBuzz).toBeDefined();
    });

    test('it receives an argument and returns a truthy value', () => {
        expect(fizzBuzz(4)).toBeTruthy();
    });

    test('non-multiples of 3 and 5 should return a number', () => {
        expect(fizzBuzz(4)).toEqual(expect.any(Number));
    })
 
    test('if the argument is a multiple of 3 only return "Fizz"', () => {
        expect(fizzBuzz(3)).toEqual('Fizz');
    });

    test('if the argument is a multiple of 5 only return "Buzz"', () => {
        expect(fizzBuzz(5)).toEqual('Buzz');
    });

    test('if the argument is a multiple of 3 and 5 return "FizzBuzz"', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
    });

});