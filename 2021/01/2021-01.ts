export const countIncreases = (input: string) => {
    const measurements = input.split(`\n`).map((m) => parseInt(m));
    return measurements.reduce((counter, measurement, index) => {
        if (index > 0 && (measurements[index] - measurements[index - 1]) > 0) {
            counter++;
        }
        return counter;
    }, 0);
};

export const slidingWindowCountIncreases = (input: string) => {
    const measurements = input.split(`\n`).map((m) => parseInt(m));
    return measurements.reduce((counter, measurement, index) => {
        const number1 = measurements[index] + measurements[index + 1] + measurements[index + 2];
        const number2 = measurements[index + 1] + measurements[index + 2] + measurements[index + 3];
        if (number2 > number1) {
            counter++;
        }
        return counter;
    }, 0);
};