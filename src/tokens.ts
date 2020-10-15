import axios, { AxiosResponse } from 'axios';
import { config, production, sandbox, validateConfig } from './environment';
import elaborateHeader from './utils/elaborateHeader';
import PaymentTokenizationRequest from './types/PaymentTokenizationRequest';

/*
  More Info at: https://docs.firstdata.com/org/FDMexico/docs/api#token-creation
*/
export function create(tokenization: PaymentTokenizationRequest): Promise<AxiosResponse<any>> {
  validateConfig();
  const endpoint = `${config.isProduction ? production : sandbox}/payment-tokens`;
  return axios.post(endpoint, tokenization, {
    headers: elaborateHeader(),
  });
}

/*
  More Info at: https://docs.firstdata.com/org/FDMexico/docs/api#transaction-inquiry
*/
export function del(tokenId: string): Promise<AxiosResponse<any>> {
  validateConfig();
  const endpoint = `${config.isProduction ? production : sandbox}/payment-tokens/${tokenId}`;
  return axios.delete(endpoint, {
    headers: elaborateHeader(),
  });
}
