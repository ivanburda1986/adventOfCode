import {
  BOND_VALUE_EUR,
  DAYS_TO_YIELD_NEW_BOND,
  MaturityEntry,
  TRANSACTION_PROCESSING_TIME_DAYS,
} from "./perpetualSavingBond";

export const areBondsMatureToYieldNewBond = (bondsByMaturity: MaturityEntry) =>
  bondsByMaturity.maturity - TRANSACTION_PROCESSING_TIME_DAYS > 0 &&
  (bondsByMaturity.maturity - TRANSACTION_PROCESSING_TIME_DAYS) %
    DAYS_TO_YIELD_NEW_BOND ===
    0;
export const isRequiredCapitalizationReached = (
  issuedPerpetualBondCount: number,
  issuedPerpetualBondTotalCapTarget: number
) =>
  issuedPerpetualBondCount * BOND_VALUE_EUR > issuedPerpetualBondTotalCapTarget;
