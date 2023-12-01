const wordNumbers: Record<string, number> = {
    one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9
};

const numberWords: Record<number, string> = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
};


export const getCalibrationSum = (input: string) =>
    input.split('\n')
        .map(line => line.replaceAll(/[a-zA-Z]/g, ""))
        .map(numberChunk => numberChunk.split(''))
        .map(arrayOfNumbers => Number([arrayOfNumbers[0], arrayOfNumbers[arrayOfNumbers.length - 1]].join('')))
        .reduce((accumulated, number) => accumulated + number, 0);


export const getCalibrationSum2 = (input: string) => {
    return input.split('\n')
        .map(lineMixed => lineMixed.replaceAll(/[0-9]/g, function (match) {
            return numberWords[Number(match)];
        }))
        .map(lineWordsOnly => {
            console.log(lineWordsOnly);
            const numbers: { locatedNumber: number, at: number }[] = [];

            for (let key in wordNumbers) {
                const dynamicRegexVal = new RegExp(key, "g");
                const numberOccurrenceCount = lineWordsOnly.match(dynamicRegexVal)?.length;
                if (numberOccurrenceCount) {
                    numbers.push({locatedNumber: wordNumbers[key], at: lineWordsOnly.indexOf(key)});
                }
                if (numberOccurrenceCount && numberOccurrenceCount > 1) {
                    numbers.push({locatedNumber: wordNumbers[key], at: lineWordsOnly.lastIndexOf(key)});
                }
            }
            return numbers
                .sort((a, b) => a.at - b.at)
                .map(numberAtPosition => numberAtPosition.locatedNumber);
        })
        .map(arrayOfNumbers => Number([arrayOfNumbers[0], arrayOfNumbers[arrayOfNumbers.length - 1]].join('')))
        .reduce((accumulated, number) => accumulated + number, 0);
};