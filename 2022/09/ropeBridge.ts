// How many positions does the tail of the rope visit at least once?

type Rope = Record<string, Record<string, number>>
export const displayRope = (rope: Rope): void => {
    let display = '';
    for (let y = 0; y < 40; y++) {
        display += "\n";
        for (let x = 0; x < 40; x++) {
            let changed = false;
            for (const part in rope) {
                if (rope[part].x === x && rope[part].y === y) {
                    display += "#";
                    changed = true;
                    break;
                }
            }
            if (!changed) {
                display += ".";
            }
        }
    }
    console.log(display);
};


function isTail(part: number, ropeLength: number) {
    return part === ropeLength - 1;
}

export const getTailTouchedPositions = (input: string, ropeLength: number): number => {
    const headMoveInstructions: string[] = [];
    input.split("\n").forEach(line => {
        const [letter, count] = line.split(" ");
        for (let i = 1; i <= Number(count); i++) {
            headMoveInstructions.push(letter);
        }
    });

    const tailCoordinatesRecord: Record<number, Set<number>> = {};

    const recordTailCoordinates = (x: number, y: number) => {
        if (x in tailCoordinatesRecord) {
            tailCoordinatesRecord[x].add(y);
        } else {
            tailCoordinatesRecord[x] = new Set();
            tailCoordinatesRecord[x].add(y);
        }
    };


    const ropePartCoordinates: Rope = {
        0: {x: 11, y: 5},
        1: {x: 11, y: 5},
        2: {x: 11, y: 5},
        3: {x: 11, y: 5},
        4: {x: 11, y: 5},
        5: {x: 11, y: 5},
        6: {x: 11, y: 5},
        7: {x: 11, y: 5},
        8: {x: 11, y: 5},
        9: {x: 11, y: 5},
    };


    function movePart(part: number, ropeLength: number) {

        const shouldFollowPreviousRight = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === 0 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === 2;
        if (shouldFollowPreviousRight) {
            ropePartCoordinates[part].x += 1;
        }

        const shouldFollowPreviousLeft = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === 0 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === -2;
        if (shouldFollowPreviousLeft) {
            ropePartCoordinates[part].x -= 1;
        }
        const shouldFollowPreviousUp = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === 2 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === 0;
        if (shouldFollowPreviousUp) {
            ropePartCoordinates[part].y += 1;
        }
        const shouldFollowPreviousDown = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === -2 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === 0;
        if (shouldFollowPreviousDown) {
            ropePartCoordinates[part].y -= 1;
        }


        const shouldFollowPreviousUpAndRight = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === 2 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === 1;
        if (shouldFollowPreviousUpAndRight) {
            ropePartCoordinates[part].y += 1;
            ropePartCoordinates[part].x += 1;
        }
        const shouldFollowPreviousUpAndRight2 = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === 1 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === 2;
        if (shouldFollowPreviousUpAndRight2) {
            ropePartCoordinates[part].y += 1;
            ropePartCoordinates[part].x += 1;
        }

        const shouldFollowPreviousUpAndLeft = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === 2 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === -1;
        if (shouldFollowPreviousUpAndLeft) {
            ropePartCoordinates[part].y += 1;
            ropePartCoordinates[part].x -= 1;
        }
        const shouldFollowPreviousUpAndLeft2 = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === 1 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === -2;
        if (shouldFollowPreviousUpAndLeft2) {
            ropePartCoordinates[part].y += 1;
            ropePartCoordinates[part].x -= 1;
        }


        const shouldFollowPreviousDownAndRight = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === -2 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === 1;
        if (shouldFollowPreviousDownAndRight) {
            ropePartCoordinates[part].y -= 1;
            ropePartCoordinates[part].x += 1;
        }
        const shouldFollowPreviousDownAndRight2 = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === -1 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === 2;
        if (shouldFollowPreviousDownAndRight2) {
            ropePartCoordinates[part].y -= 1;
            ropePartCoordinates[part].x += 1;
        }


        const shouldFollowPreviousDownAndLeft = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === -2 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === -1;
        if (shouldFollowPreviousDownAndLeft) {
            ropePartCoordinates[part].y -= 1;
            ropePartCoordinates[part].x -= 1;
        }

        const shouldFollowPreviousDownAndLeft2 = ropePartCoordinates[part - 1].y - ropePartCoordinates[part].y === -1 && ropePartCoordinates[part - 1].x - ropePartCoordinates[part].x === -2;
        if (shouldFollowPreviousDownAndLeft2) {
            ropePartCoordinates[part].y -= 1;
            ropePartCoordinates[part].x -= 1;
        }


        if (isTail(part, ropeLength)) {
            const coordinateX = ropePartCoordinates[ropeLength - 1].x;
            const coordinateY = ropePartCoordinates[ropeLength - 1].y;

            recordTailCoordinates(coordinateX, coordinateY);
        }

    }

    for (const letter of headMoveInstructions) {
        if (letter === "R") {
            ropePartCoordinates[0].x += 1;
        }

        if (letter === "L") {
            ropePartCoordinates[0].x -= 1;
        }

        if (letter === "U") {
            ropePartCoordinates[0].y += 1;
        }

        if (letter === "D") {
            ropePartCoordinates[0].y -= 1;
        }

        for (let i = 1; i < ropeLength; i++) {
            movePart(i, ropeLength);
        }
    }

    let tailUniqueCoordinatesCount = 0;
    for (let tailCoordinatesRecordKey in tailCoordinatesRecord) {
        if (tailCoordinatesRecord[tailCoordinatesRecordKey].size >= 0) {
            tailUniqueCoordinatesCount += tailCoordinatesRecord[tailCoordinatesRecordKey].size;
        }
    }
    displayRope(ropePartCoordinates);
    return tailUniqueCoordinatesCount;
};
