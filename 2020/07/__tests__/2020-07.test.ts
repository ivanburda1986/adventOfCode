import {getBagsNumber} from "../2020-07";
import {readFileSync} from "fs";

describe('AOC-2020-07', () => {
    it('returns 4 as a number of bags that can hold the shiny gold bag - test sample', () => {
        const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

        expect(getBagsNumber(input)).toBe(4);
    });

    it('returns xxx as a number of bags that can hold the shiny gold bag - real input', () => {
        const input = readFileSync('2020/07/2020-07.txt', {encoding: 'utf8', flag: 'r'});
        expect(getBagsNumber(input)).toBe(103);
    });
});