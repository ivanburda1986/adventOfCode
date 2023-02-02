export enum CraneVersion {
    "Crane9000" = "Crane9000",
    "Crane9001" = "Crane9001",
}

interface Instruction {
    count: number;
    from: number;
    to: number;
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

export function parseInstructions(instructions: string): Instruction[] {
    const parsedInstructions: Instruction[] = [];
    instructions.split("\n").forEach((instruction) => {
        const [, count, from, to] = instruction.match(/move (\d+) from (\d+) to (\d+)/) ?? [];
        parsedInstructions.push({count: parseInt(count), from: parseInt(from), to: parseInt(to)});
    });

    return parsedInstructions;
}

function executeSingleInstructionByCrateMover9000(instruction: Instruction, stacks: Record<number, string[]>) {
    for (let i = instruction.count; i--; i > 0) {
        const movingItem = stacks[instruction.from].pop() ?? "";
        stacks[instruction.to].push(movingItem);
    }
}

function executeSingleInstructionByCrateMover9001(instruction: Instruction, stacks: Record<number, string[]>) {
    const movingItems = stacks[instruction.from].splice(-instruction.count) ?? "";
    stacks[instruction.to].push(...movingItems);
}
