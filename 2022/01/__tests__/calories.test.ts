import {findElfWithHighestLoad, findTopThreeElvesWithHighestLoad, getIndividualElveLoads} from "../calories";
import {readFileSync} from "fs";

describe('Advent of code 2022 day1', () => {
    describe('findElfWithHighestLoad', () => {
        it('returns the the calories count of the elf with highest load of calories', () => {
            const load = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
            const actual = findElfWithHighestLoad(getIndividualElveLoads(load));
            expect(actual).toBe(24000);
        });

        it('returns the the calories count of the elf with highest load of calories based on the real data input', () => {
            const load = readFileSync('2022/01/load.txt', {encoding: 'utf8', flag: 'r'});
            const actual = findElfWithHighestLoad(getIndividualElveLoads(load));
            expect(actual).toBe(69281);
        });
    });

    describe('findTopThreeElvesWithHighestLoad', () => {
        it('returns the the calories count of the 3 elves with highest load of calories', () => {
            const load = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
            const actual = findTopThreeElvesWithHighestLoad(getIndividualElveLoads(load));
            expect(actual).toBe(45000);
        });

        it('returns the the calories count of the 3 elves with highest load of calories based on the real data input', () => {
            const load = readFileSync('2022/01/load.txt', {encoding: 'utf8', flag: 'r'});
            const actual = findTopThreeElvesWithHighestLoad(getIndividualElveLoads(load));
            expect(actual).toBe(201524);
        });
    });
});


