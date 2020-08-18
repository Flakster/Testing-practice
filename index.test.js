import {
  capitalize
 } from './index';

test('hello capitalized is Hello', () =>{
  expect(capitalize('hello')).toBe('Hello');
});
