import {groupMarketsDepartment} from "./perpetualSavingBond";

describe('perpetualSavingBond', () => {
    it('returns it requires 10 days to reach total bond cap of 100 EUR', () => {
        expect(groupMarketsDepartment(100)).toBe(10);
    });
    it('returns it requires 11 days to reach total bond cap of 130 EUR', () => {
        expect(groupMarketsDepartment(130)).toBe(11);
    });
    it('returns it requires 12 days to reach total bond cap of 140 EUR', () => {
        expect(groupMarketsDepartment(140)).toBe(12);
    });
    it('returns it requires 13 days to reach total bond cap of 150 EUR', () => {
        expect(groupMarketsDepartment(150)).toBe(13);
    });
    it('returns it requires 14 days to reach total bond cap of 160 EUR', () => {
        expect(groupMarketsDepartment(160)).toBe(14);
    });
});