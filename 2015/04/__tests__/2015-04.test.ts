import {getLowestSuitableNumber} from "../2015-04";

describe('getLowestSuitableNumber', () => {
    it('returns 609043 as the lowest positive number without leading zeroes that prepended with a secret key abcdef produces an MD5 hash that in hexadecimal starts with at least 5 zeroes', () => {
        const secretKey = 'abcdef';
        const requiredMD5HashStart = '00000';

        expect(getLowestSuitableNumber(secretKey, requiredMD5HashStart)).toBe(609043);
    });

    it('returns 1048970 as the lowest positive number without leading zeroes that prepended with a secret key pqrstuv produces an MD5 hash that in hexadecimal starts with at least 5 zeroes', () => {
        const secretKey = 'pqrstuv';
        const requiredMD5HashStart = '00000';
        expect(getLowestSuitableNumber(secretKey, requiredMD5HashStart)).toBe(1048970);
    });

    it('returns 346386 as the lowest positive number without leading zeroes that prepended with a secret key iwrupvqb produces an MD5 hash that in hexadecimal starts with at least 5 zeroes', () => {
        const secretKey = 'iwrupvqb';
        const requiredMD5HashStart = '00000';
        expect(getLowestSuitableNumber(secretKey, requiredMD5HashStart)).toBe(346386);
    });

    it('returns 9958218 as the lowest positive number without leading zeroes that prepended with a secret key iwrupvqb produces an MD5 hash that in hexadecimal starts with at least 6 zeroes', () => {
        const secretKey = 'iwrupvqb';
        const requiredMD5HashStart = '000000';
        expect(getLowestSuitableNumber(secretKey, requiredMD5HashStart)).toBe(9_958_218);
    });
});