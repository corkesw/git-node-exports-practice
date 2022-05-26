// use npm test to run a test suite

const testFunc = require("../index")

describe('testFunc', () => {
    test('should return a string of hello when invoked', () => {
        const actual = testFunc()
        const expected = "hello"
        expect(actual).toBe(expected)
    });
});