const countWords = require('./countWords');

describe('countWords function', () => {
    test('counts words in simple sentence', () => {
        expect(countWords('Hello world')).toBe(2);
    });

    test('handles multiple spaces between words', () => {
        expect(countWords('Hello   world')).toBe(2);
    });

    test('handles leading/trailing spaces', () => {
        expect(countWords('  Hello world  ')).toBe(2);
    });

    test('returns 0 for empty string', () => {
        expect(countWords('')).toBe(0);
    });

    test('returns 0 for string with only spaces', () => {
        expect(countWords('   ')).toBe(0);
    });

    test('counts punctuation as part of words', () => {
        expect(countWords('Hello, world!')).toBe(2);
    });

    test('handles single word', () => {
        expect(countWords('Hello')).toBe(1);
    });

    test('throws error for non-string input', () => {
        expect(() => countWords(123)).toThrow('Input must be a string');
        expect(() => countWords(null)).toThrow('Input must be a string');
        expect(() => countWords(undefined)).toThrow('Input must be a string');
        expect(() => countWords({})).toThrow('Input must be a string');
    });
});