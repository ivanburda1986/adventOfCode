function getDirectorySizes(terminalOutput: string) {
    const path: string[] = [''];
    const directorySize = new Map<string, number>();
    terminalOutput.split("\n").forEach((line) => {
        if (line.startsWith('$ cd')) {
            const targetDirectory = line.split(' cd ')[1];
            const targetPath = path[path.length - 1] + targetDirectory;
            if (targetDirectory === '..') {
                path.pop();
            } else {
                path.push(targetPath);
            }

        }
        const startsWithNumbers = /^\d/;
        if (startsWithNumbers.test(line)) {
            path.forEach((currentPath) => {
                if (!directorySize.has(currentPath)) {
                    directorySize.set(currentPath, 0);
                }
                directorySize.set(currentPath, directorySize.get(currentPath)! + parseInt(line.split(' ')[0]));
            });

        }

    });
    directorySize.delete('');
    return directorySize;
}

export const getDirectoriesSizeSum = (terminalOutput: string): number => {
    const directorySize = getDirectorySizes(terminalOutput);
    return Array.from(directorySize.values()).reduce((a, b) => b < 100000 ? a + b : a, 0);
};

export const getDirectoryToEmptyRequiredSpace = (terminalOutput: string) => {
    const directorySize = getDirectorySizes(terminalOutput);
    const driveCapacity = 70000000;
    const updateSize = 30000000;
    const freeSpace = driveCapacity - directorySize.get('/')!;
    const requiredSpaceToFreeUp = updateSize - freeSpace;

    //An efficient way to find min/max value
    let directoryToDelete = directorySize.get('/')!;
    for (const [, directorySizeElement] of directorySize) {
        if (directorySizeElement > requiredSpaceToFreeUp && directorySizeElement < directoryToDelete) {
            directoryToDelete = directorySizeElement;
        }
    }
    return directoryToDelete;
};
