import {getTrees, getTreesMultiplication} from "../2020-03";
import {readFileSync} from "fs";

describe('AOC-2020-03', () => {
    it('returns 7 as a number of trees for the sample input', () => {
        const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
        expect(getTrees(input)).toBe(7);
    });

    it('returns 205 as a number of tress for the real input', () => {
        const input = readFileSync('2020/03/2020-03.txt', {encoding: 'utf8', flag: 'r'});
        expect(getTrees(input)).toBe(205);
    });

    it('returns 336 as multiplication of trees for all paths in the sample input', () => {
        const input = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;
        expect(getTreesMultiplication(input)).toBe(336);
    });

    it('returns 3952146825 as multiplication of trees for all paths in the real input', () => {
        const input = readFileSync('2020/03/2020-03.txt', {encoding: 'utf8', flag: 'r'});
        expect(getTreesMultiplication(input)).toBe(3952146825);
    });
});
