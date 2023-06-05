import {getPowerConsumption, getLifeSupportRating} from "../2021-03";
import {readFileSync} from "fs";

describe('AOC-2021-03', () => {
    describe('getPowerConsumption', () => {
        it('returns 198 power consumption for the sample input', () => {
            const input = `
                00100
                11110
                10110
                10111
                10101
                01111
                00111
                11100
                10000
                11001
                00010
                01010`;
            expect(getPowerConsumption(input)).toBe(198);
        });

        it('returns 3687446 power consumption for the real input', () => {
            const input = readFileSync('2021/03/2021-03-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(getPowerConsumption(input)).toBe(3687446);
        });
    });

    describe('getLifeSupportRating', () => {
        it('returns 230 for the sample input', () => {
            const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

            expect(getLifeSupportRating(input)).toBe(230);
        });
        it('returns 4406844 for the real input', () => {
            const input = readFileSync('2021/03/2021-03-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(getLifeSupportRating(input)).toBe(4406844);
        });
    });
});
