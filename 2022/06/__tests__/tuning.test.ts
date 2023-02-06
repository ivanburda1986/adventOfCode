import {readFileSync} from "fs";
import {getMessageStartPosition, getPacketStartPosition} from "../tuning";

describe('Advent of code 2022 - day 6 ', () => {
    describe('getPacketStartPosition', () => {
        const UNIQUE_SEQUENCE_LENGTH = 4;

        it('returns packet start position for example signal 1', () => {
            const signalExample = readFileSync('2022/06/signalExample1.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getPacketStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(5);
        });

        it('returns packet start position for example signal 2', () => {
            const signalExample = readFileSync('2022/06/signalExample2.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getPacketStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(6);
        });

        it('returns packet start position for example signal 3', () => {
            const signalExample = readFileSync('2022/06/signalExample3.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getPacketStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(10);
        });

        it('returns packet start position for example signal 4', () => {
            const signalExample = readFileSync('2022/06/signalExample4.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getPacketStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(11);
        });

        it('returns packet start position for full data signal', () => {
            const signalExample = readFileSync('2022/06/signalFullData.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getPacketStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(1651);
        });
    });

    describe('getMessageStartPosition', () => {
        const UNIQUE_SEQUENCE_LENGTH = 14;

        it('returns message start position for example signal 0', () => {
            const signalExample = readFileSync('2022/06/signalExample0.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getMessageStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(19);
        });

        it('returns message start position for example signal 1', () => {
            const signalExample = readFileSync('2022/06/signalExample1.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getMessageStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(23);
        });

        it('returns message start position for example signal 2', () => {
            const signalExample = readFileSync('2022/06/signalExample2.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getMessageStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(23);
        });

        it('returns message start position for example signal 3', () => {
            const signalExample = readFileSync('2022/06/signalExample3.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getMessageStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(29);
        });

        it('returns message start position for example signal 4', () => {
            const signalExample = readFileSync('2022/06/signalExample4.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getMessageStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(26);
        });

        it('returns message start position for full data signal', () => {
            const signalExample = readFileSync('2022/06/signalFullData.txt', {
                encoding: 'utf8',
                flag: 'r'
            });
            expect(getMessageStartPosition(UNIQUE_SEQUENCE_LENGTH, signalExample)).toBe(3837);
        });
    });
});