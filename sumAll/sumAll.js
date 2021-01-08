const sumUp = (n) => (n * (n + 1)) / 2;

const sumAll = function (num1, num2) {
	if (typeof (num1, num2) == "number" && num1 > 0 && num2 > 0) {
		return Math.abs(sumUp(num1) - sumUp(num2)) + Math.min(num2, num1);
	}
	return "ERROR";
};

module.exports = sumAll;
