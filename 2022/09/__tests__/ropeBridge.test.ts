import {getTailTouchedPositions} from "../ropeBridge";
import {readFileSync} from "fs";

describe('getTailTouchedPositions', () => {
    it('returns positions touched by the tail for the example data', () => {
        const exampleMoves = readFileSync('2022/09/exampleMoves.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getTailTouchedPositions(exampleMoves)).toBe(13);
    });

    it('returns positions touched by the tail for the example data', () => {
        const realMoves = readFileSync('2022/09/realMoves.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getTailTouchedPositions(realMoves)).toBe(6044);
    });
});