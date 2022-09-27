const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(function (num) {
    sum += num;
  });
  return sum;
};

const multiply = function(arr) {
  let total = 1;
  arr.forEach(function (num){
    total *= num;
  });
  return total;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) {
	let total = 1;
  for(let i=1; i<=num; i++){
    total *= i;
  }
  return total;
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
