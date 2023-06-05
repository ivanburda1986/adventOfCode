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
import {log} from "util";


export const getScore = (input: string) => {
    const [drawnNumbers, ...boards] = input.split("\n\n");
    const myBoards = boards.map(board => new BingoBoard(board));
    const numbers = drawnNumbers.split(',').map(Number);
    let isWinner = false;
    let lastNum = 0;
    let score;

    numbers.forEach(number => {
        lastNum = number;
        myBoards.forEach(board => {
            if (!isWinner) {
                board.check(number);
                if (board.isWinning()) {
                    isWinner = true;
                    score = board.getScore() * lastNum;
                }
            }
        });
    });

    if (isWinner) {
        return score;
    }


};

export class BingoBoard {
    private checkedColumns = defaultDict(0);
    private checkedRows = defaultDict(0);
    private checkedNumbers: number[] = [];
    public board: Map<number, [number, number]> = new Map();

    constructor(board: string) {
        board.split('\n').forEach((line, x) => {
            const numbers = line.trim().split(/\s+/);
            numbers.forEach((num, y) => this.board.set(Number(num), [x, y]));
        });
    }

    getScore() {
        return Array.from(this.board.keys()).filter(k => !this.checkedNumbers.includes(k)).reduce((n, total) => total + n, 0);
    }

    check(number: number) {
        const [x, y] = this.board.get(number) || [null, null];
        if (x === null) {
            return;
        }
        this.checkedNumbers.push(number);
        // @ts-ignore
        this.checkedRows[x]++;
        // @ts-ignore
        this.checkedColumns[y]++;
    }

    isWinning(): boolean {
        for (const key in this.checkedColumns) {
            // @ts-ignore
            if (this.checkedColumns[key] === 5) {

                return true;
            }
        }
        for (const key in this.checkedRows) {
            // @ts-ignore
            if (this.checkedRows[key] === 5) {

                return true;
            }
        }
        return false;
    }
}