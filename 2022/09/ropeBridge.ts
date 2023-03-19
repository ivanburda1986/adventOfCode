// How many positions does the tail of the rope visit at least once?

type Rope = Record<string, Record<string, number>>
export const displayRope = (rope: Rope): void => {
    let display = '';
    for (let y = 0; y <= 40; y++) {
        display += "\n";
        for (let x = 0; x <= 40; x++) {
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
    return part === ropeLength;
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


    const rope: Rope = {
        1: {x: 11, y: 5},
        2: {x: 11, y: 5},
        3: {x: 11, y: 5},
        4: {x: 11, y: 5},
        5: {x: 11, y: 5},
        6: {x: 11, y: 5},
        7: {x: 11, y: 5},
        8: {x: 11, y: 5},
        9: {x: 11, y: 5},
        10: {x: 11, y: 5},
    };


    function movePart(part: number, ropeLength: number) {

        const shouldFollowPreviousRight = rope[part - 1].y - rope[part].y === 0 && rope[part - 1].x - rope[part].x === 2;
        if (shouldFollowPreviousRight) {
            rope[part].x += 1;
        }

        const shouldFollowPreviousLeft = rope[part - 1].y - rope[part].y === 0 && rope[part - 1].x - rope[part].x === -2;
        if (shouldFollowPreviousLeft) {
            rope[part].x -= 1;
        }
        const shouldFollowPreviousUp = rope[part - 1].y - rope[part].y === 2 && rope[part - 1].x - rope[part].x === 0;
        if (shouldFollowPreviousUp) {
            rope[part].y += 1;
        }
        const shouldFollowPreviousDown = rope[part - 1].y - rope[part].y === -2 && rope[part - 1].x - rope[part].x === 0;
        if (shouldFollowPreviousDown) {
            rope[part].y -= 1;
        }


        const shouldFollowPreviousUpAndRight = rope[part - 1].y - rope[part].y === 2 && rope[part - 1].x - rope[part].x === 1;
        if (shouldFollowPreviousUpAndRight) {
            rope[part].y += 1;
            rope[part].x += 1;
        }
        const shouldFollowPreviousUpAndRight2 = rope[part - 1].y - rope[part].y === 1 && rope[part - 1].x - rope[part].x === 2;
        if (shouldFollowPreviousUpAndRight2) {
            rope[part].y += 1;
            rope[part].x += 1;
        }

        const shouldFollowPreviousUpAndLeft = rope[part - 1].y - rope[part].y === 2 && rope[part - 1].x - rope[part].x === -1;
        if (shouldFollowPreviousUpAndLeft) {
            rope[part].y += 1;
            rope[part].x -= 1;
        }
        const shouldFollowPreviousUpAndLeft2 = rope[part - 1].y - rope[part].y === 1 && rope[part - 1].x - rope[part].x === -2;
        if (shouldFollowPreviousUpAndLeft2) {
            rope[part].y += 1;
            rope[part].x -= 1;
        }


        const shouldFollowPreviousDownAndRight = rope[part - 1].y - rope[part].y === -2 && rope[part - 1].x - rope[part].x === 1;
        if (shouldFollowPreviousDownAndRight) {
            rope[part].y -= 1;
            rope[part].x += 1;
        }
        const shouldFollowPreviousDownAndRight2 = rope[part - 1].y - rope[part].y === -1 && rope[part - 1].x - rope[part].x === 2;
        if (shouldFollowPreviousDownAndRight2) {
            rope[part].y -= 1;
            rope[part].x += 1;
        }


        const shouldFollowPreviousDownAndLeft = rope[part - 1].y - rope[part].y === -2 && rope[part - 1].x - rope[part].x === -1;
        if (shouldFollowPreviousDownAndLeft) {
            rope[part].y -= 1;
            rope[part].x -= 1;
        }

        const shouldFollowPreviousDownAndLeft2 = rope[part - 1].y - rope[part].y === -1 && rope[part - 1].x - rope[part].x === -2;
        if (shouldFollowPreviousDownAndLeft2) {
            rope[part].y -= 1;
            rope[part].x -= 1;
        }


        if (isTail(part, ropeLength)) {
            const coordinateX = rope[ropeLength].x;
            const coordinateY = rope[ropeLength].y;

            recordTailCoordinates(coordinateX, coordinateY);
        }

    }

    for (const letter of headMoveInstructions) {
        if (letter === "R") {
            rope[1].x += 1;
        }

        if (letter === "L") {
            rope[1].x -= 1;
        }

        if (letter === "U") {
            rope[1].y += 1;
        }

        if (letter === "D") {
            rope[1].y -= 1;
        }

        for (let i = 2; i <= ropeLength; i++) {
            movePart(i, ropeLength);
        }

        // headMoveInstructions.shift();
    }

    let tailUniqueCoordinatesCount = 0;
    for (let tailCoordinatesRecordKey in tailCoordinatesRecord) {
        if (tailCoordinatesRecord[tailCoordinatesRecordKey].size >= 0) {
            tailUniqueCoordinatesCount += tailCoordinatesRecord[tailCoordinatesRecordKey].size;
        }
    }
    displayRope(rope);
    console.log(tailCoordinatesRecord);
    return tailUniqueCoordinatesCount;
};
