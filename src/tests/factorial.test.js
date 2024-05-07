const calculateFactorial = require('../factorial');

test("should return factorial of a positive integer", () => {
    expect(calculateFactorial(5)).toEqual(120);
});

test("should return factorial of a positive integer", () => {
    const result = calculateFactorial(5);
    console.log(result);
});

test("should return 1 for factorial of 0", () => {
    const result = calculateFactorial(0);
    console.log(result);
});

test("should return 'Input must be a non-negative integer.' for negative number", () => {
    const result = calculateFactorial(-5);
    console.log(result);
});

test("should return 'Input must be a non-negative integer.' for non-integer input", () => {
    const result = calculateFactorial(5.5);
    console.log(result);
});
