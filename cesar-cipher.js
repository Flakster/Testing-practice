const caesarCipher = (phrase, shift) => {
  const result = [];

  const cipher = (letter) => {
    if (/[a-zA-Z]/.test(letter)) {
      const code = letter.charCodeAt(0);
      let ciphered = code + shift;
      if (code >= 65 && code <= 90) {
        if (ciphered > 90) {
          ciphered -= 91;
        }
        if (ciphered < 65) {
          ciphered += 65;
        }
      }
      if (code >= 97 && code <= 122) {
        if (ciphered > 122) {
          ciphered -= 123;
        }
        if (ciphered < 97) {
          ciphered += 97;
        }
      }
      return String.fromCharCode(ciphered);
    } if ((/\s/.test(letter)) || (/[\W\S]/.test(letter))) {
      return letter;
    }
    throw new Error('Phrase can only contain letters');
  };

  phrase.split('').forEach(element => {
    result.push(cipher(element));
  });

  return result.join('');
};

export default caesarCipher;