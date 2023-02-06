import {readFileSync} from "fs";
import {getStartMarkerPosition} from "../tuning";

describe('Advent of code 2022 - day 6 ', () => {
    describe('Start-of-packet-marker position', () => {
        const REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_PACKET = 4;

        it('returned by the device for example signal 1', () => {
            const signalExample = readFileSync('2022/06/signalExample1.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_PACKET, signalExample)).toBe(5);
        });

        it('returned by the device for example signal 2', () => {
            const signalExample = readFileSync('2022/06/signalExample2.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_PACKET, signalExample)).toBe(6);
        });

        it('returned by the device for example signal 3', () => {
            const signalExample = readFileSync('2022/06/signalExample3.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_PACKET, signalExample)).toBe(10);
        });

        it('returned by the device for example signal 4', () => {
            const signalExample = readFileSync('2022/06/signalExample4.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_PACKET, signalExample)).toBe(11);
        });

        it('returned by the device for full data signal', () => {
            const signalFulldata = readFileSync('2022/06/signalFullData.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_PACKET, signalFulldata)).toBe(1651);
        });
    });

    describe('Start of message marker position', () => {
        const REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_MESSAGE = 14;

        it('returned by the device for example signal 0', () => {
            const signalExample = readFileSync('2022/06/signalExample0.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_MESSAGE, signalExample)).toBe(19);
        });

        it('returned by the device for example signal 1', () => {
            const signalExample = readFileSync('2022/06/signalExample1.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_MESSAGE, signalExample)).toBe(23);
        });

        it('returned by the device for example signal 2', () => {
            const signalExample = readFileSync('2022/06/signalExample2.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_MESSAGE, signalExample)).toBe(23);
        });

        it('returned by the device for example signal 3', () => {
            const signalExample = readFileSync('2022/06/signalExample3.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_MESSAGE, signalExample)).toBe(29);
        });

        it('returned by the device for example signal 4', () => {
            const signalExample = readFileSync('2022/06/signalExample4.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_MESSAGE, signalExample)).toBe(26);
        });

        it('returned by the device for full data signal', () => {
            const signalFulldata = readFileSync('2022/06/signalFullData.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getStartMarkerPosition(REQUIRED_LENGTH_OF_DISTINCT_SEQUENCE_PRECEDING_MESSAGE, signalFulldata)).toBe(3837);
        });
    });
});