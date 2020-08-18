const calculator = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    const sum = () => a + b;

    const substract = () => a - b;

    const multiply = () => a * b;

    const divide = () => {
      if (b === 0) {
        throw new Error('Can\'t divide by zero');
      } else {
        return a / b;
      }
    };

    return {
      sum,
      substract,
      multiply,
      divide,
    };
  }
  throw new Error('Inputs are not numbers');
};

export default calculator;