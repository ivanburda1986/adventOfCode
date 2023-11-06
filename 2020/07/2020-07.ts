function getBagMap(input: string) {
    const bagMap: Record<string, string[]> = {};

    input.split('\n').forEach(line => {
        const [parentName, children] = line.split(' bags contain ');
        children.split(', ').forEach(child => {
            const [, part1, part2] = child.split(" ");

            if (part1 === 'other') {
                return;
            }
            const childName = `${part1} ${part2}`.replaceAll('.', "");
            if (!bagMap[childName]) {
                bagMap[childName] = [parentName];
            } else {
                bagMap[childName].push(parentName);
            }
        });
        console.log(bagMap);
    });
    return bagMap;
}

const countParents = (name: string, bagMap: Record<string, string[]>, visited: string[] = []): number => {
    if (visited.includes(name)) {
        return 0;

    }
    visited.push(name);
    if (!bagMap[name]) {
        return 1;
    }
    let result = 1;
    bagMap[name].forEach(parent => {
        result += countParents(parent, bagMap, visited);
    });
    return result;
};

export const getBagsNumber = (input: string): number => {
    const bagMap = getBagMap(input);
    return countParents('shiny gold', bagMap) - 1;
};
