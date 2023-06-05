import {defaultDict} from "../../utils/defaultDictionary";

export const getScore = (input: string) => {
    const [rawDrawnNumbers, ...rawBoards] = input.split("\n\n");
    const boards = rawBoards.map(board => new BingoBoard(board));
    const drawnNumbers = rawDrawnNumbers.split(',').map(Number);
    let isWinningBoardKnown = false;
    let score = 0;

    drawnNumbers.forEach(drawnNumber => {
        boards.forEach(board => {
            if (!isWinningBoardKnown) {
                board.check(drawnNumber);
                if (board.isWinning()) {
                    isWinningBoardKnown = true;
                    score = board.getScore(drawnNumber);
                }
            }
        });
    });

    if (isWinningBoardKnown) {
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

    getScore(drawnNumber: number) {
        return Array.from(this.board.keys()).filter(k => !this.checkedNumbers.includes(k)).reduce((n, total) => total + n, 0) * drawnNumber;
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