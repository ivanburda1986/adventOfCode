type LineCoordinates = [string, string, string, string]
type VentCoordinates = [string, string];

export const getParsedInput = (input: string): LineCoordinates[] => {
    const lines = input.split("\n");
    return lines.map((line) => {
        const [, ax, ay, bx, by] = line.match(/(\d+),(\d+) -> (\d+),(\d+)/) || [];
        return [ax, ay, bx, by];
    });
};

interface SortedLinesByDirection {
    horizontal: LineCoordinates[],
    vertical: LineCoordinates[],
    diagonal: LineCoordinates[],
}

export const sortLinesByDirection = (lineCoordinates: LineCoordinates[]): SortedLinesByDirection => {
    const horizontal: LineCoordinates[] = [];
    const vertical: LineCoordinates[] = [];
    const diagonal: LineCoordinates[] = [];
    lineCoordinates.forEach(line => {
        if (line[0] === line[2] || line[1] === line[3]) {
            if (line[0] === line[2]) {
                vertical.push(line);
                return;
            }
            if (line[1] === line[3]) {
                horizontal.push(line);
                return;
            }
        }
        if (line[0] === line[2] || line[1] === line[3]) {
            horizontal.push(line);
            return;
        }

        diagonal.push(line);
    });

    return {horizontal, vertical, diagonal};
};

export enum LineDirection {
    horizontal = "horizontal",
    vertical = "vertical",
    diagonal = "diagonal"
}

export const getLineFullCoordinates = (coordinates: LineCoordinates, lineDirection: LineDirection): VentCoordinates[] => {
    const numericalCoordinates = coordinates.map(coordinate => Number(coordinate));
    // const [x1, y1, x2, y2] = coordinates.map(coordinate => Number(coordinate));
    const x1 = numericalCoordinates[0];
    const y1 = numericalCoordinates[1];
    const x2 = numericalCoordinates[2];
    const y2 = numericalCoordinates[3];
    const numericalCoordinatesRange = [];


    if (lineDirection === LineDirection.horizontal) {
        //OK: ["0", "9", "5", "9"] -> Right
        if (x1 < x2) {
            for (let i = x1; i <= x2; i++) {
                numericalCoordinatesRange.push([i, y1]);
            }
        }
        //OK: ["3", "4", "1", "4"] -> Left
        //OK: ["9", "4", "3", "4"] -> Left
        if (x1 > x2) {
            for (let i = x1; i >= x2; i--) {
                numericalCoordinatesRange.push([i, y1]);
            }
        }
    }

    if (lineDirection === LineDirection.vertical) {
        //OK: ["7", "0", "7", "4"] -> Up
        if (y1 < y2) {
            for (let i = y1; i <= y2; i++) {
                numericalCoordinatesRange.push([x1, i]);
            }
        }
        //OK: ["2", "2", "2", "1"] -> Down
        if (y1 > y2) {
            for (let i = y1; i >= y2; i--) {
                numericalCoordinatesRange.push([x1, i]);
            }
        }
    }

    if (lineDirection === LineDirection.diagonal) {
        //OK: ["0", "0", "8", "8"]  -> BottomRight
        if (x1 < x2 && y1 < y2) {
            let y = y1;
            for (let i = x1; i <= x2; i++) {
                numericalCoordinatesRange.push([i, y]);
                y++;
            }
        }
        //OK: ["8", "0", "0", "8"] -> BottomLeft
        if (x1 > x2 && y1 < y2) {
            let y = y2;
            for (let i = x2; i <= x1; i++) {
                numericalCoordinatesRange.push([y, i]);
                y--;
            }
        }
        //OK: ["5", "5", "8", "2"] -> UpRight
        if (x1 < x2 && y1 > y2) {
            let y = y1;
            for (let i = x1; i <= x2; i++) {
                numericalCoordinatesRange.push([i, y]);
                y--;
            }
        }
        //OK: ["6", "4", "2", "0"]  -> UpLeft
        if (x1 > x2 && y1 > y2) {
            let y = y1;
            for (let i = x1; i >= x2; i--) {
                numericalCoordinatesRange.push([i, y]);
                y--;
            }
        }
    }
    return numericalCoordinatesRange.map(([x, y]) => [x.toString(), y.toString()]);
};

export class VentMap {
    public ventMap: Record<string, Record<string, number>> = {};

    addCoordinates(coordinates: VentCoordinates) {
        const [x, y] = coordinates;
        if (x in this.ventMap) {
            if (y in this.ventMap[x]) {
                this.ventMap[x][y]++;
            } else {
                this.ventMap[x][y] = 1;
            }
        } else {
            this.ventMap[x] = {[y]: 1};
        }
    }

    getOverlapCount() {
        let overlapCount = 0;
        Object.values(this.ventMap).forEach(xCombination => Object.values(xCombination).forEach(xyCoordinates => xyCoordinates >= 2 ? overlapCount++ : null));
        return overlapCount;
    }

}

export const getOverlapCount = (input: string, shouldIncludeDiagonal?: boolean): number => {
    const myVentMap = new VentMap();
    const linesSortedByDirection: SortedLinesByDirection = sortLinesByDirection(getParsedInput(input));
    const horizontalLinesAllCoordinates: VentCoordinates[][] = [];
    const verticalLinesAllCoordinates: VentCoordinates[][] = [];
    const diagonalLinesAllCoordinates: VentCoordinates[][] = [];

    linesSortedByDirection.horizontal.forEach(line => horizontalLinesAllCoordinates.push(getLineFullCoordinates(line, LineDirection.horizontal)));
    horizontalLinesAllCoordinates.forEach(oneLineAllCoordinates => oneLineAllCoordinates.forEach(singleCoordinatesOfLine => myVentMap.addCoordinates(singleCoordinatesOfLine)));

    linesSortedByDirection.vertical.forEach(line => verticalLinesAllCoordinates.push(getLineFullCoordinates(line, LineDirection.vertical)));
    verticalLinesAllCoordinates.forEach(oneLineAllCoordinates => oneLineAllCoordinates.forEach(singleCoordinatesOfLine => myVentMap.addCoordinates(singleCoordinatesOfLine)));

    if (shouldIncludeDiagonal) {
        linesSortedByDirection.diagonal.forEach(line => diagonalLinesAllCoordinates.push(getLineFullCoordinates(line, LineDirection.diagonal)));
        diagonalLinesAllCoordinates.forEach(oneLineAllCoordinates => oneLineAllCoordinates.forEach(singleCoordinatesOfLine => myVentMap.addCoordinates(singleCoordinatesOfLine)));
    }

    return myVentMap.getOverlapCount();
};