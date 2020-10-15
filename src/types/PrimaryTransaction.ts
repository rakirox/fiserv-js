export type Currency = 'MXN' | 'USD';
export type RequestType =
  | 'AliPaySaleTransaction'
  | 'ChinaPnRSaleTransaction'
  | 'PaymentCardCreditTransaction'
  | 'PaymentCardForcedTicketTransaction'
  | 'PaymentCardSaleTransaction'
  | 'PaymentCardPreAuthTransaction'
  | 'PaymentCardPayerAuthTransaction'
  | 'PaymentCardDisbursementTransaction'
  | 'PaymentTokenCreditTransaction'
  | 'PaymentTokenPreAuthTransaction'
  | 'PaymentTokenSaleTransaction'
  | 'PaymentTokenDisbursementTransaction'
  | 'PaypalCreditTransaction'
  | 'SepaSaleTransaction'
  | 'WalletSaleTransaction'
  | 'WalletPreAuthTransaction'
  | 'PaymentDeviceSaleTransaction'
  | 'PaymentDevicePreAuthTransaction'
  | 'PaymentDeviceCreditTransaction'
  | 'PaymentDeviceDisbursementTransaction';

export type TransactionOrigin = 'ECOM' | 'MAIL' | 'PHONE' | 'RETAIL';

export interface Amount {
  total: number;
  currency: Currency;
}

export interface ExpirationDate {
  month: string;
  year: string;
}

export interface PaymentCard {
  number: string;
  securityCode: string;
  expiryDate: ExpirationDate;
}

export interface PaymentMethod {
  paymentCard: PaymentCard;
}

// export interface Order {
//   orderId: string;
// }

export default interface PrimaryTransaction {
  requestType: RequestType;
  transactionAmount: Amount;
  paymentMethod: PaymentMethod;
  storeId?: string;
  merchantTransactionId?: string;
  transactionOrigin?: TransactionOrigin;
}
