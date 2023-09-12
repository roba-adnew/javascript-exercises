const repeatString = function(text, num) {
    if (num < 0) return 'ERROR';
    
    let repeatedString = '';
    for (let i = 0; i < num; i++) {
        repeatedString = repeatedString.concat(text);
    }
    return repeatedString;
};

repeatString
// Do not edit below this line
module.exports = repeatString;
