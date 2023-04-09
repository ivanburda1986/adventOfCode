import {areThereDuplicates} from "../areThereDuplicates";

describe('areThereDuplicates', () => {
    it('returns', () => {
        expect(areThereDuplicates(1, 2, 3)).toBe(false);
    });

    it('returns', () => {
        expect(areThereDuplicates(1, 2, 2)).toBe(true);
    });

    it('returns', () => {
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
    });
});
