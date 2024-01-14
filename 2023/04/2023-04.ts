export const getCardWinningPoints = (input: string) => {
    let total = 0;
    input.split('\n').map(card => {
        const [, allNumbers] = card.split(": ");
        const [winningString, actualString] = allNumbers.split(" |");
        const winning = winningString.split(' ').filter(Boolean);
        const actual = actualString.split(' ').filter(Boolean);
        let points = 0;
        for (let i = 0; i < actual.length; i++) {
            if (winning.includes(actual[i])) {
                if (points === 0) {
                    points = 1;
                } else {
                    points = points * 2;
                }
            }
        }
        total = total + points;
    });
    return total;
};

/*
Create an object with card representations
Create an array representing what cards the user has
Iterate over the card array and for each:
-evaluate winning numbers
-push in numbers for next card copies depending on the winning number count
-sort from lowest to highest

Return card array length
 */

const getCardNumber = (cardName: string): string | undefined => {
    const number = cardName.match(/\d+/);
    if (!number) {
        return undefined;
    }
    return number[0];
};

const getCardWinningNumberCount = (winning: string[], actual: string[]) => {
    let points = 0;
    for (let i = 0; i < actual.length; i++) {
        if (winning.includes(actual[i])) {
            points++;
        }
    }

    return points;
};

function createNumberObject(n: number) {
    const resultObject: Record<string, number> = {};

    for (let i = 1; i <= n; i++) {
        resultObject[i] = 1;
    }

    return resultObject;
}


export const getCardCount = (input: string): number => {
    const cardRepresentations: { count: number, points: number }[] = [];

    input.split('\n').map(card => {
        const [cardName, allNumbers] = card.split(": ");
        const [winningString, actualString] = allNumbers.split(" |");
        const winning = winningString.split(' ').filter(Boolean);
        const actual = actualString.split(' ').filter(Boolean);
        const number = getCardNumber(cardName);
        if (number) {
            cardRepresentations.push({count: 1, points: getCardWinningNumberCount(winning, actual)});
        }
    });
    // console.log(cardRepresentations);
    for (let i = 0; i < cardRepresentations.length; i++) {
        // console.log();
        for (let j = 1; j <= cardRepresentations[i].count; j++) {
            // console.log(cardRepresentations[i].count);
            for (let k = 1; k <= cardRepresentations[i].points; k++) {
                cardRepresentations[i + k].count += 1;
            }

        }
    }
    const result = cardRepresentations.reduce((a, c) => a + c.count, 0);
    console.log(result);
    return result;
};