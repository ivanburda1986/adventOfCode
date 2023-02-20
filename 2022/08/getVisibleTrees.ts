export const getForest = (forest: string) => {
    return forest.split(`\n`).map((line) => line.split("").map((n) => parseInt(n)));
};


export const getVisibleTrees = (input: string) => {
    let visibleTrees = 0;
    const forest = getForest(input);
    console.log(forest);
    for (let y = 1; y < forest.length - 1; y++) {
        const forestRow = forest[1];
        for (let x = 1; x < forestRow.length - 1; x++) {
            let currentTree = forest[y][x];
            let treeIsVisibleFromTop = true;
            let treeIsVisibleFromRight = true;
            let treeIsVisibleFromBottom = true;
            let treeIsVisibleFromLeft = true;
            //top
            for (let tY = 0; tY < y; tY++) {
                if (forest[tY][x] >= currentTree) {
                    treeIsVisibleFromTop = false;
                }
            }

            //right
            for (let tX = x + 1; tX < forestRow.length; tX++) {
                if (forest[y][tX] >= currentTree) {
                    treeIsVisibleFromRight = false;
                }
            }
            //bottom
            for (let tY = y + 1; tY < forest.length; tY++) {
                if (forest[tY][x] >= currentTree) {
                    treeIsVisibleFromBottom = false;
                }
            }
            //left
            for (let tX = 0; tX < x; tX++) {
                if (forest[y][tX] >= currentTree) {
                    treeIsVisibleFromLeft = false;

                }
            }
            if (treeIsVisibleFromTop || treeIsVisibleFromRight || treeIsVisibleFromBottom || treeIsVisibleFromLeft) {
                visibleTrees += 1;
            }
        }
    }
    return visibleTrees + (2 * forest.length) + (2 * (forest[0].length - 2));
};

export const getScenicScore = (input: string) => {
    let visibleTrees = 0;
    const forest = getForest(input);
    let maxScenicScore = 0;
    console.log(forest);
    for (let y = 1; y < forest.length - 1; y++) {
        const forestRow = forest[1];
        for (let x = 1; x < forestRow.length - 1; x++) {
            let currentTree = forest[y][x];
            let visibleTreesTop = 0;
            let visibleTreesRight = 0;
            let visibleTreesBottom = 0;
            let visibleTreesLeft = 0;

            //top
            for (let tY = y - 1; tY >= 0; tY--) {
                visibleTreesTop++;
                if (forest[tY][x] >= currentTree) {
                    break;
                }
            }

            //right
            for (let tX = x + 1; tX < forestRow.length; tX++) {
                visibleTreesRight++;
                if (forest[y][tX] >= currentTree) {
                    break;
                }
            }
            //bottom
            for (let tY = y + 1; tY < forest.length; tY++) {
                visibleTreesBottom++;
                if (forest[tY][x] >= currentTree) {
                    break;
                }
            }
            //left
            for (let tX = x - 1; tX >= 0; tX--) {
                visibleTreesLeft++;
                if (forest[y][tX] >= currentTree) {
                    break;
                }
            }
            let scenicScore = visibleTreesTop * visibleTreesRight * visibleTreesBottom * visibleTreesLeft;
            if (scenicScore > maxScenicScore) {
                maxScenicScore = scenicScore;
            }
        }
    }
    return maxScenicScore;
};