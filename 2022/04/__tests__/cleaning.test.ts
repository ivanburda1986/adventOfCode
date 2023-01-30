import {countFullyContainedPairs, countOverlappingPairs} from "../cleaning";
import {readFileSync} from "fs";

const ALL_ASSIGNMENTS_EXAMPLE = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`;


describe('Advent of code 2022, day 4', () => {
    describe('countFullyContainedPairs', () => {
        it('countFullyContainedPairs returns number of pairs where the subpair condition is fulfilled ', () => {
            expect(countFullyContainedPairs(ALL_ASSIGNMENTS_EXAMPLE)).toBe(2);
        });

        it('countFullyContainedPairs returns number of pairs where the subpair condition is fulfilled - real data', () => {
            const assignments = readFileSync('2022/04/cleaningAssignments.txt', {encoding: 'utf8', flag: 'r'});
            expect(countFullyContainedPairs(assignments)).toBe(456);
        });
    });

    describe('countOverlappingPairs', () => {
        it('countOverlappingPairs returns number of pairs where the subpair condition is fulfilled ', () => {
            expect(countOverlappingPairs(ALL_ASSIGNMENTS_EXAMPLE)).toBe(4);
        });

        it('countOverlappingPairs returns number of pairs where the subpair condition is fulfilled - real data', () => {
            const assignments = readFileSync('2022/04/cleaningAssignments.txt', {encoding: 'utf8', flag: 'r'});
            expect(countOverlappingPairs(assignments)).toBe(808);
        });
    });
});