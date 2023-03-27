import {countNiceStrings, countNiceStringsVer2, isStringNice, isStringNiceVer2} from "../2015-05";
import {readFileSync} from "fs";

describe('AOC 2015-05', () => {
    describe('countNiceStrings', () => {
        it('returns 236 as the total count of string which are nice', () => {
            const strings = readFileSync('2015/05/2015-05-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(countNiceStrings(strings)).toBe(236);
        });
    });

    describe('isStringNice', () => {
        it('returns true for ugknbfddgicrmopn', () => {
            expect(isStringNice('ugknbfddgicrmopn')).toBe(true);
        });

        it('returns true for aaa', () => {
            expect(isStringNice('aaa')).toBe(true);
        });

        it('returns false for jchzalrnumimnmhp', () => {
            expect(isStringNice('jchzalrnumimnmhp')).toBe(false);
        });

        it('returns false for haegwjzuvuyypxyu', () => {
            expect(isStringNice('haegwjzuvuyypxyu')).toBe(false);
        });

        it('returns false for dvszwmarrgswjxmb', () => {
            expect(isStringNice('dvszwmarrgswjxmb')).toBe(false);
        });

    });

    describe('isStringNiceVer2', () => {
        it('returns true for qjhvhtzxzqqjkmpb', () => {
            expect(isStringNiceVer2('qjhvhtzxzqqjkmpb')).toBe(true);
        });

        it('returns true for xxyxx', () => {
            expect(isStringNiceVer2('xxyxx')).toBe(true);


        });

        it('returns false for uurcxstgmygtbstg', () => {
            expect(isStringNiceVer2('uurcxstgmygtbstg')).toBe(false);

        });

        it('returns false for ieodomkazucvgmuy', () => {
            expect(isStringNiceVer2('ieodomkazucvgmuy')).toBe(false);
        });
    });

    describe('countNiceStringsVer2', () => {
        it('returns 51 as the total count of string which are nice', () => {
            const strings = readFileSync('2015/05/2015-05-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(countNiceStringsVer2(strings)).toBe(51);
        });
    });
});