type RequestType =
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

export default RequestType;
