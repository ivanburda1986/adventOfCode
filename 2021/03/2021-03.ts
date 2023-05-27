/*
use the binary numbers to generate two new binary numbers: gamma rate, epsilon rate

gama rate
get most common bit at each position for the numbers in the report
the binary number you get -> decimal

epsilon rate
get least common bit at each position for the numbers in the report
the binary number you get -> decimal

power consumption: gamma rate decimal * epsilon rate decimal
 */


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