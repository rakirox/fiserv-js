import Amount from './Amount';
import PaymentMethod from './PaymentMethod';
import RequestType from './RequestType';
import TransactionOrigin from './TransactionOrigin';

export default interface PrimaryTransaction {
  requestType: RequestType;
  transactionAmount: Amount;
  paymentMethod: PaymentMethod;
  storeId?: string;
  merchantTransactionId?: string;
  transactionOrigin?: TransactionOrigin;
}
