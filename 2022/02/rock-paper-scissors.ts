type strategy = string[]

// A = rock
// B = paper
// C = scissors
//
// X = ROCK, 1
// Y = PAPER, 2
// Z = SCISSORS, 3

// loss = 0
// tie = 3
// win = 6

const scores = new Map([
    ['A X', 4],
    ['A Y', 8],
    ['A Z', 3],

    ['B X', 1],
    ['B Y', 5],
    ['B Z', 9],

    ['C X', 7],
    ['C Y', 2],
    ['C Z', 6]
]);

export const getScore = (strategies: string) => {
    return strategies.split("\n").reduce((sum, strategy) => {
        return sum + scores.get(strategy)!;
    }, 0);
};

const winningSituations = ['AY', 'BZ', 'CX'];
const losingSituations = ['AZ', 'BX', 'CY'];
const drawSituations = ['AX', 'BY', 'CZ'];

const requiredResponse: Record<string, Record<string, string>> = {
    X: {
        A: "Z",
        B: "X",
        C: "Y"
    },
    Y: {
        A: "X",
        B: "Y",
        C: "Z"
    },
    Z: {
        A: "Y",
        B: "Z",
        C: "X"
    }
};

const getAllStrategies = (guide: string): strategy[] => {
    const allStrategies = [];
    for (const element of guide.split('\n')) {
        const strategy = element.split(" ");
        if (strategy.length === 2) {
            allStrategies.push(strategy);
        }
    }
    console.log(allStrategies.length);
    return allStrategies;
};

const setMyResponseToComplyWithStrategy = (strategies: strategy[]): strategy[] => {
    const updatedStrategies = [];
    for (const strategy of strategies) {
        updatedStrategies.push([strategy[0], requiredResponse[strategy[1]][strategy[0]]]);
    }
    return updatedStrategies;
};

const calculateScore = (strategies: string[][]): number => {
    let score = 0;
    for (const element of strategies) {
        if (winningSituations.includes(element.join(""))) {
            score += 6;
        }
        if (drawSituations.includes(element.join(""))) {
            score += 3;
        }
        if (losingSituations.includes(element.join(""))) {
            score += 0;
        }
        if (element[1] === 'X') {
            score += 1;
        }
        if (element[1] === 'Y') {
            score += 2;
        }
        if (element[1] === 'Z') {
            score += 3;
        }
    }
    console.log(score);
    return score;
};

// calculateScore(setMyResponseToComplyWithStrategy(getAllStrategies(strategies)));