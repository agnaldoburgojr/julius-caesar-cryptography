const decrypter = (message, number) => {
  const reducer = (result, currentChar) => {
    if (currentChar.charCodeAt() > 96 && currentChar.charCodeAt() < 123) {
      if (currentChar.charCodeAt() - number <= 96) {
        let diff = currentChar.charCodeAt() - 97;
        let compl = number - diff;
        return result + String.fromCharCode(123 - compl);
      }
      return result + String.fromCharCode(currentChar.charCodeAt() - number);
    }
    return result + currentChar;
  };

  return message
    .toLowerCase()
    .split("")
    .reduce(reducer, "");
};

export default decrypter;
