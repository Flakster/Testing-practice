const caesarCipher = (phrase, shift) => {

    let result = [];

    const cipher = (letter) => {
        if (/[a-zA-Z]/.test(letter)) {

            let code = letter.charCodeAt(0);
            let ciphered = code + shift;
            if (code >= 65 && code <= 90) {
                if (ciphered > 90) {
                    ciphered -= 91
                }
                if (ciphered < 65) {
                    ciphered += 65
                }
            }
            if (code >= 97 && code <= 122) {
                if (ciphered > 122) {
                    ciphered -= 123
                }
                if (ciphered < 97) {
                    ciphered += 97
                }
            }
            return String.fromCharCode(ciphered);

        } else if ((/\s/.test(letter)) || (/[\W\S]/.test(letter))) {
            return letter
        } else {
            throw new Error('Phrase can only contain letters')
        }
    }

    phrase.split('').forEach(element => {
        result.push(cipher(element));
    });

    return result.join('')
}

export default caesarCipher;