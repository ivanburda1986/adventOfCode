import {countSubPairs, getAssignmentNumbers, getPairs, isSubPair} from "../cleaning";
import {readFileSync} from "fs";

const ALL_ASSIGNMENTS_EXAMPLE = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8

`;


describe('Advent of code 2022, day 4', () => {
    describe('getPairs', () => {
        it('returns assignment pairs', () => {
            expect(getPairs(ALL_ASSIGNMENTS_EXAMPLE)).toStrictEqual([["2-4", "6-8"], ["2-3", "4-5"], ["5-7", "7-9"], ["2-8", "3-7"], ["6-6", "4-6"], ["2-6", "4-8"]]);
        });
    });

    describe('getAssignmentNumbers', () => {
        it('returns numbers within a range', () => {
            expect(getAssignmentNumbers("2-6")).toStrictEqual('23456');
        });
    });

    describe('isSubPair', () => {
        it('returns true if one array of numbers contains the other', () => {
            expect(isSubPair(["2-6", "1-9"])).toBe(true);
        });
    });

    describe('countSubPairs', () => {
        it('countSubPairs returns number of pairs where the subpair condition is fulfilled ', () => {
            expect(countSubPairs(ALL_ASSIGNMENTS_EXAMPLE)).toBe(2);
        });

        it('countSubPairs returns number of pairs where the subpair condition is fulfilled - real data', () => {
            const assignments = readFileSync('2022/04/cleaningAssignments.txt', {encoding: 'utf8', flag: 'r'});
            expect(countSubPairs(assignments)).toBe(1);
        });
    });


});