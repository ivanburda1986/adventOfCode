function findNumberSubstrings(inputString: string): string[] {
    const pattern: RegExp = /\d+/g;
    return inputString.match(pattern) || [];
}

function findSubstringRange(inputString: string, substring: string): { start: number, end: number } | null {
    const startIndex = inputString.indexOf(substring);

    if (startIndex !== -1) {
        const endIndex = startIndex + substring.length - 1;
        return {start: startIndex, end: endIndex};
    } else {
        console.log('!!!!!!!!!!!!!!!!!!!!!');
        return null;
    }
}

function isSpecialCharInRange(inputString: string, start: number, end: number): boolean {
    const pattern: RegExp = /[^a-zA-Z0-9.]/g;
    for (let i = start; i <= end; i++) {
        const char = inputString.charAt(i) ?? '.';
        if (pattern.test(char)) {
            return true;
        }
    }
    return false;
}

function isSpecialCharAtPos(inputString: string, position: number): boolean {
    const pattern: RegExp = /[^a-zA-Z0-9.]/g;
    return pattern.test(inputString.charAt(position));
}

export const getPartSum = (input: string) => {
    const matrix = input.split('\n');
    const rowCount = matrix.length;

    const aloneParts: string[] = [];
    const partNumbers: string[] = [];
    const allNumbers = findNumberSubstrings(input);

    for (let row = 1; row < rowCount; row++) {
        const numberChunks = findNumberSubstrings(matrix[row]);
        if (numberChunks.length) {
            numberChunks.forEach(chunk => {
                const numberChunkRange = findSubstringRange(matrix[row], chunk);

                if (numberChunkRange) {
                    if (
                        !isSpecialCharInRange(matrix[row - 1], numberChunkRange.start - 1, numberChunkRange.end + 2)
                        && !isSpecialCharInRange(matrix[row], numberChunkRange.start - 1, numberChunkRange.end + 1)
                        && !isSpecialCharInRange(matrix[row + 1], numberChunkRange.start - 1, numberChunkRange.end + 2)
                    ) {

                        aloneParts.push(chunk);
                    } else {
                        console.log(`'NOT ALONE'\n${matrix[row - 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 1)}\n${matrix[row].charAt(numberChunkRange.start - 1) + chunk + matrix[row].charAt(numberChunkRange.end + 1)}\n${matrix[row + 1].substring(numberChunkRange.start - 1, numberChunkRange.end + 1)}`);
                        partNumbers.push(chunk);
                    }
                }
            });
        }


    }

    return partNumbers.map(number => Number(number)).reduce((a, c) => a + c, 0);
};