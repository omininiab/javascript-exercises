function getUnicode(char) {
  if (char.length === 1 && char.match(/[a-z]/i)) {
    return Number(char.replace(/^[a-zA-Z]$/, char.charCodeAt(0)));
  }
  return char;
}

function getChar(unicode) {
  if (typeof unicode == "number") {
    return String.fromCharCode(parseInt(unicode, 10));
  }
  return unicode;
}

function encrypt(char, i) {
  if (typeof char != "number") {
    return char;
  }
  // lowercase range 97 - 122 (%123 for overflow-right)
  else if (char >= 97 && char <= 122) {
    a = 97;
    b = 122;
  }
  // uppercase range 65 - 90 (%91 for overflow-right)
  else if (char >= 65 && char <= 90) {
    a = 65;
    b = 90;
  } else {
    return char;
  }

  newChar = char + i;
  while (newChar > b) {
    newChar = a + (newChar % (b + 1));
  }
  while (newChar < a) {
    newChar = b - ((a - 1) % newChar);
  }

  return newChar;
}

const caesar = function (text, i) {
  charList = text.split("");
  console.log(charList);
  newCharList = charList.map((char) => getUnicode(char));
  console.log(newCharList);
  encryptList = newCharList.map((unicode) => encrypt(unicode, i));
  console.log(encryptList);
  newCharList = encryptList.map((unicode) => getChar(unicode));
  console.log(newCharList);
  return newCharList.join("");
};

module.exports = caesar;
