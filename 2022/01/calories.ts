export const getIndividualElveLoads = (allLoadsCrude: string): number[][] => {
    const result: number[][] = [];
    let temp: number[] = [];

    for (const element of allLoadsCrude.split('\n')) {
        if (element === '') {
            result.push(temp);
            temp = [];
        } else {
            temp.push(Number(element));
        }
    }
    result.push(temp);
    return result;
};

export const findElfWithHighestLoad = (allLoads: number[][]): number => {
    let highestLoadSum = -Infinity;

    for (const array of allLoads) {
        const sum = array.reduce((a, b) => a + b, 0);
        if (sum > highestLoadSum) {
            highestLoadSum = sum;
        }
    }

    return highestLoadSum;
};

export const findTopThreeElvesWithHighestLoad = (allLoads: number[][]): number => {
    const allLoadsTotals: number[] = [];

    for (const array of allLoads) {
        const sum = array.reduce((a, b) => a + b, 0);
        allLoadsTotals.push(sum);
    }
    allLoadsTotals.sort((a: number, b: number) => b - a);
    return allLoadsTotals.splice(0, 3).reduce((a, b) => a + b);
};


