import reverseString from './reverse-string';

test('Reversed string', () => {
  expect(reverseString('catdog')).toBe('godtac');
});

test('Reversed String with number input', () => {
  expect(() => {
    reverseString(2);
  }).toThrow(Error);
});