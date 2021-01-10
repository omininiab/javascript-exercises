function add(...x) {
  return x.reduce((a, b) => Number(a) + Number(b), 0);
}

function subtract(...x) {
  return x.reduce((a, b) => Number(a) - Number(b));
}

function sum(x) {
  return add(...x);
}

function multiply(x) {
	return x.reduce((a,b)=>a*b);
  }

function power(a, b) {
  return a ** b;
}

function factorial(x) {
  return x==0 ? 1 : multiply([...Array(x + 1).keys()].slice(1));
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
