const calculateFactorial = (num, result = 1) => {
    if (num < 0 || !Number.isInteger(num)) {
        return "Input must be a non-negative integer.";
    } else if (num === 0) {
        return result;
    } else {
        const newResult = result * num;
        return calculateFactorial(num - 1, newResult);
    }
};

module.exports = calculateFactorial;
