const reverseString = function(text) {
    
    let reversedString = '';
    for (let textLength = text.length - 1; textLength >= 0; textLength--) {
        reversedString = reversedString.concat(text.charAt(textLength));
    }
    return reversedString;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
