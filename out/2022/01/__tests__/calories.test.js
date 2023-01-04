"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calories_1 = require("../calories");
describe('getIndividualElveLoads', () => {
    it('returns an array of arrays where each represent single elf load', () => {
        const loads = "9195\n" +
            "5496\n" +
            "2732\n" +
            "8364\n" +
            "3703\n" +
            "3199\n" +
            "7177\n" +
            "1659\n" +
            "\n" +
            "7307\n" +
            "2177\n" +
            "1011\n" +
            "8678\n" +
            "14080";
        expect((0, calories_1.getIndividualElveLoads)(loads)).toEqual([[9195,
                5496,
                2732,
                8364,
                3703,
                3199,
                7177,
                1659], [7307,
                2177,
                1011,
                8678,
                14080]]);
    });
});
