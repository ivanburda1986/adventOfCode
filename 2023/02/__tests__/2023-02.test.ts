import {getPowerOfMinCubeCounts, getSumOfImpossibleGameIds} from "../2023-02";
import {readFileSync} from "fs";

describe('AOC-2023-02', () => {
    it('part1 returns 8 for test input', () => {
        const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
        expect(getSumOfImpossibleGameIds(input)).toBe(8);
    });

    it('part1 returns 2369 for real input', () => {
        const input = readFileSync('2023/02/2023-02.txt', {encoding: 'utf8', flag: 'r'});
        expect(getSumOfImpossibleGameIds(input)).toBe(2369);
    });

    it('part2 returns 2286 for test input', () => {
        const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
        expect(getPowerOfMinCubeCounts(input)).toBe(2286);
    });

    it('part1 returns 66363 for real input', () => {
        const input = readFileSync('2023/02/2023-02.txt', {encoding: 'utf8', flag: 'r'});
        expect(getPowerOfMinCubeCounts(input)).toBe(66363);
    });
});