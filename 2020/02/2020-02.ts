export const validPasswordsNumber = (input: string): number => {
    const passRules = input.split('\n').filter(Boolean).map(inputLine => inputLine.match(/(\d+)-(\d+) (\w): (\w+)/)).map(rule => ({
        from: Number(rule![1]),
        to: Number(rule![2]),
        char: rule![3],
        pass: rule![4]
    }));

    let validPasswords = 0;

    passRules.forEach(({from, to, char, pass}) => {
        let counter = 0;
        for (let i = 0; i < pass.length; i++) {
            if (pass[i] === char) {
                counter++;
            }
        }
        if (counter >= from && counter <= to) {
            validPasswords++;
        }
    });

    return validPasswords;
};

export const validPasswordsNumberApproach2 = (input: string): number => {
    const passRules = input.split('\n').filter(Boolean).map(inputLine => inputLine.match(/(\d+)-(\d+) (\w): (\w+)/)).map(rule => ({
        pos1: Number(rule![1]),
        pos2: Number(rule![2]),
        char: rule![3],
        pass: rule![4]
    }));

    let validPasswords = 0;

    passRules.forEach(({pos1, pos2, char, pass}) => {
        let counter = 0;
        if (pass[pos1 - 1] === char) {
            counter++;
        }

        if (pass[pos2 - 1] === char) {
            counter++;
        }

        if (counter === 1) {
            validPasswords++;
        }
    });

    return validPasswords;
};
