const analyze = (ar) => {
  ar.forEach(x => {
    if (typeof x !== 'number') {
      throw new Error('Element is not a number');
    }
  });
  return {
    average: ar.reduce((ant, curr) => ant + curr) / ar.length,
    min: Math.min(...ar),
    max: Math.max(...ar),
    length: ar.length,
  };
};

export default analyze;