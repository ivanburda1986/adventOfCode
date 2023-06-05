export const getPowerConsumption = (report: string) => {
    const bit1CountAtPositions = new Map<number, number>();
    let reportSize = 0;

    report.split(`\n`).forEach((binary) => {
        reportSize++;
        binary.split('').forEach((bit, bitPositionIndex) => {
            const count = bit1CountAtPositions.get(bitPositionIndex);
            if (bit === '0' && count === undefined) {
                bit1CountAtPositions.set(bitPositionIndex, 0);
            }
            if (bit === '1') {
                if (count === undefined) {
                    bit1CountAtPositions.set(bitPositionIndex, 1);
                } else {
                    bit1CountAtPositions.set(bitPositionIndex, count + 1);
                }
            }
        });
    });

    let gamaRate = '';
    let epsilonRate = '';
    for (const bit1Count of bit1CountAtPositions.values()) {
        const isBit1DominantAtPosition = bit1Count > (reportSize - 1) / 2;
        if (isBit1DominantAtPosition) {
            gamaRate = gamaRate + "1";
            epsilonRate = epsilonRate + "0";
        } else {
            gamaRate = gamaRate + "0";
            epsilonRate = epsilonRate + "1";
        }
    }

    return (parseInt(gamaRate, 2) * parseInt(epsilonRate, 2));
};

export const getDividedBinaries = (report: string[], positionToCheck: number): {
    dominant: string[],
    weak: string[]
} => {
    const withZero: string[] = [];
    const withOne: string[] = [];
    report.forEach((binary) => binary[positionToCheck] === "1" ? withOne.push(binary) : withZero.push(binary));
    const areBinariesWithZeroDominant = withZero.length > withOne.length;
    if (areBinariesWithZeroDominant) {
        return {dominant: withZero, weak: withOne};
    }
    return {dominant: withOne, weak: withZero};
};

export const getLifeSupportRating = (report: string) => {
    let oxygenBinaries = report.split(`\n`);
    let carbonDioxideBinaries = report.split(`\n`);
    let oxygenPosition = 0;
    let carbonDioxidePosition = 0;
    let oxygenRating = 0;
    let carbonDioxideRating = 0;

    while (oxygenBinaries.length > 2) {
        oxygenBinaries = getDividedBinaries(oxygenBinaries, oxygenPosition).dominant;
        oxygenPosition++;
    }
    while (carbonDioxideBinaries.length > 2) {
        carbonDioxideBinaries = getDividedBinaries(carbonDioxideBinaries, carbonDioxidePosition).weak;
        carbonDioxidePosition++;
    }

    const isFirstRemainingBinaryOxygenRelevant = oxygenBinaries[0].slice(-1) === "1";
    if (isFirstRemainingBinaryOxygenRelevant) {
        oxygenRating = parseInt(oxygenBinaries[0], 2);
    } else {
        oxygenRating = parseInt(oxygenBinaries[1], 2);
    }

    const isFirstRemainingBinaryCarbonDioxideRelevant = carbonDioxideBinaries[0].slice(-1) === "0";
    if (isFirstRemainingBinaryCarbonDioxideRelevant) {
        carbonDioxideRating = parseInt(carbonDioxideBinaries[0], 2);
    } else {
        carbonDioxideRating = parseInt(carbonDioxideBinaries[1], 2);
    }
    
    return oxygenRating * carbonDioxideRating;
};

