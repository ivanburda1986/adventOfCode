function getAsteriskPositions(inputString: string): number[] {
    const asteriskPositions = [];

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '*') {
            asteriskPositions.push(i);
        }
    }
    return asteriskPositions;
}

function extractVerticalAdjacentNumbers(inputString: string, position: number) {
    function findWholeNumber(startIndex: number, endIndex: number) {
        while (startIndex >= 0 && /\d/.test(inputString.charAt(startIndex))) {
            startIndex--;
        }

        while (endIndex < inputString.length && /\d/.test(inputString.charAt(endIndex))) {
            endIndex++;
        }

        return inputString.slice(startIndex + 1, endIndex);
    }

    const charAtIndex = inputString.charAt(position);

    let result: string[] = [];

    if (/\d/.test(charAtIndex)) {
        const wholeNumber = findWholeNumber(position, position);
        if (!result.includes(wholeNumber)) {
            result.push(wholeNumber);
        }
    }

    if (position - 1 >= 0 && /\d/.test(inputString.charAt(position - 1))) {
        const wholeNumber = findWholeNumber(position - 1, position - 1);
        if (!result.includes(wholeNumber)) {
            result.push(wholeNumber);
        }
    }

    if (position + 1 < inputString.length && /\d/.test(inputString.charAt(position + 1))) {
        const wholeNumber = findWholeNumber(position + 1, position + 1);
        if (!result.includes(wholeNumber)) {
            result.push(wholeNumber);
        }
    }

    return result.length > 0 ? result : null;
}

function extractHorizontalAdjacentNumbers(inputString: string, position: number) {
    const beforeAsterisk = getWholeNumberBeforeIndex(inputString, position);
    const afterAsterisk = getWholeNumberAfterIndex(inputString, position);

    if (beforeAsterisk || afterAsterisk) {
        return [beforeAsterisk, afterAsterisk].filter(Boolean);
    }

    return [];
}

function getWholeNumberBeforeIndex(inputString: string, index: number) {
    let startIndex = index - 1;
    while (startIndex >= 0 && /\d/.test(inputString.charAt(startIndex))) {
        startIndex--;
    }

    startIndex++;

    return inputString.slice(startIndex, index);
}

function getWholeNumberAfterIndex(inputString: string, index: number) {
    let endIndex = index + 1;
    while (endIndex < inputString.length && /\d/.test(inputString.charAt(endIndex))) {
        endIndex++;
    }

    return inputString.slice(index + 1, endIndex);
}

export const getGearMultiplicationSum = (input: string) => {
    const matrix = input.split('\n');
    const rowCount = matrix.length;
    const asterisksWithAdjacentNumbers: string[] = [];
    const gearMultiplications: number[] = [];

    for (let row = 0; row < rowCount; row++) {
        const asteriskPositions = getAsteriskPositions(matrix[row]) ?? [];
        if (asteriskPositions.length) {
            asteriskPositions.forEach(position => {
                const adjacentNumbers: number[] = [];
                if (row > 0) {
                    const topAdjacentNumber = extractVerticalAdjacentNumbers(matrix[row - 1], position);

                    if (topAdjacentNumber?.length) {
                        topAdjacentNumber.forEach(n => adjacentNumbers.push(Number(n)));
                    }

                }

                const sideAdjacentNumber = extractHorizontalAdjacentNumbers(matrix[row], position);
                if (sideAdjacentNumber?.length) {
                    sideAdjacentNumber.forEach(n => adjacentNumbers.push(Number(n)));
                }

                if (row < rowCount - 1) {
                    const bottomAdjacentNumber = extractVerticalAdjacentNumbers(matrix[row + 1], position);

                    if (bottomAdjacentNumber?.length) {
                        bottomAdjacentNumber.forEach(n => adjacentNumbers.push(Number(n)));
                    }
                }

                if (adjacentNumbers.length === 2) {
                    gearMultiplications.push(adjacentNumbers[0] * adjacentNumbers[1]);
                }


            });
        }
    }

    return gearMultiplications.map(number => number).reduce((a, c) => a + c, 0);
};