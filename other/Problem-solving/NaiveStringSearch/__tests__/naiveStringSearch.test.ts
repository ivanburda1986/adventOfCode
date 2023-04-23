import {naiveStringSearch} from "../naiveStringSearch";

describe('naiveStringSearch', () => {
    it('returns that the searched string is included 2 in the full string', () => {
        expect((naiveStringSearch('ivan', 'daliivanderbergeivan'))).toBe(2);
    });
    it('returns that the searched string is included 1 in the full string', () => {
        expect((naiveStringSearch('ivan', 'burdaivan'))).toBe(1);
    });
    it('returns that the searched string is included 0 in the full string', () => {
        expect((naiveStringSearch('ivan', 'gardenOfEden'))).toBe(0);
    });
});


