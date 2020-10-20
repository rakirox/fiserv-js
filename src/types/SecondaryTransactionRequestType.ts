type SecondaryTransactionRequestType =
  | 'PostAuthTransaction'
  | 'VoidTransaction'
  | 'VoidPreAuthTransactions'
  | 'ReturnTransaction'
  | 'AchPostAuthTransaction'
  | 'AchVoidTransaction'
  | 'AchReturnTransaction';

export default SecondaryTransactionRequestType;
