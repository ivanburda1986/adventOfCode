import {defaultDict} from "../../utils/defaultDictionary";


const getParsedInput = (input: string) => {
    const [rawDrawnNumbers, ...rawBoards] = input.split("\n\n");
    const boards = rawBoards.map(board => new Board(board));
    const drawnNumbers = rawDrawnNumbers.split(',').map(Number);
    return {
        boards, drawnNumbers
    };
};

export const getFirstWinningBoardScore = (input: string) => {
    const {boards, drawnNumbers} = getParsedInput(input);
    let isWinningBoardKnown = false;
    let score = 0;

    drawnNumbers.forEach(drawnNumber => {
        if (!isWinningBoardKnown) {
            boards.forEach(board => {
                board.check(drawnNumber);
                if (board.isWinning()) {
                    isWinningBoardKnown = true;
                    score = board.calculateScore(drawnNumber);
                }
            });
        }
    });

    return score;
};

export const getLastWinningBoardScore = (input: string): number => {
    const {boards, drawnNumbers} = getParsedInput(input);
    let remainingBoards = [...boards];
    let score = 0;

    drawnNumbers.forEach(drawnNumber => {
        if (remainingBoards.length > 0) {
            remainingBoards.forEach(board => {
                board.check(drawnNumber);
                if (board.isWinning()) {
                    remainingBoards = remainingBoards.filter(({boardId}) => boardId !== board.boardId);
                    score = board.calculateScore(drawnNumber);
                }
            });
        }
    });

    return score;
};

export class Board {
    private columnChecks = defaultDict(0);
    private rowChecks = defaultDict(0);
    private checkedNumbers: number[] = [];
    public board: Map<number, [number, number]> = new Map();
    public boardId = Math.floor(Math.random() * 1000);

    constructor(board: string) {
        board.split('\n').forEach((line, x) => {
            const numbers = line.trim().split(/\s+/);
            numbers.forEach((num, y) => this.board.set(Number(num), [x, y]));
        });
    }

    calculateScore(winningDrawnNumber: number) {
        const remainingNumbers = Array.from(this.board.keys()).filter(boardNumber => !this.checkedNumbers.includes(boardNumber));
        const remainingNumberTotal = remainingNumbers.reduce((n, total) => total + n, 0);
        return remainingNumberTotal * winningDrawnNumber;
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