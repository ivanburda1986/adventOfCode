import {defaultDict} from "../../utils/defaultDictionary";


const getParsedInput = (input: string) => {
    const [rawDrawnNumbers, ...rawBoards] = input.split("\n\n");
    const boards = rawBoards.map(board => new Board(board));
    const drawnNumbers = rawDrawnNumbers.split(',').map(Number);
    return {
        boards, drawnNumbers
    };
};

export const getScore = (input: string, considerLastWinningBoard: boolean = false) => {
    const {boards, drawnNumbers} = getParsedInput(input);
    let isFirstWinningBoardKnown = false;
    let lastDrawnNumber;
    let winningBoardsCount = 0;
    let score = 0;

    drawnNumbers.forEach(drawnNumber => {
        lastDrawnNumber = drawnNumber;
        boards.forEach(board => {
            if (!considerLastWinningBoard && !isFirstWinningBoardKnown) {
                board.check(drawnNumber);
                if (board.isWinning()) {
                    isFirstWinningBoardKnown = true;
                    score = board.calculateScore(drawnNumber);
                }
            }
            if (considerLastWinningBoard && winningBoardsCount < boards.length) {
                board.check(drawnNumber);
                if (board.isWinning()) {
                    winningBoardsCount++;
                    score = board.calculateScore(drawnNumber);
                    console.log(score);
                }
            }
        });
    });

    if (isFirstWinningBoardKnown) {
        return score;
    }

    return score;
};

export class Board {
    private columnChecks = defaultDict(0);
    private rowChecks = defaultDict(0);
    private checkedNumbers: number[] = [];
    public board: Map<number, [number, number]> = new Map();

    constructor(board: string) {
        board.split('\n').forEach((line, x) => {
            const numbers = line.trim().split(/\s+/);
            numbers.forEach((num, y) => this.board.set(Number(num), [x, y]));
        });
    }

    calculateScore(winningDrawnNumber: number) {
        console.log(this.board);
        console.log(Array.from(this.board.keys()).filter(boardNumber => !this.checkedNumbers.includes(boardNumber)).reduce((n, total) => total + n, 0));
        console.log(winningDrawnNumber);
        return Array.from(this.board.keys()).filter(boardNumber => !this.checkedNumbers.includes(boardNumber)).reduce((n, total) => total + n, 0) * winningDrawnNumber;
    }

    check(number: number) {
        const [x, y] = this.board.get(number) || [null, null];
        if (x === null) {
            return;
        }
        this.checkedNumbers.push(number);
        // @ts-ignore
        this.rowChecks[x]++;
        // @ts-ignore
        this.columnChecks[y]++;
    }

    isWinning(): boolean {
        for (const key in this.columnChecks) {
            // @ts-ignore
            if (this.columnChecks[key] === 5) {

                return true;
            }
        }
        for (const key in this.rowChecks) {
            // @ts-ignore
            if (this.rowChecks[key] === 5) {

                return true;
            }
        }
        return false;
    }
}