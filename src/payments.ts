import axios, { AxiosResponse } from 'axios';
import { config, production, sandbox, validateConfig } from './environment';
import PrimaryTransaction from './types/PrimaryTransaction';

function elaborateHeader() {
  const Timestamp = new Date().getTime();
  return {
    Timestamp,
  };
}

export function create(transaction: PrimaryTransaction): Promise<AxiosResponse<any>> {
  validateConfig();
  const endpoint = `${config.isProduction ? production : sandbox}/payments`;
  return axios.post(endpoint, transaction, {
    headers: elaborateHeader(),
  });
}
