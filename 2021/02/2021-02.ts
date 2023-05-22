export const getPosition = (input: string) => {
    let horizontalPos = 0;
    let depthPos = 0;

    input.split(`\n`).forEach((inst) => {
        const [direction, distance] = inst.split(' ');
        if (direction === 'forward') {
            horizontalPos += Number(distance);
        }
        if (direction === 'down') {
            depthPos += Number(distance);
        }
        if (direction === 'up') {
            depthPos -= Number(distance);
        }
    });

    return horizontalPos * depthPos;
};

export const getPositionByManual = (input: string) => {
    let horizontalPos = 0;
    let depthPos = 0;
    let aim = 0;

    input.split(`\n`).forEach((inst) => {
        const [direction, distance] = inst.split(' ');
        if (direction === 'forward') {
            horizontalPos += Number(distance);
            depthPos += aim * Number(distance);
        }
        if (direction === 'down') {
            aim += Number(distance);
        }
        if (direction === 'up') {
            aim -= Number(distance);
        }
    });

    return horizontalPos * depthPos;
};