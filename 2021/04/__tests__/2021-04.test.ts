import {getFirstWinningBoardScore, getLastWinningBoardScore} from "../2021-04";
import {readFileSync} from "fs";

describe('AOC-2021-04', () => {
    it('returns score of 4512 for the 1st winning board for the sample input', () => {
        const input = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

        expect(getFirstWinningBoardScore(input)).toBe(4512);
    });

    it('returns score of 49686 for the 1st winning board for the real input', () => {
        const input = readFileSync('2021/04/2021-04.txt', {encoding: 'utf8', flag: 'r'});
        expect(getFirstWinningBoardScore(input)).toBe(49686);
    });

    it('returns score of 4512 for the last winning board for the sample input', () => {
        const input = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

        expect(getLastWinningBoardScore(input)).toBe(1924);
    });

    it('returns score of 26878 for the last winning board for the real input', () => {
        const input = readFileSync('2021/04/2021-04.txt', {encoding: 'utf8', flag: 'r'});
        expect(getLastWinningBoardScore(input)).toBe(26878);
    });

});
