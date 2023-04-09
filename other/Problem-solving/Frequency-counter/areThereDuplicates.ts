export const areThereDuplicates = (...args: any[]) => {
    const values: Record<string, number> = {};

    [...args].forEach((arg) => {
        values[arg] = (values[arg] || 0) + 1;
    });

    for (let entry in values) {
        if (values[entry] > 1) {
            return true;
        }
    }
    return false;
};