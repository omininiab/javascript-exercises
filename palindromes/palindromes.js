function charsOnly(string) {
  return string.replace(/[\W_]+/g,"").toLowerCase();
}

const palindromes = function (text) {
    text=charsOnly(text);

    firstHalf = text.slice(0,Math.floor(text.length/2))
    secondHalf = text.slice(Math.round(text.length/2)).split("")
    secondHalf=secondHalf.reverse().join("")
    return firstHalf==secondHalf
};

module.exports = palindromes;
