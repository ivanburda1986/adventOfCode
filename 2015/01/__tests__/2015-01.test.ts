import {readFileSync} from "fs";
import {whatFloorWillSantaGetTo, whichInstructionLeadsToMinusOneFloor} from "../2015-01";

describe('A0C 2015-01', () => {
    describe('part1', () => {
        it('example instructions lead the Santa to floor: 0', () => {
            const input = "(())";
            expect(whatFloorWillSantaGetTo(input)).toBe(0);
        });

        it('example instructions lead the Santa to floor: 0', () => {
            const input = "()()";
            expect(whatFloorWillSantaGetTo(input)).toBe(0);
        });

        it('example instructions lead the Santa to floor: 3', () => {
            const input = "(((";
            expect(whatFloorWillSantaGetTo(input)).toBe(3);
        });

        it('example instructions lead the Santa to floor: 3', () => {
            const input = "(()(()(";
            expect(whatFloorWillSantaGetTo(input)).toBe(3);
        });

        it('example instructions lead the Santa to floor: 3', () => {
            const input = "))(((((";
            expect(whatFloorWillSantaGetTo(input)).toBe(3);
        });

        it('example instructions lead the Santa to floor: -1', () => {
            const input = "())";
            expect(whatFloorWillSantaGetTo(input)).toBe(-1);
        });

        it('example instructions lead the Santa to floor: -1', () => {
            const input = "))(";
            expect(whatFloorWillSantaGetTo(input)).toBe(-1);
        });

        it('example instructions lead the Santa to floor: -3', () => {
            const input = ")))";
            expect(whatFloorWillSantaGetTo(input)).toBe(-3);
        });

        it('example instructions lead the Santa to floor: -3', () => {
            const input = ")())())";
            expect(whatFloorWillSantaGetTo(input)).toBe(-3);
        });


        it('real instructions lead the Santa to floor: 232', () => {
            const input = readFileSync('2015/01/2015-01-1.txt', {
                encoding: 'utf8',
                flag: 'r'
            });

            expect(whatFloorWillSantaGetTo(input)).toBe(232);
        });
    });

    describe('part 2', () => {
        it('example instruction which leads Santa to the floor-1: 1 ', () => {
            const input = ")";
            expect(whichInstructionLeadsToMinusOneFloor(input)).toBe(1);
        });

        it('example instruction which leads Santa to the floor-1: 5 ', () => {
            const input = "()())";
            expect(whichInstructionLeadsToMinusOneFloor(input)).toBe(5);
        });

        it('real instruction which leads Santa to the floor-1: 5 ', () => {
            const input = readFileSync('2015/01/2015-01-1.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(whichInstructionLeadsToMinusOneFloor(input)).toBe(1783);
        });
    });
});