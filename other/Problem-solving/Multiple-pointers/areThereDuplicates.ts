export const areThereDuplicates = (...args: any[]) => {
    args.sort();
    for (let i = 0; i < args.length; i++) {
        if (args[i] === args[i + 1]) {
            return true;
        }
    }
    return false;
};