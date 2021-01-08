const reverseString = function(word) {
    reversedWord = ''
    for (let i = (word.length - 1); i >= 0; i--) {
        reversedWord += word[i];
    }
    return(reversedWord);
}
console.log(reverseString('word'));
module.exports = reverseString
