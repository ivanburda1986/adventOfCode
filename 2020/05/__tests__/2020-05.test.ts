import {readFileSync} from "fs";
import {getMySeatId, getColumnNumber, getHighestSeatId, getRowNumber, getSeatId} from "../2020-05";


describe('helpers', () => {
    it('returns rowNumber', () => {
        expect(getRowNumber("BFFFBBF")).toBe(70);
    });

    it('returns rowNumber', () => {
        expect(getRowNumber("BBFFBBF")).toBe(102);
    });

    it('returns  columnNumber', () => {
        expect(getColumnNumber('RRR')).toBe(7);
    });

    it('returns  columnNumber', () => {
        expect(getColumnNumber('RLL')).toBe(4);
    });

    it('returns seatId for BFFFBBFRRR to be 567', () => {
        expect(getSeatId('BFFFBBFRRR')).toBe(567);
    });

    it('returns seatId for FFFBBBFRRR to be 119', () => {
        expect(getSeatId('FFFBBBFRRR')).toBe(119);
    });

    it('returns seatId for BBFFBBFRLL to be 820', () => {
        expect(getSeatId('BBFFBBFRLL')).toBe(820);
    });
});

describe('AOC-2020-05', () => {
    it('returns highest seat ID for sample data to be: 820', () => {
        const boardingPasses = `BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;
        expect(getHighestSeatId(boardingPasses)).toBe(820);
    });

    it('returns highest seat ID for real data to be: xxx', () => {
        const boardingPasses = readFileSync('2020/05/2020-05.txt', {encoding: 'utf8', flag: 'r'});
        expect(getHighestSeatId(boardingPasses)).toBe(926);
    });

    it('returns my seat id to be 657', () => {
        const boardingPasses = readFileSync('2020/05/2020-05.txt', {encoding: 'utf8', flag: 'r'});
        expect(getMySeatId(boardingPasses)).toBe(657);
    });
});
