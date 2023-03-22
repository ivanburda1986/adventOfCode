import {
    getPresentPaperRequirement,
    getPresentRibbonRequirements,
    getTotalPaperRequirements,
    getTotalRibbonRequirements
} from "../2015-02";
import {readFileSync} from "fs";


describe('AOC 2015-02', () => {
    describe('getTotalPaperRequirements', () => {
        it('returns total requirement of paper for wrapping or presents', () => {
            const input = readFileSync('2015/02/2015-02-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(getTotalPaperRequirements(input)).toBe(1606483);
        });
    });

    describe('getTotalRibbonRequirements', () => {
        it('returns total requirement of ribbon for wrapping or presents', () => {
            const input = readFileSync('2015/02/2015-02-1.txt', {encoding: 'utf8', flag: 'r'});
            expect(getTotalRibbonRequirements(input)).toBe(3842356);
        });
    });


    describe('getPresentPaperRequirement', () => {
        it('returns 58 sq ft for a present with dimension of 2x3x4 ft', () => {
            expect(getPresentPaperRequirement("2x3x4")).toBe(58);
        });

        it('returns 43 sq ft for a present with dimension of 1x1x10 ft', () => {
            expect(getPresentPaperRequirement("1x1x10")).toBe(43);
        });
    });

    describe('getPresentRibbonRequirements', () => {
        it('returns 34 ft for a present with dimension of 2x3x4 ft ', () => {
            expect(getPresentRibbonRequirements("2x3x4")).toBe(34);
        });

        it('returns 14 ft for a present with dimension of 1x1x10 ft ', () => {
            expect(getPresentRibbonRequirements("1x1x10")).toBe(14);
        });
    });
});



