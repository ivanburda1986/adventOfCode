const STARTING_HOUSE_COORDINATES = [1000, 1000];

export const countHousesSantaDeliversTo = (input: string): number => {
    const instructions = input.split("");
    const visitedHouses = new Set();
    let currentHouse = [...STARTING_HOUSE_COORDINATES];

    visitedHouses.add(currentHouse.join(""));
    instructions.forEach((instruction) => {
        if (instruction === "^") {
            currentHouse[1] += 1;
        }
        if (instruction === ">") {
            currentHouse[0] += 1;
        }
        if (instruction === "v") {
            currentHouse[1] -= 1;
        }
        if (instruction === "<") {
            currentHouse[0] -= 1;
        }

        visitedHouses.add(currentHouse.join(""));
    });
    return visitedHouses.size;
};

export const countHousesSantaAndRoboSantaDeliverTo = (input: string): number => {
    const allInstructions = input.split("");
    const santaInstructions = [];
    const roboSantaInstructions = [];
    const visitedHouses = new Set();
    let santaCurrentHouse = [...STARTING_HOUSE_COORDINATES];
    let robotSantaCurrentHouse = [...STARTING_HOUSE_COORDINATES];

    for (let i = 0; i < allInstructions.length; i += 2) {
        santaInstructions.push(allInstructions[i]);
    }
    for (let i = 1; i < allInstructions.length; i += 2) {
        roboSantaInstructions.push(allInstructions[i]);
    }

    visitedHouses.add(santaCurrentHouse.join(""));
    santaInstructions.forEach((instruction) => {
        if (instruction === "^") {
            santaCurrentHouse[1] += 1;
        }
        if (instruction === ">") {
            santaCurrentHouse[0] += 1;
        }
        if (instruction === "v") {
            santaCurrentHouse[1] -= 1;
        }
        if (instruction === "<") {
            santaCurrentHouse[0] -= 1;
        }

        visitedHouses.add(santaCurrentHouse.join(""));
    });

    visitedHouses.add(robotSantaCurrentHouse.join(""));
    roboSantaInstructions.forEach((instruction) => {
        if (instruction === "^") {
            robotSantaCurrentHouse[1] += 1;
        }
        if (instruction === ">") {
            robotSantaCurrentHouse[0] += 1;
        }
        if (instruction === "v") {
            robotSantaCurrentHouse[1] -= 1;
        }
        if (instruction === "<") {
            robotSantaCurrentHouse[0] -= 1;
        }

        visitedHouses.add(robotSantaCurrentHouse.join(""));
    });

    return visitedHouses.size;


};