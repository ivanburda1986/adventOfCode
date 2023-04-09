import {sameFrequency} from "../sameFrequency";

describe('sameFrequency', () => {
    it('returns', () => {
        expect(sameFrequency(182, 281)).toBe(true);
    });

    it('returns', () => {
        expect(sameFrequency(34, 14)).toBe(false);
    });

    it('returns', () => {
        expect(sameFrequency(3589578, 5879385)).toBe(true);
    });

    it('returns', () => {
        expect(sameFrequency(22, 222)).toBe(false);
    });
});