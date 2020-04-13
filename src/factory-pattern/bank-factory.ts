import { IBank } from './bank.interface';
import { TPBank } from './tpbank';
import { VPBank } from './vpbank';

export enum BankType {
  VPBANK,
  TPBANK
}

export class BankFactory {
  private constructor() {}

  public static getBank(type: BankType): IBank {
    switch (type) {
      case BankType.TPBANK:
        return new TPBank();
      case BankType.VPBANK:
        return new VPBank();
      default:
        return;
    }
  }
}
