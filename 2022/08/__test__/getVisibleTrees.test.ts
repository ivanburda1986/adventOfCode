import {getForestCenter, getVisibleTrees, isTreeVisible} from "../getVisibleTrees";
import {readFileSync} from "fs";
import exp from "constants";

describe('Advent of code 2022, day 8', () => {
    describe('getVisibleTrees', () => {
        const forest = readFileSync('2022/08/exampleTrees.txt', {
            encoding: 'utf8',
            flag: 'r'
        });
        expect(getVisibleTrees(forest)).toBe(1);
    });

    describe('getForestCenter', () => {
        it('returns ', () => {
            const forest = readFileSync('2022/08/exampleTrees.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getForestCenter(forest)).toEqual([1]);
        });
    });

    describe('isTreeVisible', () => {
        it('returns true when tree is visible', () => {
            const forest = readFileSync('2022/08/exampleTrees.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(isTreeVisible(forest, '2', '0')).toBe(false);
        });
    });

});