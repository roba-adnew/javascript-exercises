const sumAll = function(oneNum, otherNum) {

    if (typeof(oneNum)  !== "number" || typeof(otherNum)  !== "number" || 
        oneNum < 0 || otherNum < 0) {
        return 'ERROR'
    }

    const minNum = oneNum < otherNum ? oneNum : otherNum;
    const maxNum = oneNum > otherNum ? oneNum : otherNum;

    let sumNum = 0;

    for (let i = minNum; i <= maxNum; i++) {
        sumNum += i;
    }

    return sumNum;
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
