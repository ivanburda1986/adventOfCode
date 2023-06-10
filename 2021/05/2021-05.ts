import {defaultDict} from "../../utils/defaultDictionary";
/*
Split input by line breaks
For each line, get: [[8,0],[0,8]]

Evaluate where the line is horizontal or vertical
x === x || y === 0
horizontal: number for x (i.e. the first number) is the same for both value
vertical: number for y (i.e. the second number) is the same for both values

For horizontal and vertical:
 * Map where key is line X number
 * and value is a map where key is Y and value number of vents at the position
 * For 9,4 -> 3,4 ====>
 * represent the range as: [[9,4],[8,4],[7,4], [5,4],[4,4],[3,4]]
 * go over X and access the map at the X position and then access the nested map at the Y position and mark it as vent
 * if going over Y and it is already marked as vent, increase the overall count of fields where at least 2 vents are located

 const ventMap = {
 "9":{
      "4":1},
 "8":{
      "4":1},
 "7":{
      "4":1},
 "6":{
      "4":1},
 "5":{
      "4":1},
 "4":{
      "4":1},
 "3":{
      "4":1},

 }

For diagonal
 * For 8,0 -> 0,8 ====> [[8,0],[7,1],[6,2],[5,3],[4,4],[3,5],[2,6],[1,7],[0,8]]
 *
 *
 */
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
    vertical = "vertical"
}

export const getLineFullCoordinates = (coordinates: LineCoordinates, lineDirection: LineDirection): VentCoordinates[] => {
    const numericalCoordinates = coordinates.map(coordinate => Number(coordinate));
    const [x1, y1, x2, y2] = coordinates.map(coordinate => Number(coordinate));
    const numericalCoordinatesRange = [];

    // ["0", "9", "5", "9"]
    if (lineDirection === LineDirection.horizontal) {
        if (x1 < x2) {
            for (let i = x1; i <= x2; i++) {
                numericalCoordinatesRange.push([i, y1]);
            }
        }
        if (x1 > x2) {
            for (let i = x2; i <= x1; i++) {
                numericalCoordinatesRange.push([i, y1]);
            }
        }
    }
    // ["7", "0", "7", "4"]
    if (lineDirection === LineDirection.vertical) {
        if (y1 < y2) {
            for (let i = y1; i <= y2; i++) {
                numericalCoordinatesRange.push([x1, i]);
            }
        }
        if (y1 > y2) {
            for (let i = y2; i <= y1; i++) {
                numericalCoordinatesRange.push([x1, i]);
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

    getCoordinatesCount(coordinates: VentCoordinates) {
        const [x, y] = coordinates;
        return this.ventMap[x][y];
    }

    getOverlapCount() {
        let overlapCount = 0;
        Object.values(this.ventMap).forEach(xCombination => Object.values(xCombination).forEach(xyCoordinates => xyCoordinates > 1 ? overlapCount++ : null));
        return overlapCount;
    }

}

export const getOverlapCount = (input: string): number => {
    const myVentMap = new VentMap();
    const linesSortedByDirection: SortedLinesByDirection = sortLinesByDirection(getParsedInput(input));
    const horizontalLinesAllCoordinates: VentCoordinates[][] = [];
    const verticalLinesAllCoordinates: VentCoordinates[][] = [];
    linesSortedByDirection.horizontal.forEach(line => horizontalLinesAllCoordinates.push(getLineFullCoordinates(line, LineDirection.horizontal)));
    linesSortedByDirection.vertical.forEach(line => verticalLinesAllCoordinates.push(getLineFullCoordinates(line, LineDirection.vertical)));
    horizontalLinesAllCoordinates.forEach(oneLineAllCoordinates => oneLineAllCoordinates.forEach(singleCoordinatesOfLine => myVentMap.addCoordinates(singleCoordinatesOfLine)));
    verticalLinesAllCoordinates.forEach(oneLineAllCoordinates => oneLineAllCoordinates.forEach(singleCoordinatesOfLine => myVentMap.addCoordinates(singleCoordinatesOfLine)));
    return myVentMap.getOverlapCount();
};