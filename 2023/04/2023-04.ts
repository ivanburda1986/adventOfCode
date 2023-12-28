/*
calculate intersection point for each 2 lines
if it exists check that the point is within the given range
if the intersection point is in the range, increase the counter
 */

interface Line {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
}

interface HailStoneTrajectory {
    x1: number;
    y1: number;
    z1: number;
    x2: number;
    y2: number;
    z2: number;
    vx: number;
    vy: number;
    vz: number;
}


export function findIntersectionPoint(hailstonePair: HailStoneTrajectory[]) {
    const line1 = hailstonePair[0];
    const line2 = hailstonePair[1];

    // Calculate slopes and intercepts for both lines
    let m1 = (line1.y2 - line1.y1) / (line1.x2 - line1.x1);
    let b1 = line1.y1 - m1 * line1.x1;

    let m2 = (line2.y2 - line2.y1) / (line2.x2 - line2.x1);
    let b2 = line2.y1 - m2 * line2.x1;

    // Check whether lines are parallel
    if (m1 === m2) {
        return null;
    }

    // Calculate intersection point
    let xIntersection = (b2 - b1) / (m1 - m2);
    let yIntersection = m1 * xIntersection + b1;

    return {x: xIntersection, y: yIntersection};
}

function createUniquePairs(inputArray: HailStoneTrajectory[]) {
    let uniquePairs = [];

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (
                inputArray[i].x1 === inputArray[j].x1 &&
                inputArray[i].x2 === inputArray[j].x2 &&
                inputArray[i].y1 === inputArray[j].y1 &&
                inputArray[i].y2 === inputArray[j].y2 &&
                inputArray[i].z1 === inputArray[j].z1 &&
                inputArray[i].z2 === inputArray[j].z2
            ) {
                return;
            } else {
                uniquePairs.push([inputArray[i], inputArray[j]]);
            }
        }
    }

    return uniquePairs;
}

export const getCrossingPathCount = (input: string) => {
    let count = 0;
    const hailStones: HailStoneTrajectory[] = input.split('\n').map(line => line.replaceAll('@', ',')).map(line => {
        const [x1, y1, z1, vx, vy, vz] = line.split(',').map(value => Number(value.trim()));
        return {x1, y1, z1, x2: x1 + vx, y2: y1 + vy, z2: z1 + vz, vx, vy, vz};
    });

    // const intersection = findIntersectionPoint({
    //     line1: {x1: hailStones[i].x1, y1: hailStones[i].y1, x2: hailStones[i].x2, y2: hailStones[i].y2},
    //     line2: {x1: hailStones[j].x1, y1: hailStones[j].y1, x2: hailStones[j].x2, y2: hailStones[j].y2},
    // });
    const uniquePairs = createUniquePairs(hailStones) ?? [];
    console.log(uniquePairs);
    console.log(uniquePairs?.map(findIntersectionPoint));
};