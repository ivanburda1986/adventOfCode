import {getOverlapCount} from "../2021-05";
import {readFileSync} from "fs";

describe('AOC-2021-05', () => {
    it('returns 5 as the number of points where at least two coordinate lines overlap in the sample data', () => {
        const input = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;
        expect(getOverlapCount(input)).toBe(5);
    });

    it('returns 123 as the number of points where at least two coordinate lines overlap in the real data', () => {
        const input = readFileSync('2021/05/2021-05.txt', {encoding: 'utf8', flag: 'r'});
        expect(getOverlapCount(input)).toBe(5);
    });
});