const palindromes = function (string) {
    const strProcessed = string.toLowerCase().replace(/[^a-z]/g, "");

    return (strProcessed.split("").reverse().join("") == strProcessed)
    
};

// Do not edit below this line
module.exports = palindromes;
