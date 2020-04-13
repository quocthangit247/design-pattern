import { IBank } from './bank.interface';

export class VPBank implements IBank {
  getBankName(): string {
    return 'VPBank';
  }
}
