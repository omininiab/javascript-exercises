const repeatString = function(word, numRepetitions) {
    let repeatedString = '';
    if (numRepetitions < 0){
        return "ERROR"
    }
    for (let i=0; i<numRepetitions; i++) {
        repeatedString += word;
    }
    return repeatedString;

}

module.exports = repeatString
