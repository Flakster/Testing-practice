import caesarCipher from './cesar-cipher'

test('Caesar cipher with a shift of 5 of hello is mjqqt', () => {
    expect(caesarCipher('hello world 1.5', 5)).toMatch('mjqqt btwqi 1.5');
});