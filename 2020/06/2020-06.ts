import {defaultDict} from "../../utils/defaultDictionary";

export const getCountSumOfUniqueYesAnswers = (input: string) => {
    return input.split('\n\n')
        .map(group => group.replaceAll('\n', ''))
        .reduce((result, group) => {
            return result + new Set(group.split('')).size;
        }, 0);
};

export const getCountSumOfSharedYesAnswer = (input: string) => {
    const inputFiltered = input.split('\n\n');
    return inputFiltered.reduce((sum, group) => {
        const answerMap: Record<string, number> = defaultDict(0);
        let groupSize = 0;
        group.split('\n')
            .forEach((line, index) => {
                if (line === '') {
                    return;
                }

                groupSize++;
                line.split('')
                    .forEach(letter => {
                        answerMap[letter]++;
                    });
            });
        const keys = Object.keys(answerMap);
        const values = Object.values(answerMap);
        const entries = Object.entries(answerMap);

        values.forEach(answerCount => {
            if (answerCount === groupSize) {
                sum = sum + 1;
            }
        });
        return sum;
    }, 0);
};
