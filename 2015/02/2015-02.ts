const parsePresentDimensions = (presentDimensions: string) => {
    const [, l, w, h] = presentDimensions.match(/(\d+)x(\d+)x(\d+)/) ?? [];
    const length = parseInt(l);
    const width = parseInt(w);
    const height = parseInt(h);
    const ascendingDimensions = [length, width, height].sort((a, b) => a - b);

    return {
        length,
        width,
        height,
        ascendingDimensions
    };
};


export const getPresentPaperRequirement = (presentDimensions: string): number => {
    const {length, width, height, ascendingDimensions} = parsePresentDimensions(presentDimensions);
    return 2 * length * width + 2 * width * height + 2 * height * length + ascendingDimensions[0] * ascendingDimensions[1];
};

export const getPresentRibbonRequirements = (presentDimensions: string): number => {
    const {length, width, height, ascendingDimensions} = parsePresentDimensions(presentDimensions);
    return 2 * ascendingDimensions[0] + 2 * ascendingDimensions[1] + length * width * height;
};

export const getTotalPaperRequirements = (input: string): number => {
    return input.split('\n').reduce((total: number, presentDimensions: string) => total + getPresentPaperRequirement(presentDimensions), 0);
};

export const getTotalRibbonRequirements = (input: string): number => {
    return input.split('\n').reduce((total: number, presentDimensions: string) => total + getPresentRibbonRequirements(presentDimensions), 0);
};