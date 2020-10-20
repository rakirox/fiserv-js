import Amount from './Amount';
import SecondaryTransactionRequestType from './SecondaryTransactionRequestType';

export default interface SecondaryTransaction {
  requestType: SecondaryTransactionRequestType;
  transactionAmount: Amount;
}
