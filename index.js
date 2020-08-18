const capitalize = word => {
  if (typeof word === 'string') {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  throw new Error('Not a string sent');
};

const reverseString = word => {
  if (typeof word === 'string') {
    const splitted = word.split('').reverse();
    return splitted.join('');
  }
  throw new Error('Not a string sent');
};

export {
  capitalize,
  reverseString,
};