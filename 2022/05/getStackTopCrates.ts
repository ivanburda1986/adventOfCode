export enum CraneVersion {
    "Crane9000" = "Crane9000",
    "Crane9001" = "Crane9001",

}

export const getStackTopCrates = (instructions: string, stacks: Record<number, string[]>, craneVersion: CraneVersion): string => {
    const parsedInstructions = parseInstructions(instructions);
    parsedInstructions.forEach((instruction) => {
        if (craneVersion === CraneVersion.Crane9000) {
            executeSingleInstructionByCrateMover9000(instruction, stacks);
        } else {
            executeSingleInstructionByCrateMover9001(instruction, stacks);
        }
    });

    const topStackCrates: string[] = [];
    Object.values(stacks).forEach((stack) => topStackCrates.push(stack[stack.length - 1]));

    return topStackCrates.join().replace(/\s*,\s*|\s+,/g, '');
};


export function parseInstructions(instructions: string): number[][] {
    const parsedInstructions: number[][] = [];
    instructions.split("\n").forEach((instruction) => {
        const [, count, from, to] = instruction.match(/move (\d+) from (\d+) to (\d+)/) ?? [];
        parsedInstructions.push([parseInt(count), parseInt(from), parseInt(to)]);
    });
    return parsedInstructions;
}

function executeSingleInstructionByCrateMover9000(instruction: number[], stacks: Record<number, string[]>) {
    for (let i = instruction[0]; i--; i > 0) {
        const movingItem = stacks[instruction[1]].pop() ?? "";
        stacks[instruction[2]].push(movingItem);
    }
}

function executeSingleInstructionByCrateMover9001(instruction: number[], stacks: Record<number, string[]>) {
    const movingItems = stacks[instruction[1]].splice(-instruction[0]) ?? "";
    stacks[instruction[2]].push(...movingItems);
}
