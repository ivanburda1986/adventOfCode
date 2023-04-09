import {
    calculateDaysPerpetualBondsNeedToReachCap,
    getNumberOfDays,
    initialIssuedBondsRecord,
    transformRawRecord,
} from "./perpetualSavingBond";

describe("getNumberOfDays", () => {
    it('returns 6 for "Bond PSB#00000001 sold 6 days ago"', () => {
        expect(getNumberOfDays("Bond PSB#00000001 sold 6 days ago")).toBe("6");
    });
});

describe("perpetualSavingBond", () => {
    it("returns it requires 10 days to reach total bond cap of 100 EUR", () => {
        expect(
            calculateDaysPerpetualBondsNeedToReachCap(100, initialIssuedBondsRecord)
        ).toBe(10);
    });
    it("returns it requires 11 days to reach total bond cap of 130 EUR", () => {
        expect(
            calculateDaysPerpetualBondsNeedToReachCap(130, initialIssuedBondsRecord)
        ).toBe(11);
    });
    it("returns it requires 12 days to reach total bond cap of 140 EUR", () => {
        expect(
            calculateDaysPerpetualBondsNeedToReachCap(140, initialIssuedBondsRecord)
        ).toBe(12);
    });
    it("returns it requires 13 days to reach total bond cap of 150 EUR", () => {
        expect(
            calculateDaysPerpetualBondsNeedToReachCap(150, initialIssuedBondsRecord)
        ).toBe(13);
    });
    it("returns it requires 14 days to reach total bond cap of 160 EUR", () => {
        expect(
            calculateDaysPerpetualBondsNeedToReachCap(160, initialIssuedBondsRecord)
        ).toBe(14);
    });
});

describe("transformRawRecord", () => {
    it("returns a perpetual bond count by maturity in the format needed for further processing ", () => {
        const rawRecord =
            "Bond PSB#00000001 sold 6 days ago\n" +
            "Bond PSB#00000008 sold 2 days ago\n" +
            "Bond PSB#00000003 sold 5 days ago\n" +
            "Bond PSB#00000002 sold 6 days ago\n" +
            "Bond PSB#00000004 sold 5 days ago\n" +
            "Bond PSB#00000006 sold 4 days ago\n" +
            "Bond PSB#00000007 sold 3 days ago\n" +
            "Bond PSB#00000005 sold 5 days ago";

        expect(transformRawRecord(rawRecord)).toEqual([
            {maturity: 6, bonds: 2},
            {maturity: 5, bonds: 3},
            {maturity: 4, bonds: 1},
            {maturity: 3, bonds: 1},
            {maturity: 2, bonds: 1},
        ]);
    });
});
