import { IBank } from './bank.interface';

export class TPBank implements IBank {
  getBankName(): string {
    return 'TPbank';
  }
}
