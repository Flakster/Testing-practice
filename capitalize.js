const capitalize = word => {
  if (typeof word === 'string') {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  throw new Error('Not a string sent');
};


export default capitalize;