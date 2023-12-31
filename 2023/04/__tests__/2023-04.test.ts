import {getCrossingPathCount} from "../2023-04";
import {readFileSync} from "fs";

describe('AOC-2023-04', () => {
    it('returns that 2 hailstone future paths crosses for the test data', () => {
        const input = `19, 13, 30 @ -2,  1, -2
18, 19, 22 @ -1, -1, -2
20, 25, 34 @ -2, -2, -4
12, 31, 28 @ -1, -2, -1
20, 19, 15 @  1, -5, -3`;
        expect(getCrossingPathCount(input, 7, 27)).toBe(2);
    });

    it('returns that x hailstone future paths crosses for the real data', () => {
        const input = readFileSync('2023/04/2023-04.txt', {encoding: 'utf8', flag: 'r'});
        // expect(getCrossingPathCount(input, 200000000000000, 400000000000000)).not.toBe(28654);
        expect(getCrossingPathCount(input, 200000000000000, 400000000000000)).toBe(2);
    });
});