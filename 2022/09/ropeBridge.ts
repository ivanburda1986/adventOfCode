// How many positions does the tail of the rope visit at least once?

export const getTailTouchedPositions = (input: string, ropeLength: number): number => {
    const headMoveInstructions: string[] = [];
    input.split("\n").forEach(line => {
        const [letter, count] = line.split(" ");
        for (let i = 1; i <= Number(count); i++) {
            headMoveInstructions.push(letter);
        }
    });

    const rope: Record<string, Record<string, number>> = {
        0: {x: 0, y: 0},
        1: {x: 0, y: 0},
        2: {x: 0, y: 0},
        3: {x: 0, y: 0},
        4: {x: 0, y: 0},
        5: {x: 0, y: 0},
        6: {x: 0, y: 0},
        7: {x: 0, y: 0},
        8: {x: 0, y: 0},
        9: {x: 0, y: 0},
    };

    const uniqueTailCoordinates = new Set();
    uniqueTailCoordinates.add('0-0'); // starting-point coordinate xy

    function trackTailMovement() {
        uniqueTailCoordinates.add(`${rope[ropeLength - 1].x}-${rope[ropeLength - 1].y}`);
    }

    function moveKnot(knot: number) {
        const shouldFollowPreviousRight = rope[knot - 1].y - rope[knot].y === 0 && rope[knot - 1].x - rope[knot].x === 2;
        if (shouldFollowPreviousRight) {
            rope[knot].x += 1;
            trackTailMovement();
        }

        const shouldFollowPreviousLeft = rope[knot - 1].y - rope[knot].y === 0 && rope[knot - 1].x - rope[knot].x === -2;
        if (shouldFollowPreviousLeft) {
            rope[knot].x -= 1;
            trackTailMovement();
        }
        const shouldFollowPreviousUp = rope[knot - 1].y - rope[knot].y === 2 && rope[knot - 1].x - rope[knot].x === 0;
        if (shouldFollowPreviousUp) {
            rope[knot].y += 1;
            trackTailMovement();
        }
        const shouldFollowPreviousDown = rope[knot - 1].y - rope[knot].y === -2 && rope[knot - 1].x - rope[knot].x === 0;
        if (shouldFollowPreviousDown) {
            rope[knot].y -= 1;
            trackTailMovement();
        }


        const shouldFollowPreviousUpAndRight = rope[knot - 1].y - rope[knot].y === 2 && rope[knot - 1].x - rope[knot].x === 1;
        if (shouldFollowPreviousUpAndRight) {
            rope[knot].y += 1;
            rope[knot].x += 1;
            trackTailMovement();
        }
        const shouldFollowPreviousUpAndRight2 = rope[knot - 1].y - rope[knot].y === 1 && rope[knot - 1].x - rope[knot].x === 2;
        if (shouldFollowPreviousUpAndRight2) {
            rope[knot].y += 1;
            rope[knot].x += 1;
            trackTailMovement();
        }

        const shouldFollowPreviousUpAndLeft = rope[knot - 1].y - rope[knot].y === 2 && rope[knot - 1].x - rope[knot].x === -1;
        if (shouldFollowPreviousUpAndLeft) {
            rope[knot].y += 1;
            rope[knot].x -= 1;
            trackTailMovement();
        }
        const shouldFollowPreviousUpAndLeft2 = rope[knot - 1].y - rope[knot].y === 1 && rope[knot - 1].x - rope[knot].x === -2;
        if (shouldFollowPreviousUpAndLeft2) {
            rope[knot].y += 1;
            rope[knot].x -= 1;
            trackTailMovement();
        }


        const shouldFollowPreviousDownAndRight = rope[knot - 1].y - rope[knot].y === -2 && rope[knot - 1].x - rope[knot].x === 1;
        if (shouldFollowPreviousDownAndRight) {
            rope[knot].y -= 1;
            rope[knot].x += 1;
            trackTailMovement();
        }
        const shouldFollowPreviousDownAndRight2 = rope[knot - 1].y - rope[knot].y === -1 && rope[knot - 1].x - rope[knot].x === 2;
        if (shouldFollowPreviousDownAndRight2) {
            rope[knot].y -= 1;
            rope[knot].x += 1;
            trackTailMovement();
        }


        const shouldFollowPreviousDownAndLeft = rope[knot - 1].y - rope[knot].y === -2 && rope[knot - 1].x - rope[knot].x === -1;
        if (shouldFollowPreviousDownAndLeft) {
            rope[knot].y -= 1;
            rope[knot].x -= 1;
            trackTailMovement();
        }

        const shouldFollowPreviousDownAndLeft2 = rope[knot - 1].y - rope[knot].y === -1 && rope[knot - 1].x - rope[knot].x === -2;
        if (shouldFollowPreviousDownAndLeft2) {
            rope[knot].y -= 1;
            rope[knot].x -= 1;
            trackTailMovement();
        }

    }

    for (const letter of headMoveInstructions) {
        if (letter === "R") {
            rope[0].x += 1;
        }

        if (letter === "L") {
            rope[0].x -= 1;
        }

        if (letter === "U") {
            rope[0].y += 1;
        }

        if (letter === "D") {
            rope[0].y -= 1;
        }

        for (let i = 1; i < ropeLength; i++) {
            moveKnot(i);
        }
    }

    return uniqueTailCoordinates.size;

};
