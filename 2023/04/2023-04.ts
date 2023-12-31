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

export function findIntersectionPoint(hailstonePair: HailStoneTrajectory[], bottom: number, top: number) {
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

    // Check whether intersection happened in the past
    if (line1.x1 - line1.x2 > 0) {
        if (xIntersection > line1.x1) {
            return null;
        }
    }

    if (line1.y1 - line1.y2 > 0) {
        if (yIntersection > line1.y1) {
            return null;
        }
    }

    if (line2.x1 - line2.x2 > 0) {
        if (xIntersection > line2.x1) {
            return null;
        }
    }

    if (line2.y1 - line2.y2 > 0) {
        if (yIntersection > line2.y1) {
            return null;
        }
    }

    // Check whether intersection is out of borders
    if (xIntersection < bottom || xIntersection > top || yIntersection < bottom || yIntersection > top) {
        return null;
    }


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


export const getCrossingPathCount = (input: string, bottom: number, top: number) => {
    const hailStones: HailStoneTrajectory[] = input.split('\n').map(line => line.replaceAll('@', ',')).map(line => {
        const [x1, y1, z1, vx, vy, vz] = line.split(',').map(value => Number(value.trim()));
        return {x1, y1, z1, x2: x1 + vx, y2: y1 + vy, z2: z1 + vz, vx, vy, vz};
    });

    const uniquePairs = createUniquePairs(hailStones) ?? [];
    // console.log(uniquePairs?.map(pair => findIntersectionPoint(pair, bottom, top)).filter(Boolean));
    return uniquePairs?.map(pair => findIntersectionPoint(pair, bottom, top)).filter(Boolean).length;
};