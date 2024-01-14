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
    console.log(points);
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
    const cardRepresentations: Record<string, Record<string, string[]>> = {};

    input.split('\n').map(card => {
        const [cardName, allNumbers] = card.split(": ");
        const [winningString, actualString] = allNumbers.split(" |");
        const winning = winningString.split(' ').filter(Boolean);
        const actual = actualString.split(' ').filter(Boolean);
        const number = getCardNumber(cardName);
        if (number) {
            cardRepresentations[number] = {winning, actual};
        }
    });

    const playerCardCount = createNumberObject(Object.entries(cardRepresentations).length);
    for (let i = 1; i <= Object.entries(playerCardCount).length; i++) {
        for (let j = 1; j <= playerCardCount[i.toString()]; j++) {
            getCardWinningNumberCount(cardRepresentations[i.toString()].winning, cardRepresentations[i.toString()].actual);
        }
    }

    // initialCardSet.map(card => getCardWinningNumberCount(card.winning, card.actual));


    return 0;
};