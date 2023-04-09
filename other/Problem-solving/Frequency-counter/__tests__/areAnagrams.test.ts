import {areAnagrams} from "../areAnagrams";

describe('areAnagrams', () => {
    it('returns true', () => {
        expect(areAnagrams('', '')).toBe(true);
    });

    it('returns true', () => {
        expect(areAnagrams('aaz', 'zza')).toBe(false);
    });

    it('returns true', () => {
        expect(areAnagrams('anagram', 'nagaram')).toBe(true);
    });

    it('returns true', () => {
        expect(areAnagrams('rat', 'car')).toBe(false);
    });

    it('returns true', () => {
        expect(areAnagrams('awesome', 'awesom')).toBe(false);
    });

    it('returns true', () => {
        expect(areAnagrams('qwerty', 'qeywrt')).toBe(true);
    });


    it('returns true', () => {
        expect(areAnagrams('texttwisttime', 'timetwisttext')).toBe(true);
    });


    it('returns true', () => {
        expect(areAnagrams('ivanburda', 'adrianvub')).toBe(true);
    });

});