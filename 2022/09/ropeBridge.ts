// How many positions does the tail of the rope visit at least once?

export const getTailTouchedPositions = (input: string): number => {
    const headMoveInstructions: string[] = [];
    input.split("\n").forEach(line => {
        const [letter, count] = line.split(" ");
        for (let i = 0; i < Number(count); i++) {
            headMoveInstructions.push(letter);
        }
    });

    const headCoordinates = {
        x: 0,
        y: 0
    };
    const tailCoordinates = {
        x: 0,
        y: 0
    };

    const uniqueTailCoordinates = new Set();
    uniqueTailCoordinates.add('x0#y0'); // starting-point coordinate


    function moveTail() {
        const shouldFollowHeadRight = headCoordinates.y - tailCoordinates.y === 0 && headCoordinates.x - tailCoordinates.x === 2;
        if (shouldFollowHeadRight) {
            tailCoordinates.x += 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }
        const shouldFollowHeadLeft = headCoordinates.y - tailCoordinates.y === 0 && headCoordinates.x - tailCoordinates.x === -2;
        if (shouldFollowHeadLeft) {
            tailCoordinates.x -= 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }
        const shouldFollowHeadUp = headCoordinates.y - tailCoordinates.y === 2 && headCoordinates.x - tailCoordinates.x === 0;
        if (shouldFollowHeadUp) {
            tailCoordinates.y += 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }
        const shouldFollowHeadDown = headCoordinates.y - tailCoordinates.y === -2 && headCoordinates.x - tailCoordinates.x === 0;
        if (shouldFollowHeadDown) {
            tailCoordinates.y -= 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }


        const shouldFollowHeadUpAndRight = headCoordinates.y - tailCoordinates.y === 2 && headCoordinates.x - tailCoordinates.x === 1;
        if (shouldFollowHeadUpAndRight) {
            tailCoordinates.y += 1;
            tailCoordinates.x += 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }
        if (headCoordinates.y - tailCoordinates.y === 1 && headCoordinates.x - tailCoordinates.x === 2) {
            tailCoordinates.y += 1;
            tailCoordinates.x += 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }


        const shouldFollowHeadUpAndLeft = headCoordinates.y - tailCoordinates.y === 2 && headCoordinates.x - tailCoordinates.x === -1;
        if (shouldFollowHeadUpAndLeft) {
            tailCoordinates.y += 1;
            tailCoordinates.x -= 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }
        if (headCoordinates.y - tailCoordinates.y === 1 && headCoordinates.x - tailCoordinates.x === -2) {
            tailCoordinates.y += 1;
            tailCoordinates.x -= 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }


        const shouldFollowHeadDownAndRight = headCoordinates.y - tailCoordinates.y === -2 && headCoordinates.x - tailCoordinates.x === 1;
        if (shouldFollowHeadDownAndRight) {
            tailCoordinates.y -= 1;
            tailCoordinates.x += 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }
        if (headCoordinates.y - tailCoordinates.y === -1 && headCoordinates.x - tailCoordinates.x === -2) {
            tailCoordinates.y -= 1;
            tailCoordinates.x -= 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }


        const shouldFollowHeadDownAndLeft = headCoordinates.y - tailCoordinates.y === -2 && headCoordinates.x - tailCoordinates.x === -1;
        if (shouldFollowHeadDownAndLeft) {
            tailCoordinates.y -= 1;
            tailCoordinates.x -= 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }
        if (headCoordinates.y - tailCoordinates.y === -1 && headCoordinates.x - tailCoordinates.x === 2) {
            tailCoordinates.y -= 1;
            tailCoordinates.x += 1;
            uniqueTailCoordinates.add(`x${tailCoordinates.x}#y${tailCoordinates.y}`);
        }

    }

    for (const letter of headMoveInstructions) {
        if (letter === "R") {
            headCoordinates.x += 1;
        }

        if (letter === "L") {
            headCoordinates.x -= 1;
        }

        if (letter === "U") {
            headCoordinates.y += 1;
        }

        if (letter === "D") {
            headCoordinates.y -= 1;
        }
        moveTail();
    }
    return uniqueTailCoordinates.size;

};
