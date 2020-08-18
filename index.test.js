import {
    capitalize,
    reverseString,

} from './index';




test('hello capitalized is Hello', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalized a number', () => {
    expect(() => {
        capitalize(69)
    }).toThrow(Error)
})

test('Reversed string', () => {
    expect(reverseString('catdog')).toBe('godtac')
})

test('Reversed String with number input', () => {
    expect(() => {
        reverseString(2)
    }).toThrow(Error)
})