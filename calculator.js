const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber;

    return sum;
};
const subtract = (firstNumber, secondNumber) => {
    const difference = firstNumber - secondNumber;
    
    return difference;
};
const divide = (dividend, divisor) => {
    const quotient = dividend / divisor;

    return quotient;
};
const multiply = (factorOne, factorTwo) => {
    const product = factorOne * factorTwo;

    return product;
}
const square = (number) => {
    const squared = number * number;

    return squared;
}

const animals = `${multiply(0.25, 4)}` + `${multiply(0.75, 2)}`;
console.log(animals);