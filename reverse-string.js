const reverseString = word => {
  if (typeof word === 'string') {
    const splitted = word.split('').reverse();
    return splitted.join('');
  }
  throw new Error('Not a string sent');
};

export default reverseString;