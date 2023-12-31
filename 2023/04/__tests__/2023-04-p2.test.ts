import {getStoneInitialCoordinatesSum} from "../2023-04-p2";

describe('AOC-2023-04-part2', () => {
    it('returns 47 as a sum of stone initial coordinates for the test data', () => {
        const input = `19, 13, 30 @ -2,  1, -2
18, 19, 22 @ -1, -1, -2
20, 25, 34 @ -2, -2, -4
12, 31, 28 @ -1, -2, -1
20, 19, 15 @  1, -5, -3`;
        expect(getStoneInitialCoordinatesSum(input)).toBe(47);
    });
});