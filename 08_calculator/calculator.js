const add = function(a, b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {return arr.reduce((cumm,value) => 
  {return cumm + value},0)
};

const multiply = function(arr) {
  return arr.reduce((product, value) => {
    return product * value},1);

};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(a) {
  if (a == 0) return 1;
  let fact = 1;
  while (a > 0) {
    fact *= a;
    a -= 1;
  };
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
