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
    console.log(inputFiltered);
    return inputFiltered.reduce((sum, group) => {
        const answerMap: Record<string, number> = defaultDict(0);
        let groupSize = 0;
        group.split('\n')
            .forEach(line => {
                groupSize++;
                line.split('')
                    .forEach(letter => answerMap[letter]++);
            });
        const values = Object.values(answerMap);
        console.log(values);
        console.log(groupSize);
        values.forEach(answerCount => {
            if (answerCount === groupSize) {
                sum = sum + 1;
            }
        });
        return sum;
    }, 0);
};
