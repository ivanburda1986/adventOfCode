export const whatFloorWillSantaGetTo = (input: string) => {
    let destinationFloor = 0;
    const instructions = input.split("");

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "(") {
            destinationFloor += 1;
        }

        if (instructions[i] === ")") {
            destinationFloor -= 1;
        }
    }

    return destinationFloor;
};

export const whichInstructionLeadsToMinusOneFloor = (input: string) => {
    let destinationFloor = 0;
    const instructions = input.split("");

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "(") {
            destinationFloor += 1;
        }

        if (instructions[i] === ")") {
            destinationFloor -= 1;
        }

        if (destinationFloor === -1) {
            return i + 1;
        }
    }

};