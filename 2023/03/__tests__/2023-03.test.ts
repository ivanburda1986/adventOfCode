import {readFileSync} from "fs";
import {getPartSum} from "../2023-03";
import {getGearMultiplicationSum} from "../2023-03-part2";

describe('AOC-2023-03', () => {
    it('part1 returns 4361 as a part sum for test input', () => {
        const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
        expect(getPartSum(input)).toBe(4361);
    });

    it('part1 returns 533784 as a part sum for real input', () => {
        const input = readFileSync('2023/03/2023-03.txt', {encoding: 'utf8', flag: 'r'});
        expect(getPartSum(input)).toBe(533784);
    });

    it('part2 returns 467835 as a sum of gear-related multiplications for test input', () => {
        const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
        expect(getGearMultiplicationSum(input)).toBe(467835);
    });

    it('part2 returns 78826761 as a sum of gear-related multiplications for real input', () => {
        const input = readFileSync('2023/03/2023-03.txt', {encoding: 'utf8', flag: 'r'});
        expect(getGearMultiplicationSum(input)).toBe(78826761);
    });
});