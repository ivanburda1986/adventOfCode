import { areBondsMatureToYieldNewBond } from "./perpetualSavingBondService";

export const BOND_VALUE_EUR = 10;
export const TRANSACTION_PROCESSING_TIME_DAYS = 3;
export const DAYS_TO_YIELD_NEW_BOND = 7;
export const ERSTE_TOTAL_ASSETS_EUR = 272000000000;

export interface MaturityEntry {
  maturity: number;
  bonds: number;
}

export const calculateDaysPerpetualBondsNeedToReachCap = (
  issuedPerpetualBondTotalCapTarget: number
): number => {
  let perpetualBondProgramDayCount: number = 6;
  let issuedPerpetualBondCount: number = 8;
  const issuedPerpetualBondCountByMaturity: MaturityEntry[] = [
    { maturity: 6, bonds: 2 },
    { maturity: 5, bonds: 3 },
    { maturity: 4, bonds: 1 },
    { maturity: 3, bonds: 1 },
    { maturity: 2, bonds: 1 },
  ];

  function executeNewDayBondJob(): void {
    perpetualBondProgramDayCount++;
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
      issuedPerpetualBondCount += newlyIssuedPerpetualBondCount;
    }
  }

  function endDayIssuedBondTotalCap(): number {
    return issuedPerpetualBondCount * BOND_VALUE_EUR;
  }

  while (endDayIssuedBondTotalCap() < issuedPerpetualBondTotalCapTarget) {
    executeNewDayBondJob();
  }
  console.log(perpetualBondProgramDayCount);
  return perpetualBondProgramDayCount;
};

calculateDaysPerpetualBondsNeedToReachCap(ERSTE_TOTAL_ASSETS_EUR);
