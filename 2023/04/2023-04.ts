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