import {countHousesSantaAndRoboSantaDeliverTo, countHousesSantaDeliversTo} from "../2015-03";
import {readFileSync} from "fs";

describe('A0C 2015-03', () => {
    describe('countHousesSantaDeliversTo', () => {
        it('returns 2 houses get presents when instructions are >', () => {
            expect(countHousesSantaDeliversTo(">")).toBe(2);
        });

        it('returns 4 houses get presents when instructions are ^>v<', () => {
            expect(countHousesSantaDeliversTo("^>v<")).toBe(4);
        });

        it('returns 2 houses get presents when instructions are ^v^v^v^v^v', () => {
            expect(countHousesSantaDeliversTo("^v^v^v^v^v")).toBe(2);
        });

        it('returns 2565 houses get present for the real instruction input', () => {
            const instructions = readFileSync('2015/03/2015-03-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(countHousesSantaDeliversTo(instructions)).toBe(2565);
        });
    });

    describe('countHousesSantaAndRoboSantaDeliverTo', () => {
        it('returns 3 houses get presents when instructions are ^v', () => {
            expect(countHousesSantaAndRoboSantaDeliverTo("^v")).toBe(3);
        });

        it('returns 3 houses get presents when instructions are ^>v<', () => {
            expect(countHousesSantaAndRoboSantaDeliverTo("^>v<")).toBe(3);
        });

        it('returns 11 houses get presents when instructions are ^v^v^v^v^v', () => {
            expect(countHousesSantaAndRoboSantaDeliverTo("^v^v^v^v^v")).toBe(11);
        });

        it('returns xxx houses get presents', () => {
            const instructions = readFileSync('2015/03/2015-03-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(countHousesSantaAndRoboSantaDeliverTo(instructions)).toBe(2639);
        });
    });
});