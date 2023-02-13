import {getDirectoriesSizeSum, getDirectoryToEmptyRequiredSpace} from "../directoriesSize";
import {readFileSync} from "fs";


describe('Advent of code 2022 day 7', () => {
    describe('getDirectoriesSizeSum', () => {
        it('returns total size of all directories the size of which is at most 100 000 for the example terminal output', () => {
            const terminalOutputExample = readFileSync('2022/07/terminalOutputExample.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getDirectoriesSizeSum(terminalOutputExample)).toBe(95437);
        });

        it('returns total size of all directories the size of which is at most 100 000 for the real terminal output', () => {
            const terminalOutputReal = readFileSync('2022/07/terminalOutputReal.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getDirectoriesSizeSum(terminalOutputReal)).toBe(1477771);
        });
    });

    describe('getDirectoryToEmptyRequiredSpace', () => {
        it('returns the size of the smallest directory to delete to free up required space for update - example data', () => {
            const terminalOutputExample = readFileSync('2022/07/terminalOutputExample.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getDirectoryToEmptyRequiredSpace(terminalOutputExample)).toBe(24933642);
        });

        it('returns the size of the smallest directory to delete to free up required space for update - real data', () => {
            const terminalOutputReal = readFileSync('2022/07/terminalOutputReal.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getDirectoryToEmptyRequiredSpace(terminalOutputReal)).toBe(3579501);
        });
    });
});