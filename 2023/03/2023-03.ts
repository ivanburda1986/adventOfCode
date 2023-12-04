function findNumberSubstrings(inputString: string): string[] {
    const pattern: RegExp = /\d+/g;
    return inputString.match(pattern) || [];
}

function findSubstringRange(inputString: string, substring: string): { start: number, end: number } | null {
    const targetString = substring.toString();
    const regex = new RegExp(`\\b${substring}\\b`, 'g');

    const match = regex.exec(inputString);

    if (match) {
        const startIndex = match.index;
        const endIndex = startIndex + targetString.length - 1;
        return {start: startIndex, end: endIndex};
    }

    return null;
}

function hasSpecialCharacters(text: string) {
    const pattern: RegExp = /[^a-zA-Z0-9.]/g;
    return pattern.test(text);
}

type adjType = 'TOP' | 'SIDE' | 'BOTTOM'

function printPart(matrix: string[], row: number, rowCount: number, numberChunkRange: {
    start: number,
    end: number
}, adjType: adjType) {
    if (adjType === 'TOP') {
        if (row < rowCount - 1) {
            console.log(`${matrix[row - 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}\n${matrix[row].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}\n${matrix[row + 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}`);
        } else {
            console.log(`${matrix[row - 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}\n${matrix[row].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}`);
        }
    }
    if (adjType === 'SIDE') {
        console.log(`${matrix[row - 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}\n${matrix[row].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}\n${matrix[row + 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}`);

    }

    if (adjType === 'BOTTOM') {
        if (row > 0) {
            console.log(`${matrix[row - 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}\n${matrix[row].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}\n${matrix[row + 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}`);
        } else {
            console.log(`${matrix[row].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}\n${matrix[row + 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2)}`);

        }
    }
}


export const getPartSum = (input: string) => {
    const matrix = input.split('\n');
    const rowCount = matrix.length;
    const aloneParts: string[] = [];
    const partNumbers: string[] = [];

    for (let row = 0; row < rowCount; row++) {
        const numberChunks = findNumberSubstrings(matrix[row]);
        if (numberChunks.length) {
            numberChunks.forEach(chunk => {
                const numberChunkRange = findSubstringRange(matrix[row], chunk);
                if (numberChunkRange) {
                    if (row > 0) {
                        const hasTopAdjacency = hasSpecialCharacters(matrix[row - 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2));
                        if (hasTopAdjacency) {
                            partNumbers.push(chunk);
                            printPart(matrix, row, rowCount, numberChunkRange, "TOP");
                            return;
                        }
                    }

                    const hasSideAdjacency = hasSpecialCharacters(matrix[row].substring(numberChunkRange.start - 1, numberChunkRange.end + 2));
                    if (hasSideAdjacency) {
                        partNumbers.push(chunk);
                        printPart(matrix, row, rowCount, numberChunkRange, "SIDE");
                        return;
                    }

                    if (row < rowCount - 1) {
                        const hasBottomAdjacency = hasSpecialCharacters(matrix[row + 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 2));
                        if (hasBottomAdjacency) {
                            printPart(matrix, row, rowCount, numberChunkRange, "BOTTOM");
                            partNumbers.push(chunk);
                            return;
                        }
                    }

                    if (row > 0) {
                        printPart(matrix, row, rowCount, numberChunkRange, "TOP");
                    }

                    if (row < rowCount - 1) {
                        printPart(matrix, row, rowCount, numberChunkRange, "BOTTOM");
                    }

                    aloneParts.push(chunk);
                    return;
                }
            });
        }
    }

    return partNumbers.map(number => parseInt(number)).reduce((a, c) => a + c, 0);
};