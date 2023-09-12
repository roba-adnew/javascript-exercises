const removeFromArray = function(anArray, ...indices) {
    
    let numbers = indices.filter((element) => typeof element === 'number');
    let strings = indices.filter((element) => typeof element === 'string');
    numbers.sort();
    numbers.reverse();
    strings.sort((a, b) => a.localeCompare(b));
    let sortedIndices = [...numbers, ...strings];
 

    for (let i = 0, indLength = sortedIndices.length; i < indLength; i++) {
        
        if (typeof sortedIndices[i] === "number") {
            let ind = sortedIndices[i] - 1;
            if (ind < anArray.length) {
                anArray.splice(ind,1);
            }

        } 
        
        else if (typeof sortedIndices[i] === "string" && anArray.includes(sortedIndices[i])) {
            anArray.splice(anArray.indexOf(sortedIndices[i]),1);
        }
    }

    return anArray;
}

// Do not edit below this line
module.exports = removeFromArray;
