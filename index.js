const capitalize = word => {
    if (typeof word === 'string') {
        return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
        throw new Error('Not a string sent');
    }
};

const reverseString = word => {
    if (typeof word === 'string') {
        let splitted = word.split("").reverse();
        return splitted.join("");
    } else {
        throw new Error('Not a string sent');
    }
}

const calculator = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        const sum = () => a + b

        const substract = () => a - b

        const multiply = () => a *b

        const divide = () =>{
          if(b === 0){
            throw new Error('Can\'t divide by zero')
          }else{
            return a / b
          }
        }

        return {
            sum,
            substract,
            multiply,
            divide
        }
    } else {
        throw new Error("Inputs are not numbers")
    }

}

const caesarCipher = (phrase,shift) => {
  
  let result = [];
  
  const cipher = (letter) => {
    if (/[a-zA-Z]/.test(letter)){

      let code = letter.charCodeAt(0);
      let ciphered = code + shift;
      if (code >= 65 && code <=90){
        if (ciphered > 90){
          ciphered -= 91
        }
        if (ciphered < 65){
          ciphered += 65
        }
      }
      if (code >= 97 && code <=122){
        if (ciphered > 122){
          ciphered -= 123
        }
        if (ciphered < 97){
          ciphered += 97
        }
      }
      return String.fromCharCode(ciphered);
       
    } else if((/\s/.test(letter)) ||(/[\W\S]/.test(letter))){
      return letter
    }else {
      throw new Error('Phrase can only contain letters')
    }
}
  
  phrase.split('').forEach(element => {
      result.push(cipher(element));
  });

  return result.join('')
}

export {
  capitalize,
    reverseString,
    calculator,
    caesarCipher
};