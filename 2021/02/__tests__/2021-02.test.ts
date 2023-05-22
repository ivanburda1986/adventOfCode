import {getPosition, getPositionByManual} from "../2021-02";
import {readFileSync} from "fs";

describe('AOC-2021-02', () => {
    describe('getPosition', () => {
        it('returns 150 for the test data', () => {
            const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;
            expect(getPosition(input)).toBe(150);
        });
    });

    it('returns 2027977 for the real input', () => {
        const input = readFileSync('2021/02/2021-02-1.txt', {encoding: 'utf8', flag: 'r'});
        expect(getPosition(input)).toBe(2027977);
    });

    describe('getPositionByManual', () => {
        it('returns 900 for the test data', () => {
            const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

            expect(getPositionByManual(input)).toBe(900);
        });

        it('returns 1903644897 for the real input', () => {
            const input = readFileSync('2021/02/2021-02-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(getPositionByManual(input)).toBe(1903644897);
        });
    });
});