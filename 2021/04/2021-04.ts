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


import {defaultDict} from "../../utils/defaultDictionary";

export const getScore = (input: string) => {
    const [drawnNumbers, ...boards] = input.split("\n\n");
    const myBoards = boards.map(board => new BingoBoard(board));
    drawnNumbers.split(',').map(Number).forEach(number => {
        myBoards.forEach(board => {
            board.check(number);
            board.isWinning();
        });

    });

};

export class BingoBoard {
    private checkedColumns = defaultDict(0);
    private checkedRows = defaultDict(0);
    public board: Map<number, [number, number]> = new Map();

    constructor(board: string) {
        board.split('\n').forEach((line, x) => {
            const numbers = line.trim().split(/\s+/);
            numbers.forEach((num, y) => this.board.set(Number(num), [x, y]));
        });
    }

    check(number: number) {
        const [x, y] = this.board.get(number) || [null, null];
        if (x === null) {
            return;
        }
        // @ts-ignore
        this.checkedRows[x]++;
        // @ts-ignore
        this.checkedColumns[y]++;
    }

    isWinning(): boolean {
        for (const key in this.checkedColumns) {
            // @ts-ignore
            if (this.checkedColumns[key] === 5) {
                console.log('win', key);
                return true;
            }
        }
        for (const key in this.checkedRows) {
            // @ts-ignore
            if (this.checkedRows[key] === 5) {
                console.log('win', key);
                return true;
            }
        }
        return false;
    }
}