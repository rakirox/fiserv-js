import Address from './Address';
import AuthRequestType from './AuthRequestType';

interface AuthenticationVerificationRequest {
  requestType: AuthRequestType;
  billingAddress?: Address;
  securityCode?: number;
  merchantData?: string;
  payerAuthenticationResponse?: string;
}

export default AuthenticationVerificationRequest;
