import {getAssignmentNumbers, getPairs, isSubPair} from "../cleaning";

const ALL_ASSIGNMENTS = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

const a = `46-89,45-46
11-87,10-88
3-88,3-4
19-46,47-93
23-60,22-84
22-84,21-94
1-3,18-81`;

describe('Advent of code 2022, day 4', () => {
    describe('getPairs', () => {
        it('returns assignment pairs', () => {
            expect(getPairs(ALL_ASSIGNMENTS)).toStrictEqual([["2-4", "6-8"], ["2-3", "4-5"], ["5-7", "7-9"], ["2-8", "3-7"], ["6-6", "4-6"], ["2-6", "4-8"]]);
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

});