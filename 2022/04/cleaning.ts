//take all assignments and divide them by ('\n') to get pairs which are together
//take each pair and get individual assignment by splitting by (',')
//transform each assignment into an array of numbers representing it
//take the smaller array and find out whether it is fully contained in the longer one


export const getPairs = (allAssignments: string) => {
    return allAssignments.split('\n').map((pair) => pair.split(','));
};

export const getAssignmentNumbers = (assignment: string) => {
    let numbers = [];
    let nums = assignment.split("-");
    let start = parseInt(nums[0]);
    let end = parseInt(nums[1]);
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers.join("");
};

export const isSubPair = (pair: string[]) => {
    const assignments = [getAssignmentNumbers(pair[0]), getAssignmentNumbers(pair[1])];
    assignments.sort((a, b) => a.length - b.length);
    return assignments[1].includes(assignments[0]);
};

export const countSubPairs = (allAssignments: string): number => {
    let count = 0;
    getPairs(allAssignments).forEach((assignmentPair) => {
        if (isSubPair(assignmentPair)) {
            count += 1;
            return;
        }
    });
    return count;
};

