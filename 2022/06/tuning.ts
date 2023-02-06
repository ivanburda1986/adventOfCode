const getSequenceUniqueCharCount = (startPosition: number, uniqueSequenceLength: number, signal: string): number => {
    let sequenceUniqueChars = new Set();
    signal.slice(startPosition, startPosition + uniqueSequenceLength).split('').forEach((char) => sequenceUniqueChars.add(char));
    return sequenceUniqueChars.size;
};

export const getPacketStartPosition = (uniqueSequenceLength: number, signal: string): number => {
    let startPosition = 0;

    while (getSequenceUniqueCharCount(startPosition, uniqueSequenceLength, signal) < uniqueSequenceLength) {
        startPosition += 1;
        getSequenceUniqueCharCount(startPosition, uniqueSequenceLength, signal);
    }

    return startPosition + uniqueSequenceLength;
};

export const getMessageStartPosition = (uniqueSequenceLength: number, signal: string): number => {
    let startPosition = 0;

    while (getSequenceUniqueCharCount(startPosition, uniqueSequenceLength, signal) < uniqueSequenceLength) {
        startPosition += 1;
        getSequenceUniqueCharCount(startPosition, uniqueSequenceLength, signal);
    }

    return startPosition + uniqueSequenceLength;
};

