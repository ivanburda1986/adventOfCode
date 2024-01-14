import {readFileSync} from "fs";
import {getCardCount, getCardWinningPoints} from "../2023-04";

describe('AOC-2023-04', () => {
    it('returns 13 to be number of points scratchcards are worth for the test data', () => {
        const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
        expect(getCardWinningPoints(input)).toBe(13);
    });

    it('returns 26426 to be number of points scratchcards are worth for the real data', () => {
        const input = readFileSync('2023/04/2023-04.txt', {encoding: 'utf8', flag: 'r'});
        expect(getCardWinningPoints(input)).toBe(26426);
    });

    it('returns 30 to be number of scratchcards for the test data', () => {
        const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
        expect(getCardCount(input)).toBe(30);
    });

    it('returns xx to be number of scratchcards for the real data', () => {
        const input = readFileSync('2023/04/2023-04.txt', {encoding: 'utf8', flag: 'r'});
        expect(getCardCount(input)).toBe(6227972);
    });


});