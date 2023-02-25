import {getTailTouchedPositions} from "../ropeBridge";
import {readFileSync} from "fs";

describe('getTailTouchedPositions', () => {
    it('returns positions touched by the tail for the example data', () => {
        const exampleMoves = readFileSync('2022/09/exampleMoves.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getTailTouchedPositions(exampleMoves, 2)).toBe(13);
    });

    it('returns positions touched by the tail for the real data', () => {
        const realMoves = readFileSync('2022/09/realMoves.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getTailTouchedPositions(realMoves, 2)).toBe(6044);
    });
    it('part2 -returns positions touched by the tail for the example data', () => {
        const exampleMoves2 = readFileSync('2022/09/exampleMoves-part2.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getTailTouchedPositions(exampleMoves2, 10)).toBe(36);
    });
    it('part2 -returns positions touched by the tail for the real data', () => {
        const realMoves2 = readFileSync('2022/09/realMoves-part2.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getTailTouchedPositions(realMoves2, 10)).toBe(6044);
    });
});