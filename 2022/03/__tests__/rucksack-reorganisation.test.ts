import {getBadges, getSharedItem, getPrioritySum} from "../rucksack-reorganisation";
import {readFileSync} from "fs";

describe('Advent of code 2022 day 3', () => {
    describe('getRucksackUniqueItem', () => {
        it('returns the item included in both compartments', () => {
            expect(getSharedItem('vJrwpWtwJgWrhcsFMMfFFhFp')).toBe('p');
            expect(getSharedItem('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL')).toBe('L');
            expect(getSharedItem('PmmdzqPrVvPwwTWBwg')).toBe('P');
            expect(getSharedItem('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn')).toBe('v');
            expect(getSharedItem('ttgJtRGJQctTZtZT')).toBe('t');
            expect(getSharedItem('CrZsJsPPZsGzwwsLwLmpwMDw')).toBe('s');
        });

    });
    describe('get the sum of priorities', () => {
        it('returns the sum of priorities for all rucksack compartment-shared items based on example data', () => {
            const allRucksacks = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
            const actual = getPrioritySum(allRucksacks);
            expect(actual).toBe(157);
        });
        it('returns the sum of priorities for all rucksack compartment-shared items based on the real data', () => {
            const allRucksacks = readFileSync('2022/03/rucksacks.txt', {encoding: 'utf8', flag: 'r'});
            const actual = getPrioritySum(allRucksacks);
            expect(actual).toBe(7872);
        });

    });

    describe('getBadges', () => {
        it('returns sum of all priorities for all badges for example data', () => {
            const allRucksacks = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
            const actual = getBadges(allRucksacks);
            expect(actual).toBe(70);
        });
        it('returns sum of all priorities for all badges for the real data', () => {
            const allRucksacks = readFileSync('2022/03/rucksacks.txt', {encoding: 'utf8', flag: 'r'});
            const actual = getBadges(allRucksacks);
            expect(actual).toBe(2497);
        });
    });
});