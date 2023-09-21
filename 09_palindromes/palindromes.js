const palindromes = function (original) {
    // First I want to filter out all punctuation marks
    // Then ensure every letter is lower case or check if there is a simple 
    // way to compare upper and lower case
    // Then flip the word and check if it's the same as the original

    const origArr = Array.from(original).filter(letter => 
        letter.match(/^[0-9a-zA-Z]+$/)).
        map(letter => letter.toLowerCase())
    
    const newArr = [...origArr].reverse();

    const lengthMatch = origArr.length === newArr.length;

    let contentMatch = true;
    for (let i = 0; i < origArr.length; i++) {
        if (origArr[i] !== newArr[i]) {
            contentMatch = false;
            break;
        } 
    }

    return lengthMatch && contentMatch;
};

// Do not edit below this line
module.exports = palindromes;
