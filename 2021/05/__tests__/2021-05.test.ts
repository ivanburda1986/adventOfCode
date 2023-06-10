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

/*
Split input by line breaks
For each line, get: [[8,0],[0,8]]

Evaluate where the line is horizontal or vertical
x === x || y === 0
horizontal: number for x (i.e. the first number) is the same for both value
vertical: number for y (i.e. the second number) is the same for both values

For horizontal and vertical:
 * Map where key is line X number
 * and value is a map where key is Y and value number of vents at the position
 * For 9,4 -> 3,4 ====>
 * represent the range as: [[9,4],[8,4],[7,4], [5,4],[4,4],[3,4]]
 * go over X and access the map at the X position and then access the nested map at the Y position and mark it as vent
 * if going over Y and it is already marked as vent, increase the overall count of fields where at least 2 vents are located

For diagonal
 * For 8,0 -> 0,8 ====> [[8,0],[7,1],[6,2],[5,3],[4,4],[3,5],[2,6],[1,7],[0,8]]
 *
 *
 */