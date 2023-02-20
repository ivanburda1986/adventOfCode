import {readFileSync} from "fs";
import {getScenicScore, getVisibleTrees} from "../getVisibleTrees";

describe('Advent of code 2022, day 8', () => {
    describe('getVisibleTrees', () => {
        const exampleForest = readFileSync('2022/08/exampleTrees.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getVisibleTrees(exampleForest)).toBe(21);
    });

    describe('getVisibleTrees2', () => {
        const realForest = readFileSync('2022/08/realTrees.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getVisibleTrees(realForest)).toBe(1835);
    });

    describe('getScenicScore', () => {
        it('returns ', () => {
            const realForest = readFileSync('2022/08/realTrees.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getScenicScore(realForest)).toBe(263670);
        });
    });
});