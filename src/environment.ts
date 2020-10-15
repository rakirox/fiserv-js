import axios from 'axios';
import Config from './types/Config';

export const sandbox: String = 'https://prod.api.firstdata.com/gateway/v2/';
export const production: String = 'https://cert.api.firstdata.com/gateway/v2/';
const contentType: String = 'application/json';

export const config: Config = {
  isProduction: false,
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
  config.apiKey = _config.apiKey;
  axios.defaults.headers.common['Api-Key'] = config.apiKey;
  axios.defaults.headers.common['Content-Type'] = contentType;
}
