import axios, { AxiosResponse } from 'axios';
import { config, production, sandbox, validateConfig } from './environment';
import PrimaryTransaction from './types/PrimaryTransaction';
import AuthenticationVerificationRequest from './types/AuthenticationVerificationRequest';

function elaborateHeader() {
  const Timestamp = new Date().getTime();
  return {
    Timestamp,
  };
}

/*
  More Info at: https://docs.firstdata.com/org/FDMexico/docs/api#create-primary-transaction
*/
export function create(transaction: PrimaryTransaction): Promise<AxiosResponse<any>> {
  validateConfig();
  const endpoint = `${config.isProduction ? production : sandbox}/payments`;
  return axios.post(endpoint, transaction, {
    headers: elaborateHeader(),
  });
}

/*
  More Info at: https://docs.firstdata.com/org/FDMexico/docs/api#transaction-inquiry
*/
export function transactionInquiry(transactoinId: string): Promise<AxiosResponse<any>> {
  validateConfig();
  const endpoint = `${config.isProduction ? production : sandbox}/payments/${transactoinId}`;
  return axios.get(endpoint, {
    headers: elaborateHeader(),
  });
}

/*
  More Info at: https://docs.firstdata.com/org/FDMexico/docs/api#finalize-secure-transaction
*/

export function finalizeSecureTransaction(
  transactoinId: string,
  authVerificationReq: AuthenticationVerificationRequest
): Promise<AxiosResponse<any>> {
  validateConfig();
  const endpoint = `${config.isProduction ? production : sandbox}/payments/${transactoinId}`;
  return axios.patch(endpoint, authVerificationReq, {
    headers: elaborateHeader(),
  });
}
