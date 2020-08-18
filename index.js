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

export {
    capitalize,
    reverseString,
    calculator
};