export const areAnagrams = (word1: string, word2: string): boolean => {
    const word1Chars: Record<string, number> = {};
    const word2Chars: Record<string, number> = {};

    if (word1.length !== word2.length) {
        return false;
    }

    // O(n)
    for (let char of word1) {
        word1Chars[char] = (word1Chars[char] || 0) + 1;
    }

    // O(n)
    for (let char of word2) {
        word2Chars[char] = (word2Chars[char] || 0) + 1;
    }

    //O(n)
    for (let char in word1Chars) {
        if (!(char in word2Chars)) {
            return false;
        }
        if (word1Chars[char] !== word2Chars[char]) {
            return false;
        }
    }

    return true;
};

// 3 O(n) => O(n)