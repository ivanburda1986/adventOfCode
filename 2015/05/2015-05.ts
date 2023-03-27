const VOWELS = ["a", "e", "i", "o", "u"];

export const isStringNice = (input: string): boolean => {
    const prohibitedStrings = ['ab', 'cd', 'pq', 'xy'];
    let containsProhibited = false;
    let doubleLetter = false;
    const containedVowels: Record<string, number> = {};

    prohibitedStrings.forEach((prohibited) => {
        if (input.includes(prohibited)) {
            return containsProhibited = true;
        }
    });

    if (containsProhibited) {
        return false;
    }


    const inputChars: string[] = input.split((""));
    for (let i = 0; i < inputChars.length; i++) {
        if (doubleLetter) {
            break;
        }
        if (inputChars[i] === inputChars[i + 1]) {
            doubleLetter = true;
            break;
        }
    }

    if (!doubleLetter) {
        return false;
    }

    inputChars.forEach((char) => {
        if (VOWELS.includes(char)) {
            if (containedVowels[char]) {
                containedVowels[char] += 1;
            } else {
                containedVowels[char] = 1;
            }
        }
    });

    return Object.values(containedVowels).reduce((total, vovelCounts) => total + vovelCounts, 0) >= 3;
};


export const countNiceStrings = (input: string): number => {
    return input.split(`\n`).reduce((total: number, inputString: string) => {
        if (isStringNice(inputString)) {
            total = total + 1;
        } else {
            total = total;
        }
        return total;
    }, 0);
};

export const isStringNiceVer2 = (input: string): boolean => {
    const letters = input.split("");
    let inBetweenRepetition = false;
    let doublePairOccurrence = false;
    const pairDictionary: Record<string, number> = {};

    //O(n)
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i + 2]) {
            inBetweenRepetition = true;
        }

        //O(n)
        const currentPair = `${letters[i]}${letters[i + 1]}`;
        if (typeof pairDictionary[currentPair] !== 'undefined') {
            if (pairDictionary[currentPair] !== i - 1) {
                doublePairOccurrence = true;
            }

        } else {
            pairDictionary[currentPair] = i;
        }
    }

    return inBetweenRepetition && doublePairOccurrence;
};


export const countNiceStringsVer2 = (input: string): number => {
    return input.split(`\n`).reduce((total: number, inputString: string) => {
        if (isStringNiceVer2(inputString)) {
            total = total + 1;
        } else {
            total = total;
        }
        return total;
    }, 0);
};