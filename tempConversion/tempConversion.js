const ftoc = function (f) {
	c = ((f - 32) * 5) / 9;
	return Number(c.toFixed(1));
};

const ctof = function (c) {
	f = (c * 9) / 5 + 32;
	return Number(f.toFixed(1));
};

module.exports = {
	ftoc,
	ctof,
};
