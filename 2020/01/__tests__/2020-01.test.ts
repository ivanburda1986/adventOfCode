import {getExpenseReportResult, getExpenseReportResultPart2} from "../2020-01";
import {readFileSync} from "fs";

describe('AOC-2020-01', () => {
    it('returns 514579 for sample data - part1', () => {
        const sampleData = `1721
979
366
299
675
1456`;
        expect(getExpenseReportResult(sampleData)).toBe(514579);
    });

    it('returns 972576 for the real data - part1', () => {
        const realdata = readFileSync('2020/01/2020-01.txt', {encoding: 'utf8', flag: 'r'});
        expect(getExpenseReportResult(realdata)).toBe(972576);
    });

    it('returns 241861950 for sample data - part2', () => {
        const sampleData = `1721
979
366
299
675
1456`;
        expect(getExpenseReportResultPart2(sampleData)).toBe(241861950);
    });

    it('returns 199300880 for the real data - part2', () => {
        const realdata = readFileSync('2020/01/2020-01.txt', {encoding: 'utf8', flag: 'r'});
        expect(getExpenseReportResultPart2(realdata)).toBe(199300880);
    });
});
