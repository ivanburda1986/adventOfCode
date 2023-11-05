import {getCountSumOfSharedYesAnswer, getCountSumOfUniqueYesAnswers} from "../2020-06";
import {readFileSync} from "fs";

describe('AOC-2020-06', () => {
    it('returns 11 as the sum of counts for the sample data', () => {
        const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
        expect(getCountSumOfUniqueYesAnswers(input)).toBe(11);
    });

    it('returns xxx as the sum of counts for the real data', () => {
        const input = readFileSync('2020/06/2020-06.txt', {encoding: 'utf8', flag: 'r'});
        expect(getCountSumOfUniqueYesAnswers(input)).toBe(6775);
    });

    it('returns 6 as count of answers for which all people in a group answered YES', () => {
        const input = `abc

a
b
c

ab
ac

a
a
a
a

b

`;
        expect(getCountSumOfSharedYesAnswer(input)).toBe(6);
    });

    it('returns xxx as count of answers for which all people in a group answered YES in the real data', () => {
        const input = readFileSync('2020/06/2020-06.txt', {encoding: 'utf8', flag: 'r'});
        expect(getCountSumOfSharedYesAnswer(input)).not.toBe(3346);
        expect(getCountSumOfSharedYesAnswer(input)).toBe(3356);
    });
});
