const fibonacci = function(num) {
    let a = typeof(num);
    if (typeof(num) != 'number' && typeof(parseInt(num)) != 'number') 
        return "OOPS";

    if (typeof parseInt(num) == 'number') num = parseInt(num);
    if (num < 1) return "OOPS";
    if (num == 1 || num == 2) return 1;
    
    let fib = [1,1]
    let i = fib.length;
    while (i < num) {
        let next = fib[i-1] + fib[i-2];
        fib.push(next);
        i++;
    }

    return fib[fib.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
