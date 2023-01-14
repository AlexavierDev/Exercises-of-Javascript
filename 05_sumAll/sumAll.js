const sumAll = function (numOne, numTwo) {
    
    if(!Number.isInteger(numOne) || !Number.isInteger(numTwo) ) return "ERROR"
    if (numOne < 0 || numTwo < 0) return "ERROR";

    if (numOne > numTwo) {
        const temp = numOne;
        numOne = numTwo;
        numTwo = temp;
    }
    let sum = 0;
    for (let i = numOne; i <= numTwo; i++) {
        sum += i;
    }
    return sum;


}



// Do not edit below this line
module.exports = sumAll;
