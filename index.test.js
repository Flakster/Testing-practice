import {
    capitalize,
    reverseString,
    calculator,
    caesarCipher
} from './index';
import { TestScheduler } from 'jest';

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

test('5 times 4 is 20', () => {
  expect(calculator(5,4).multiply()).toBe(20);
});

test('30 divided by 6 is 5',() =>{
  expect(calculator(30,6).divide()).toBe(5);
});

test('can\'t divide by 0',() =>{
    expect(() => {
      calculator(10, 0).divide()
  }).toThrow(Error);
});

test('Caesar cipher with a shift of 5 of hello is mjqqt', () =>{
  expect(caesarCipher('hello world 1.5',5)).toMatch('mjqqt btwqi 1.5');
});