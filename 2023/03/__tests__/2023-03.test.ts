import {readFileSync} from "fs";
import {getPartSum} from "../2023-03";

describe('AOC-2023-03', () => {
    it('part1 returns 4361 as a part sum for test input', () => {
        const input = `..........
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
..........`;
        expect(getPartSum(input)).toBe(4361);
    });

    it('part1 returns xxx as a part sum for real input', () => {
        const input = readFileSync('2023/03/2023-03.txt', {encoding: 'utf8', flag: 'r'});
        expect(getPartSum(input)).not.toBe(471097);
        expect(getPartSum(input)).not.toBe(533735);
        expect(getPartSum(input)).not.toBe(538039);
        expect(getPartSum(input)).toBe(1);
    });
});