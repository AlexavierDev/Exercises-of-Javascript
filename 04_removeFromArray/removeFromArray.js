const removeFromArray = function (...num) {
    const array = num[0]

    return array.filter(value => !num.includes(value))
};

// Do not edit below this line
module.exports = removeFromArray;
