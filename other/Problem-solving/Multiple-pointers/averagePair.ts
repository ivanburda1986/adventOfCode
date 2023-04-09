// [1, 3, 3, 5, 6, 7, 10, 12, 19]

export const averagePair = (numbers: number[], average: number) => {


    for (let i = 0; i < numbers.length - 1; i++) {
        if ((numbers[i] + numbers[i + 1]) / 2 === average) {
            return true;
        }
    }
    return false;
};