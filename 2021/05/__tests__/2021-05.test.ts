import {getLineFullCoordinates, getOverlapCount, getParsedInput, LineDirection, sortLinesByDirection} from "../2021-05";
import {readFileSync} from "fs";

const sampleInput = `0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2`;


describe('AOC-2021-05', () => {
    describe('getLineFullCoordinates', () => {
        it('returns full coordinates for line1', () => {
            expect(getLineFullCoordinates(["0", "9", "5", "9"], LineDirection.horizontal)).toEqual([["0", "9"], ["1", "9"], ["2", "9"], ["3", "9"], ["4", "9"], ["5", "9"]]);
        });

        it('returns full coordinates for line2', () => {
            expect(getLineFullCoordinates(["8", "0", "0", "8"], LineDirection.diagonal)).toEqual([["8", "0"], ["7", "1"], ["6", "2"], ["5", "3"], ["4", "4"], ["3", "5"], ["2", "6"], ["1", "7"], ["0", "8"]]);
        });

        it('returns full coordinates for line3', () => {
            expect(getLineFullCoordinates(["9", "4", "3", "4"], LineDirection.horizontal)).toEqual([["9", "4"], ["8", "4"], ["7", "4"], ["6", "4"], ["5", "4"], ["4", "4"], ["3", "4"]]);
        });

        it('returns full coordinates for line4', () => {
            expect(getLineFullCoordinates(["2", "2", "2", "1"], LineDirection.vertical)).toEqual([["2", "2"], ["2", "1"]]);
        });

        it('returns full coordinates for line5', () => {
            expect(getLineFullCoordinates(["7", "0", "7", "4"], LineDirection.vertical)).toEqual([["7", "0"], ["7", "1"], ["7", "2"], ["7", "3"], ["7", "4"]]);
        });

        it('returns full coordinates for line6', () => {
            expect(getLineFullCoordinates(["6", "4", "2", "0"], LineDirection.diagonal)).toEqual([["6", "4"], ["5", "3"], ["4", "2"], ["3", "1"], ["2", "0"]]);
        });

        it('returns full coordinates for line7', () => {
            expect(getLineFullCoordinates(["0", "9", "2", "9"], LineDirection.horizontal)).toEqual([["0", "9"], ["1", "9"], ["2", "9"]]);
        });

        it('returns full coordinates for line8', () => {
            expect(getLineFullCoordinates(["3", "4", "1", "4"], LineDirection.horizontal)).toEqual([["3", "4"], ["2", "4"], ["1", "4"]]);
        });

        it('returns full coordinates for line9', () => {
            expect(getLineFullCoordinates(["0", "0", "8", "8"], LineDirection.diagonal)).toEqual([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"]]);
        });
        it('returns full coordinates for line10', () => {
            expect(getLineFullCoordinates(["5", "5", "8", "2"], LineDirection.diagonal)).toEqual([["5", "5"], ["6", "4"], ["7", "3"], ["8", "2"]]);
        });
    });

    describe('sortLinesByDirection', () => {
        it('returns coordinates sorted by direction', () => {
            expect(sortLinesByDirection(getParsedInput(sampleInput))).toEqual({
                "diagonal": [["8", "0", "0", "8"], ["6", "4", "2", "0"], ["0", "0", "8", "8"], ["5", "5", "8", "2"]],
                "horizontal": [["0", "9", "5", "9"], ["9", "4", "3", "4"], ["0", "9", "2", "9"], ["3", "4", "1", "4"]],
                "vertical": [["2", "2", "2", "1"], ["7", "0", "7", "4"]]
            });
        });
    });

    describe('getOverlapCount', () => {
        it('returns 5 as the number of points where at least two horizontal/vertical lines overlap in the sample data', () => {
            expect(getOverlapCount(sampleInput)).toBe(5);
        });

        it('returns 5280 as the number of points where at least two horizontal/vertical lines overlap in the real data', () => {
            const input = readFileSync('2021/05/2021-05.txt', {encoding: 'utf8', flag: 'r'});
            expect(getOverlapCount(input)).toBe(5280);
        });

        it('returns 12 as the number of points where at least two horizontal/vertical/diagonal lines overlap in the sample data', () => {
            expect(getOverlapCount(sampleInput, true)).toBe(12);
        });

        it('returns 123456 as the number of points where at least two horizontal/vertical/diagonal lines overlap in the real data', () => {
            const input = readFileSync('2021/05/2021-05.txt', {encoding: 'utf8', flag: 'r'});
            expect(getOverlapCount(input, true)).toBe(1);
        });
    });
});

