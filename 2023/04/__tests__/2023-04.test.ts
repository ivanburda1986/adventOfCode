import {getCrossingPathCount} from "../2023-04";

describe('AOC-2023-04', () => {
    it('returns that 2 hailstone future paths crosses for the test data', () => {
        const input = `19, 13, 30 @ -2,  1, -2
18, 19, 22 @ -1, -1, -2
20, 25, 34 @ -2, -2, -4
12, 31, 28 @ -1, -2, -1
20, 19, 15 @  1, -5, -3`;
        expect(getCrossingPathCount(input)).toBe(2);
    });

    it('returns that 2 hailstone future paths crosses for the test data', () => {

    });
});