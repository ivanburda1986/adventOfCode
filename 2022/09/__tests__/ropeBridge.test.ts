import {getTailTouchedPositions} from "../ropeBridge";
import {readFileSync} from "fs";

describe('getTailTouchedPositions', () => {
    it('returns positions touched by the tail for the example data', () => {
        const moves = readFileSync('2022/09/exampleMoves.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getTailTouchedPositions(moves)).toBe(13);
    });
});