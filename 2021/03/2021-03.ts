export const getPowerConsumption = (input: string) => {
    const bit1Counts = new Map<number, number>();
    let inputSize = 0;
    input.split(`\n`).forEach((binary, inputBinaryIndex) => {
        inputSize++;
        binary.split('').forEach((bit, binaryPositionIndex) => {
            const count = bit1Counts.get(binaryPositionIndex);
            if (bit === '0' && count === undefined) {
                bit1Counts.set(binaryPositionIndex, 0);
            }
            if (bit === '1') {
                if (count === undefined) {
                    bit1Counts.set(binaryPositionIndex, 1);
                } else {
                    bit1Counts.set(binaryPositionIndex, count + 1);
                }
            }
        });
    });
    let gamaRate = '';
    let epsilonRate = '';
    for (const value of bit1Counts.values()) {
        if (value > (inputSize - 1) / 2) {
            gamaRate = gamaRate + "1";
            epsilonRate = epsilonRate + "0";
        } else {
            gamaRate = gamaRate + "0";
            epsilonRate = epsilonRate + "1";
        }
    }

    return (parseInt(gamaRate, 2) * parseInt(epsilonRate, 2));
};

export const getDividedBinaries = (input: string[], position: number): { dominant: string[], weak: string[] } => {
    const withZero: string[] = [];
    const withOne: string[] = [];
    input.forEach((binary) => binary[position] === "1" ? withOne.push(binary) : withZero.push(binary));
    if (withZero.length > withOne.length) {
        return {dominant: withZero, weak: withOne};
    }
    return {dominant: withOne, weak: withZero};
};

export const getRatings = (input: string) => {
    let oxygenBinaries = input.split(`\n`);
    let carbonDioxideBinaries = input.split(`\n`);
    let oxygenPosition = 0;
    let carbonPosition = 0;
    let oxygenRating = 0;
    let carbonRating = 0;
    while (oxygenBinaries.length > 2) {
        oxygenBinaries = getDividedBinaries(oxygenBinaries, oxygenPosition).dominant;
        oxygenPosition++;
    }
    while (carbonDioxideBinaries.length > 2) {
        carbonDioxideBinaries = getDividedBinaries(carbonDioxideBinaries, carbonPosition).weak;
        carbonPosition++;
    }
    if (oxygenBinaries[0].slice(-1) === "1") {
        oxygenRating = parseInt(oxygenBinaries[0], 2);
    } else {
        oxygenRating = parseInt(oxygenBinaries[1], 2);
    }

    if (carbonDioxideBinaries[0].slice(-1) === "0") {
        carbonRating = parseInt(carbonDioxideBinaries[0], 2);
    } else {
        carbonRating = parseInt(carbonDioxideBinaries[1], 2);
    }
    return oxygenRating * carbonRating;
};

