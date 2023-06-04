/*
Get board by splitting after a space
Represent each board as a two-dimensional matrix
Each entry in the board must have a bool about being checked
Iterate over drawn numbers:
- go through all boards and marked the drawn number as checked
- find out whether there is a winning board

If a winning board found
- stop iterating
- calculate score of the winning board by summing all non-marked numbers in it and then multiply the total by the winning drawn number
*/


const getDrawnNumbers = (drawnNumbers: string): number[] => {
    const result: number[] = [];
    drawnNumbers.split(',').forEach(n => result.push(Number(n)));
    return result;
};

export const getBoards = (boardsInput: string) => {
    const boards: [number?, boolean?][][] = [
        [[], [], [], [], []],
        [[], [], [], [], []],
        [[], [], [], [], []],
        [[], [], [], [], []],
        [[], [], [], [], []],
    ];
    boardsInput.split("\n\n")
        .forEach((boardInput, boardIndex) => boardInput.split('\n')
            .forEach(boardInputRow => boardInputRow.split(' ')
                .forEach((numberString, numberStringIndex) => boards[boardIndex][numberStringIndex].push(Number(numberString)))));
    return boards;
};

export const getScore = (boardsInput: string, draw: string) => {
    const drawnNumbers = getDrawnNumbers(draw);
};