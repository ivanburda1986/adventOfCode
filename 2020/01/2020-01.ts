export const getExpenseReportResult = (input: string): number => {
    const numbers = input.split('\n').map(Number);
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === 2020) {
                return numbers[i] * numbers[j];
            }
        }
    }
    return 0;
};

export const getExpenseReportResultPart2 = (input: string): number => {
    const numbers = input.split('\n').map(Number);
    numbers.pop();
    for (let i = 0; i < numbers.length - 2; i++) {
        for (let j = i + 1; j < numbers.length - 1; j++) {
            for (let k = j + 1; k < numbers.length; k++) {
                if (numbers[i] + numbers[j] + numbers[k] === 2020) {
                    return numbers[i] * numbers[j] * numbers[k];
                }
            }
        }
    }
    return 0;
};
