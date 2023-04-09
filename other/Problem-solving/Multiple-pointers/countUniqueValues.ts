export const countUniqueValues = (numbers: number[]): number => {
    let uniqueValues = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i + 1]) {
            uniqueValues += 1;
        }
    }
    return uniqueValues;
};