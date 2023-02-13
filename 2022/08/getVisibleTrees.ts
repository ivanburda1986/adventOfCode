export const getForestCenter = (forest: string) => {
    const forestRows = forest.split(`\n`);
    forestRows.pop();
    forestRows.shift();
    const forestCenter: string[][] = [];
    forestRows.forEach((row) => forestCenter.push(row.slice(1, -1).split("")));
    return forestCenter;
};

export const getForest = (forest: string) => {
    const forestRows = forest.split(`\n`);
    const wholeForest: string[][] = [];
    forestRows.forEach((row) => wholeForest.push(row.split("")));
    return wholeForest;
};


export const isTreeVisible = (forest: string, cordX: string, cordY: string) => {
    const x: number = parseInt(cordX);
    const y: number = parseInt(cordY);
    const wholeForest = getForest(forest);
    const forestCenter = getForestCenter(forest);
    const evaluatedTree = forestCenter[y][x];
    const up = parseInt(wholeForest[y][x + 1]);
    const left = parseInt(wholeForest[y + 1][x]);
    const right = parseInt(wholeForest[y + 1][x + 2]);
    const down = parseInt(wholeForest[y + 2][x + 1]);
    const surroundingTrees = [up, left, right, down];
    let higherTrees: number[] = [];
    surroundingTrees.forEach((tree) => {
        if (tree > parseInt(evaluatedTree)) {
            higherTrees.push(tree);
        }
    });
    return higherTrees.length === 4;
};

export const getVisibleTrees = (forest: string): number => {
    const forestCenter = getForestCenter(forest);
    const centerLong = forestCenter.length;
    const centerWide = forestCenter[0].length;

    let visibleTrees = (centerWide + 2) * 2 + centerLong * 2;
    for (let y = 0; y < centerLong; y++) {
        for (let x = 0; x < centerWide; x++) {
            if (isTreeVisible(forest, x.toString(), y.toString())) {
                visibleTrees++;
            }
        }
    }
    return visibleTrees;
};


const forest = [[3, 0, 3, 7, 3],
    [2, 5, 5, 1, 2],
    [6, 5, 3, 3, 2],
    [3, 3, 5, 4, 9],
    [3, 5, 3, 9, 0]];

const center = [[5, 5, 1],
    [5, 3, 3],
    [3, 5, 4]];


/*
split each line into an array of numbers
for each number
forest[position in center -1][position in center array+1]
position in center [-1]
position in center [+1]
forest[position in center +1][position in center array+1]
 */