import CreatePaymentToken from './CreatePaymentToken';
import PaymentCard from './PaymentCard';
import TokenizeRequestType from './TokenizeRequestType';

interface PaymentTokenizationRequest {
  requestType: TokenizeRequestType;
  paymentCard: PaymentCard;
  createToken: CreatePaymentToken;
  accountVerification?: boolean;
}

export default PaymentTokenizationRequest;
