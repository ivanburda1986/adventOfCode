import {readFileSync} from "fs";
import {countIncreases, slidingWindowCountIncreases} from "../2021-01";

describe('AOC-2021-01', () => {
    describe('countIncreases', () => {
        it('returns that number of depth-measurement increases is 7', () => {
            const measurements = `199
200
208
210
200
207
240
269
260
263`;
            expect(countIncreases(measurements)).toBe(7);
        });
        it('returns that number of depth measurement-increases is 1548', () => {
            const measurements = readFileSync('2021/01/2021-01-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(countIncreases(measurements)).toBe(1548);
        });
    });

    describe('slidingWindowCountIncreases', () => {
        it('returns that number of depth-measurement increases is 5', () => {
            const measurements = `199
200
208
210
200
207
240
269
260
263`;
            expect(slidingWindowCountIncreases(measurements)).toBe(5);
        });

        it('returns that number of depth measurement-increases is 1589', () => {
            const measurements = readFileSync('2021/01/2021-01-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(slidingWindowCountIncreases(measurements)).toBe(1589);
        });
    });


});