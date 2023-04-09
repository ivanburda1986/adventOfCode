import {averagePair} from "../averagePair";

describe('averagePair', () => {
    it('returns ', () => {
        expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    });

    it('returns ', () => {
        expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    });

    it('returns ', () => {
        expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    });

    it('returns ', () => {
        expect(averagePair([], 4)).toBe(false);
    });
});
