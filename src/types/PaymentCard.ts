import ExpirationDate from './ExpirationDate';

interface PaymentCard {
  number: string;
  securityCode: string;
  expiryDate: ExpirationDate;
}

export default PaymentCard;
