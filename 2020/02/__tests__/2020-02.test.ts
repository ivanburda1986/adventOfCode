import {validPasswordsNumber, validPasswordsNumberApproach2} from "../2020-02";
import {readFileSync} from "fs";

describe('AOC-2020-02', () => {
    it('returns 2 as a number of valid passwords in the sample data - part1', () => {
        const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
        expect(validPasswordsNumber(input)).toBe(2);
    });

    it('returns 538 as a number of valid passwords in the real data - part1', () => {
        const input = readFileSync('2020/02/2020-02.txt', {encoding: 'utf8', flag: 'r'});
        expect(validPasswordsNumber(input)).toBe(538);
    });

    it('returns 1 as a number of valid passwords in the sample data - part2', () => {
        const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
        expect(validPasswordsNumberApproach2(input)).toBe(1);
    });

    it('returns 489 as a number of valid passwords in the real data - part1', () => {
        const input = readFileSync('2020/02/2020-02.txt', {encoding: 'utf8', flag: 'r'});
        expect(validPasswordsNumberApproach2(input)).toBe(489);
    });

});
