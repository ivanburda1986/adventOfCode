const PRIORITIES = '0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const getSharedItem = (rucksack: string) => {
    const compartment1 = rucksack.slice(0, rucksack.length / 2).split("");
    const compartment2 = rucksack.slice(rucksack.length / 2).split("");

    for (const item of compartment1) {
        if (compartment2.includes(item)) {
            return item;
        }
    }

    return '0';
};

export const getPrioritySum = (input: string) =>
    input
        .split(`\n`)
        .map((rucksack) => getSharedItem(rucksack))
        .reduce((sum, item) => sum + PRIORITIES.indexOf(item), 0);

export const getBadges = (input: string) => {
    const badges = [];

    const rucksacks = input.split(`\n`);
    for (let i = 0; i < rucksacks.length; i += 3) {
        const r1 = rucksacks[i];
        const r2 = rucksacks[i + 1];
        const r3 = rucksacks[i + 2];

        for (const item of r1) {
            if (r2.includes(item) && r3.includes(item)) {
                badges.push(item);
                break;
            }
        }
    }

    // for (let i = 0; i < r.length; i += 3) {
    //     for (const item of r[i]) {
    //         if (r[i + 1].includes(item) && r[i + 2].includes(item)) {
    //             badges.push(item);
    //             break;
    //         }
    //     }
    // }

    return badges.reduce((sum, item) => sum + PRIORITIES.indexOf(item), 0);
};

