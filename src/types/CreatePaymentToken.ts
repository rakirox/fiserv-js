export default interface CreatePaymentToken {
  reusable?: boolean;
  declineDuplicates?: boolean;
  value?: string;
}
