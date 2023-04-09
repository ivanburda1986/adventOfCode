export const averagePair = (numbers: number[], average: number) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        if ((numbers[i] + numbers[i + 1]) / 2 === average) {
            return true;
        }
    }
    return false;
};