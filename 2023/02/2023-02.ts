export const sumImpossibleGameIds = (i: string) => {
    const result = i.split('Game ')
        .map(game => game.substring(game.indexOf(":") + 2))
        .map(game => game.replaceAll('\n', ""))
        .filter(Boolean)
        .map(game => game.split('\; '))
        .map(game => game
            .map(game => game.split(', '))
            .map(handGrab => handGrab
                .map(handGrab => ({
                    color: handGrab.substring(handGrab.indexOf(" ")).trim(),
                    count: Number(handGrab.substring(0, handGrab.indexOf("")))
                })).filter(handGrab => handGrab.color))
        );

    console.log(result);
};