export const getTrees = (input: string, dx: number = 3, dy: number = 1): number => {
    const slopLines = input.split('\n').map(line => line.split(''));
    let treesHit = 0;

    for (let x = 0, y = 0; y < slopLines.length; y = y + dy, x = x + dx) {
        if (x >= slopLines[y].length) {
            x = x - slopLines[y].length;
        }
        if (slopLines[y][x] === "#") {
            treesHit++;
        }
    }

    return treesHit;
};

export const getTreesMultiplication = (input: string): number => [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
    .map(([x, y]) => getTrees(input, x, y))
    .reduce((t, result) => t * result, 1);
