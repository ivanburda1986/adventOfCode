import {isSubsequence} from "../isSubsequence";

describe('isSubsequence', () => {
    it('returns ', () => {
        expect(isSubsequence('hello', 'hello world')).toBe(true);
        expect(isSubsequence('sing', 'sting')).toBe(true);
        expect(isSubsequence('abc', 'abracadabra')).toBe(true);
        expect(isSubsequence('abc', 'acb')).toBe(false);
    });
});
