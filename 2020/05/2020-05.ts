export const getRowNumber = (input: string): number => {
    let numbers = Array.from(Array(128).keys());
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "F") {
            numbers = numbers.slice(0, (numbers.length / 2));
        } else {
            numbers = numbers.slice((numbers.length / 2));

        }
    }

    return numbers[0];
};

export const getColumnNumber = (input: string): number => {
    let numbers = Array.from(Array(8).keys());
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "L") {
            numbers = numbers.slice(0, (numbers.length / 2));
        } else {
            numbers = numbers.slice((numbers.length / 2));

        }
    }

    return numbers[0];
};

export const getSeatId = (input: string): number => {
    const rowNumber = getRowNumber(input.substring(0, 7));
    const columnNumber = getColumnNumber(input.substring(7));
    return (rowNumber * 8) + columnNumber;
};

export const getHighestSeatId = (input: string) => {
    return Math.max(...input.split('\n').map(passport => getSeatId(passport)));
};


export const getMySeatId = (input: string) => {
    const allSeatIdsSorted = input.split('\n')
        .map(passport => getSeatId(passport))
        .sort((a, b) => a - b);
    const allSeatIdsWithRemovedFirstAndLast = allSeatIdsSorted.slice(1, -1);


    for (let i = 0; i < allSeatIdsWithRemovedFirstAndLast.length; i++) {
        if (allSeatIdsWithRemovedFirstAndLast[i + 1] - allSeatIdsWithRemovedFirstAndLast[i] > 1) {
            return (allSeatIdsWithRemovedFirstAndLast[i] + 1);
        }
    }
};
