const removeFromArray = function (anArray, ...arrayElements) {
	for (let i = 0; i < arrayElements.length; i++) {
		elementIndex = anArray.indexOf(arrayElements[i]);

		if (elementIndex >= 0) {
			anArray.splice(elementIndex, 1);
		}
	}
	return anArray;
};

module.exports = removeFromArray;
