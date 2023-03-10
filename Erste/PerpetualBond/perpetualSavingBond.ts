export const initialIssuedBondsRecord =
    "Bond PSB#00000001 sold 6 days ago\n" +
    "Bond PSB#00000008 sold 2 days ago\n" +
    "Bond PSB#00000003 sold 5 days ago\n" +
    "Bond PSB#00000002 sold 6 days ago\n" +
    "Bond PSB#00000004 sold 5 days ago\n" +
    "Bond PSB#00000006 sold 4 days ago\n" +
    "Bond PSB#00000007 sold 3 days ago\n" +
    "Bond PSB#00000005 sold 5 days ago";

export const PERPETUAL_BOND_VALUE_EUR = 2;
export const TRANSACTION_PROCESSING_TIME_DAYS = 3;
export const DAYS_TO_YIELD_NEW_PERPETUAL_BOND = 7;
export const ERSTE_TOTAL_ASSETS_EUR = 272000000000;

export interface MaturityEntry {
    maturity: number;
    bonds: number;
}

export function getNumberOfDays(rawRecordLine: string) {
    const days = rawRecordLine.match(/\d+/g);
    if (days) {
        return parseInt(days[1]);
    }
    return;
}

export const transformRawRecord = (rawRecord: string) => {
    const bondCountByMaturity: Record<number, number> = {};
    const result: MaturityEntry[] = [];
    for (const recordLine of rawRecord.split("\n")) {
        const recordLineMaturity: number | undefined = getNumberOfDays(recordLine);
        if (recordLineMaturity && bondCountByMaturity[recordLineMaturity]) {
            bondCountByMaturity[recordLineMaturity] += 1;
        } else if (recordLineMaturity) {
            bondCountByMaturity[recordLineMaturity] = 1;
        }
    }

    for (const key in bondCountByMaturity) {
        result.push({maturity: parseInt(key), bonds: bondCountByMaturity[key]});
    }

    return result.sort((a, b) => b.maturity - a.maturity);
};

export const areBondsMatureToYieldNewBond = (bondsByMaturity: MaturityEntry) =>
    bondsByMaturity.maturity - TRANSACTION_PROCESSING_TIME_DAYS > 0 &&
    (bondsByMaturity.maturity - TRANSACTION_PROCESSING_TIME_DAYS) %
    DAYS_TO_YIELD_NEW_PERPETUAL_BOND ===
    0;

export const isRequiredCapitalizationReached = (
    issuedPerpetualBondCount: number,
    issuedPerpetualBondTotalCapTarget: number
) =>
    issuedPerpetualBondCount * PERPETUAL_BOND_VALUE_EUR >
    issuedPerpetualBondTotalCapTarget;

function sumBonds(issuedPerpetualBondCountByMaturity: MaturityEntry[]) {
    return issuedPerpetualBondCountByMaturity.reduce(
        (acc, cur) => acc + cur.bonds,
        0
    );
}

function executeNewDayPerpetualBondJob(
    issuedPerpetualBondCountByMaturity: MaturityEntry[],
    perpetualBondProgramDayCount: number
): {
    dayCount: number;
    bondCountByMaturity: MaturityEntry[];
} {
    let newlyIssuedPerpetualBondCount = 0;

    issuedPerpetualBondCountByMaturity.forEach((bondsByMaturity) => {
        bondsByMaturity.maturity++;
        if (areBondsMatureToYieldNewBond(bondsByMaturity)) {
            newlyIssuedPerpetualBondCount += bondsByMaturity.bonds;
        }
    });

    if (newlyIssuedPerpetualBondCount) {
        issuedPerpetualBondCountByMaturity.push({
            maturity: 1,
            bonds: newlyIssuedPerpetualBondCount,
        });
    }
    return {
        dayCount: perpetualBondProgramDayCount + 1,
        bondCountByMaturity: issuedPerpetualBondCountByMaturity,
    };
}

export const calculateDaysPerpetualBondsNeedToReachCap = (
    issuedPerpetualBondTotalCapTarget: number,
    initialIssuedBondsRecord: string
): number => {
    let issuedPerpetualBondCountByMaturity: MaturityEntry[] = transformRawRecord(initialIssuedBondsRecord);
    let perpetualBondProgramDayCount: number = 6;
    let issuedPerpetualBondCount: number = 8;

    while (
        !isRequiredCapitalizationReached(
            issuedPerpetualBondCount,
            issuedPerpetualBondTotalCapTarget
        )
        ) {
        const {dayCount, bondCountByMaturity} = executeNewDayPerpetualBondJob(
            issuedPerpetualBondCountByMaturity,
            perpetualBondProgramDayCount
        );
        perpetualBondProgramDayCount = dayCount;
        issuedPerpetualBondCountByMaturity = bondCountByMaturity;
    }

    console.log(perpetualBondProgramDayCount);
    return perpetualBondProgramDayCount;
};

calculateDaysPerpetualBondsNeedToReachCap(
    ERSTE_TOTAL_ASSETS_EUR,
    initialIssuedBondsRecord
);
