const leapYears = function (yr) {
	if (yr % 400 == 0 || (yr % 100 > 0 && yr % 4 == 0)) {
		return true;
	}
	return false;
};

module.exports = leapYears;
