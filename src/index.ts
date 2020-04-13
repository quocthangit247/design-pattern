import { BankFactory, BankType } from './factory-pattern/bank-factory';

const bank = BankFactory.getBank(BankType.VPBANK);
console.log('>>>>>>>>>>>', bank.getBankName());
