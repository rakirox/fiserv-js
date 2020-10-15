import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Config from './types/Config';

export const sandbox: String = 'https://prod.api.firstdata.com/gateway/v2/';
export const production: String = 'https://cert.api.firstdata.com/gateway/v2/';
const contentType: String = 'application/json';

export const config: Config = {
  isProduction: false,
  clientRequestId: uuidv4(),
  apiKey: undefined,
};

export function validateConfig() {
  if (!config.apiKey) throw new Error('No Api Key Configured');
}

export function setConfig(_config: Config): void {
  if (!_config.apiKey) {
    throw new Error('No Api Key Found');
  }
  config.isProduction = _config.isProduction;
  config.clientRequestId = _config.clientRequestId ?? config.clientRequestId;
  config.apiKey = _config.apiKey;
  axios.defaults.headers.common['Client-Request-Id'] = config.clientRequestId;
  axios.defaults.headers.common['Api-Key'] = config.apiKey;
  axios.defaults.headers.post['Content-Type'] = contentType;
  axios.defaults.headers.patch['Content-Type'] = contentType;
  axios.defaults.headers.update['Content-Type'] = contentType;
}
