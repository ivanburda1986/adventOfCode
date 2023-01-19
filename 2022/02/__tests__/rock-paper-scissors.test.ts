import {getScore} from "../rock-paper-scissors";
import {readFileSync} from "fs";

describe('Advent of code 2022 day 2', () => {
    describe('getScore', () => {
        it('returns the total score of the r-p-s game by following the strategies', () => {
            const strategies = `A Y
B X
C Z`;
            expect(getScore(strategies)).toBe(15);
        });

        it('returns the total score of the r-p-s game by following the strategies based on the real data input', () => {
            const strategies = readFileSync('2022/02/strategies.txt', {encoding: 'utf8', flag: 'r'});
            expect(getScore(strategies)).toBe(11666);
        });
    });
});