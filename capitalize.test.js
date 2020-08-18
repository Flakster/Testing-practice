import capitalize from './capitalize';


test('hello capitalized is Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalized a number', () => {
  expect(() => {
    capitalize(69);
  }).toThrow(Error);
});