import {getCalibrationSum, getCalibrationSum2} from "../2023-01";
import {readFileSync} from "fs";

describe('AOC-2023-01', () => {
    it('part1 returns calibration sum to be 142 for the test input', () => {
        const input =
            `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;
        expect(getCalibrationSum(input)).toBe(142);
    });

    it('part1 returns calibration sum to be 54708 for the real input', () => {
        const input = readFileSync('2023/01/2023-01.txt', {encoding: 'utf8', flag: 'r'});
        expect(getCalibrationSum(input)).toBe(54708);
    });

    it('part2 returns calibration sum to be 281 for the test input', () => {
        const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
        expect(getCalibrationSum2(input)).toBe(281);
    });

    it('part2 returns calibration sum to be 54087 for the real input', () => {
        const input = readFileSync('2023/01/2023-01.txt', {encoding: 'utf8', flag: 'r'});
        expect(getCalibrationSum2(input)).toBe(54087);
    });
});