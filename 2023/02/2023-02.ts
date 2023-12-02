export const sumImpossibleGameIds = (i: string) => {
    return i.split('Game ')
        .map(game => game.substring(game.indexOf(":") + 2))
        .map(game => game.replaceAll('\n', ""))
        .filter(Boolean)
        .map(game => game.replaceAll(';', ","))
        .map(game => game.split(', '))
        .map(game => game.filter(game => {
            const color = game.substring(game.indexOf(" ")).trim();

            const count = parseInt(game.replace(/\D/g, ''), 10);

            if (color === 'red' && count > 12) {
                return true;
            }
            if (color === 'green' && count > 13) {
                return true;
            }
            return color === 'blue' && count > 14;
        }))
        .reduce((accumulated, current, currentIndex) => !current.length ? accumulated + currentIndex + 1 : accumulated, 0);
};

export const powerOfMinCubeCounts = (i: string) => {
    const games = i.split('Game ')
        .map(game => game.substring(game.indexOf(":") + 2))
        .map(game => game.replaceAll('\n', ""))
        .filter(Boolean)
        .map(game => game.replaceAll(';', ","))
        .map(game => game.split(', '))
    ;
    const gamesHighestColorCounts = games.map(game => {
        const colorCounts = new Map();
        game.forEach(pull => {
            const color = pull.substring(pull.indexOf(" ")).trim();
            const count = parseInt(pull.replace(/\D/g, ''), 10);
            if (!colorCounts.has(color)) {
                colorCounts.set(color, count);
            }
            if (colorCounts.has(color) && colorCounts.get(color) < count) {
                colorCounts.set(color, count);
            }
        });
        return colorCounts;

    });
    return gamesHighestColorCounts.map(gameHighestCounts =>
        gameHighestCounts.get('red') * gameHighestCounts.get('green') * gameHighestCounts.get('blue')
    ).reduce((accumulated, current) => accumulated + current, 0);
};