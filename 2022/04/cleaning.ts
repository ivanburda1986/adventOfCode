//take all assignments and divide them by ('\n') to get pairs which are together
//take each pair and get individual assignment by splitting by (',')
//transform each assignment into an array of numbers representing it
//take the smaller array and find out whether it is fully contained in the longer one


export const isFullyContained = (data: string): boolean => {
    const [, s1, e1, s2, e2] = data.match(/(\d+)-(\d+),(\d+)-(\d+)/) ?? [];
    const s1n = parseInt(s1);
    const s2n = parseInt(s2);
    const e1n = parseInt(e1);
    const e2n = parseInt(e2);

    if (s1n >= s2n && e1n <= e2n) {
        return true;
    }

    if (s2n >= s1n && e2n <= e1n) {
        return true;
    }

    return false;
};


export const countFullyContainedPairs = (allAssignments: string): number => {
    let count = 0;
    allAssignments.split('\n').forEach((assignmentPair) => {
        if (isFullyContained(assignmentPair)) {
            count += 1;
            return;
        }
    });
    return count;
};

const isOverlapping = (assignmentPair: string) => {
    const [, s1, e1, s2, e2] = assignmentPair.match(/(\d+)-(\d+),(\d+)-(\d+)/) ?? [];
    const s1n = parseInt(s1);
    const s2n = parseInt(s2);
    const e1n = parseInt(e1);
    const e2n = parseInt(e2);

    if (s1n >= s2n && e1n <= e2n) {
        return true;
    }

    if (s2n >= s1n && e2n <= e1n) {
        return true;
    }

    if (s1n <= e2n && s1n >= s2n) {
        return true;
    }
    if (s2n <= e1n && s2n >= s1n) {
        return true;
    }
    if (e1n >= s2n && e1n <= e2n) {
        return true;
    }
    if (s1n <= e2n && e1n >= e2n) {
        return true;
    }

    return false;
};

export const countOverlappingPairs = (allAssignments: string): number => {
    let count = 0;
    allAssignments.split('\n').forEach((assignmentPair) => {
        if (isOverlapping(assignmentPair)) {
            count += 1;
            return;
        }
    });
    return count;
};

