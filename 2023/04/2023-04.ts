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


export const getCardCount = (input: string): number => {
    const cards: Record<string, Record<string, string>> = {};

    input.split('\n').map(card => {
        const [cardName, allNumbers] = card.split(": ");
        const [winningString, actualString] = allNumbers.split(" |");
        const winning = winningString.split(' ').filter(Boolean);
        const actual = actualString.split(' ').filter(Boolean);
        cards[cardName] = {winning, actual};
    });
    return 0;
};