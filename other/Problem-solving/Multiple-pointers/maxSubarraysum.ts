export const maxSubarraysum = (numbers: number[], consecutive: number): number | null => {
    if (numbers.length < consecutive) {
        return null;
    }
    let max = 0;
    let tempMax = 0;

    for (let i = 0; i < consecutive; i++) {
        max += numbers[i];
    }
    tempMax = max;
    for (let i = consecutive; i < numbers.length; i++) {
        tempMax = tempMax - numbers[i - consecutive] + numbers[i];
        max = Math.max(max, tempMax);
    }
    return max;
};