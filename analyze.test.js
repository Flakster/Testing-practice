import analyze from './analyze';

test('Takes an array and gets max/min/avg/len into an object', () => {
  const ar = [1, 0, 4, 10, 5];
  const obj1 = {
    average: 4,
    min: 0,
    max: 10,
    length: 5,
  };
  const obj2 = analyze(ar);
  expect(obj1).toEqual(obj2);
});

test('Cannot get obj if array elements are not all numbers', () => {
  const ar = [1, 0, 4, 10, 'foo'];

  expect(() => {
    analyze(ar);
  }).toThrow(Error);
});