const caesar = function (str, shift) {
        let encoded = "";
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                charCode = ((charCode - 65 + (shift < 0 ? shift + 26 : shift)) % 26) + 65;
            } else if (charCode >= 97 && charCode <= 122) {
                charCode = ((charCode - 97 + (shift < 0 ? shift + 26 : shift)) % 26) + 97;
            }
            encoded += String.fromCharCode(charCode);
        }
        return encoded;
};

// Do not edit below this line
module.exports = caesar;
