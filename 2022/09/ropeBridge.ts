// How many positions does the tail of the rope visit at least once?

export const getTailTouchedPositions = (input: string): number => {
    const headMoveInstructions: string[] = [];
    input.split("\n").forEach(line => {
        const [letter, count] = line.split(" ");
        for (let i = 0; i < Number(count); i++) {
            headMoveInstructions.push(letter);
        }
    });

    const rope = {
        HEAD: {
            x: 0,
            y: 0
        },
        1: {
            x: 0,
            y: 0
        },
        2: {
            x: 0,
            y: 0
        },
        3: {
            x: 0,
            y: 0
        },
        4: {
            x: 0,
            y: 0
        },
        5: {
            x: 0,
            y: 0
        },
        6: {
            x: 0,
            y: 0
        },
        7: {
            x: 0,
            y: 0
        },
        8: {
            x: 0,
            y: 0
        },
        TAIL: {
            x: 0,
            y: 0
        },
    };


    const uniqueTailCoordinates = new Set();
    uniqueTailCoordinates.add('x0#y0'); // starting-point coordinate
    function trackTailMovement() {
        uniqueTailCoordinates.add(`x${rope.TAIL.x}#y${rope.TAIL.y}`);
    }

    function moveTail() {
        const shouldFollowHeadRight = rope.HEAD.y - rope.TAIL.y === 0 && rope.HEAD.x - rope.TAIL.x === 2;
        if (shouldFollowHeadRight) {
            rope.TAIL.x += 1;
            trackTailMovement();
        }

        const shouldFollowHeadLeft = rope.HEAD.y - rope.TAIL.y === 0 && rope.HEAD.x - rope.TAIL.x === -2;
        if (shouldFollowHeadLeft) {
            rope.TAIL.x -= 1;
            trackTailMovement();
        }
        const shouldFollowHeadUp = rope.HEAD.y - rope.TAIL.y === 2 && rope.HEAD.x - rope.TAIL.x === 0;
        if (shouldFollowHeadUp) {
            rope.TAIL.y += 1;
            trackTailMovement();
        }
        const shouldFollowHeadDown = rope.HEAD.y - rope.TAIL.y === -2 && rope.HEAD.x - rope.TAIL.x === 0;
        if (shouldFollowHeadDown) {
            rope.TAIL.y -= 1;
            trackTailMovement();
        }


        const shouldFollowHeadUpAndRight = rope.HEAD.y - rope.TAIL.y === 2 && rope.HEAD.x - rope.TAIL.x === 1;
        if (shouldFollowHeadUpAndRight) {
            rope.TAIL.y += 1;
            rope.TAIL.x += 1;
            trackTailMovement();
        }
        const shouldFollowHeadUpAndRight2 = rope.HEAD.y - rope.TAIL.y === 1 && rope.HEAD.x - rope.TAIL.x === 2;
        if (shouldFollowHeadUpAndRight2) {
            rope.TAIL.y += 1;
            rope.TAIL.x += 1;
            trackTailMovement();
        }

        const shouldFollowHeadUpAndLeft = rope.HEAD.y - rope.TAIL.y === 2 && rope.HEAD.x - rope.TAIL.x === -1;
        if (shouldFollowHeadUpAndLeft) {
            rope.TAIL.y += 1;
            rope.TAIL.x -= 1;
            trackTailMovement();
        }
        const shouldFollowHeadUpAndLeft2 = rope.HEAD.y - rope.TAIL.y === 1 && rope.HEAD.x - rope.TAIL.x === -2;
        if (shouldFollowHeadUpAndLeft2) {
            rope.TAIL.y += 1;
            rope.TAIL.x -= 1;
            trackTailMovement();
        }


        const shouldFollowHeadDownAndRight = rope.HEAD.y - rope.TAIL.y === -2 && rope.HEAD.x - rope.TAIL.x === 1;
        if (shouldFollowHeadDownAndRight) {
            rope.TAIL.y -= 1;
            rope.TAIL.x += 1;
            trackTailMovement();
        }
        const shouldFollowHeadDownAndRight2 = rope.HEAD.y - rope.TAIL.y === -1 && rope.HEAD.x - rope.TAIL.x === 2;
        if (shouldFollowHeadDownAndRight2) {
            rope.TAIL.y -= 1;
            rope.TAIL.x += 1;
            trackTailMovement();
        }


        const shouldFollowHeadDownAndLeft = rope.HEAD.y - rope.TAIL.y === -2 && rope.HEAD.x - rope.TAIL.x === -1;
        if (shouldFollowHeadDownAndLeft) {
            rope.TAIL.y -= 1;
            rope.TAIL.x -= 1;
            trackTailMovement();
        }

        const shouldFollowHeadDownAndLeft2 = rope.HEAD.y - rope.TAIL.y === -1 && rope.HEAD.x - rope.TAIL.x === -2;
        if (shouldFollowHeadDownAndLeft2) {
            rope.TAIL.y -= 1;
            rope.TAIL.x -= 1;
            trackTailMovement();
        }

    }

    for (const letter of headMoveInstructions) {
        if (letter === "R") {
            rope.HEAD.x += 1;
        }

        if (letter === "L") {
            rope.HEAD.x -= 1;
        }

        if (letter === "U") {
            rope.HEAD.y += 1;
        }

        if (letter === "D") {
            rope.HEAD.y -= 1;
        }
        moveTail();
    }
    return uniqueTailCoordinates.size;

};
