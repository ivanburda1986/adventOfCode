import {CraneVersion, getStackTopCrates} from "../getStackTopCrates";
import {readFileSync} from "fs";
import {exampleStacks} from '../exampleStacks';
import {realInputStacks} from '../realInputStacks';

describe('Advent of code day 5', () => {
    describe('CrateMover 9000', () => {
        it('returns getStackTopCrates for example test data', () => {
            const exampleInstructions = readFileSync('2022/05/exampleInstructions.txt', {encoding: 'utf8', flag: 'r'});
            expect(getStackTopCrates(exampleInstructions, exampleStacks, CraneVersion.Crane9000)).toBe('CMZ');
        });

        it('returns getStackTopCrates for real input', () => {
            const realInputInstructions = readFileSync('2022/05/realInputInstructions.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStackTopCrates(realInputInstructions, realInputStacks, CraneVersion.Crane9000)).toBe('FZCMJCRHZ');
        });
    });

    describe('CrateMover 9001', () => {
        it('returns getStackTopCrates for example test data', () => {
            const exampleInstructions = readFileSync('2022/05/exampleInstructions.txt', {encoding: 'utf8', flag: 'r'});
            expect(getStackTopCrates(exampleInstructions, exampleStacks, CraneVersion.Crane9001)).toBe('MCD');
        });

        it('returns getStackTopCrates for real input', () => {
            const realInputInstructions = readFileSync('2022/05/realInputInstructions.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStackTopCrates(realInputInstructions, realInputStacks, CraneVersion.Crane9001)).toBe('JSDHQMZGF');
        });
    });
});