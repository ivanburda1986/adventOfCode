import {maxSubarraysum} from "../maxSubarraysum";

describe('maxSubarraysum', () => {
    it('returns', () => {
        expect(maxSubarraysum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    });

    it('returns', () => {
        expect(maxSubarraysum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    });

    it('returns', () => {
        expect(maxSubarraysum([4, 2, 1, 6, 1], 1)).toBe(6);
    });

    it('returns', () => {
        expect(maxSubarraysum([4, 2, 1, 6, 1], 4)).toBe(13);
    });

    it('returns', () => {
        expect(maxSubarraysum([], 4)).toBeNull();
    });
});