import Amount from './Amount';
import PaymentMethod from './PaymentMethod';
import TransactionRequestType from './TransactionRequestType';
import TransactionOrigin from './TransactionOrigin';

export default interface PrimaryTransaction {
  requestType: TransactionRequestType;
  transactionAmount: Amount;
  paymentMethod: PaymentMethod;
  storeId?: string;
  merchantTransactionId?: string;
  transactionOrigin?: TransactionOrigin;
}
