const isCheckedSequenceDistinct = (checkFromSignalPosition: number, requiredDistinctSequenceLength: number, signal: string): boolean => {
    let sequenceDistinctChars = new Set();
    signal.slice(checkFromSignalPosition, checkFromSignalPosition + requiredDistinctSequenceLength).split('').forEach((char) => sequenceDistinctChars.add(char));
    return sequenceDistinctChars.size === requiredDistinctSequenceLength;
};

export const getStartMarkerPosition = (requiredDistinctSequenceLength: number, signal: string): number => {
    let checkFromSignalPosition = 0;

    while (!isCheckedSequenceDistinct(checkFromSignalPosition, requiredDistinctSequenceLength, signal)) {
        checkFromSignalPosition += 1;
        isCheckedSequenceDistinct(checkFromSignalPosition, requiredDistinctSequenceLength, signal);
    }

    return checkFromSignalPosition + requiredDistinctSequenceLength;
};

