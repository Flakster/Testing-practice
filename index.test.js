import {
    capitalize,
    reverseString,
    calculator
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

test('add 2 numbers', () => {
    expect(calculator(2, 10).sum()).toBe(12)
})

test('add 1 number and 1 string', () => {
    expect(() => {
        calculator(2, 'foo').sum()
    }).toThrow(Error)
})

test('substract 2 numbers', () => {
    expect(calculator(10, 2).substract()).toBe(8)
})

test('subtract 1 number and 1 string', () => {
    expect(() => {
        calculator(10, 'foo').substract()
    }).toThrow(Error)
})