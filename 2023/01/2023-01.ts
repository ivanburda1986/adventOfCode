const wordNumbers = {
    one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9
};


export const getCalibrationSum = (input: string) =>
    input.split('\n')
        .map(line => line.replaceAll(/[a-zA-Z]/g, ""))
        .map(numberChunk => numberChunk.split(''))
        .map(arrayOfNumbers => Number([arrayOfNumbers[0], arrayOfNumbers[arrayOfNumbers.length - 1]].join('')))
        .reduce((accumulated, number) => accumulated + number, 0);