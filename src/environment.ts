import axios from 'axios';
import Config from './types/Config';

export const production: String = 'https://prod.api.firstdata.com/gateway/v2';
export const sandbox: String = 'https://cert.api.firstdata.com/gateway/v2';
export const contentType: String = 'application/json';

export const config: Config = {
  isProduction: false,
  apiKey: undefined,
  secret: undefined,
};

export function validateConfig() {
  if (!config.apiKey) throw new Error('No Api Key Configured');
  if (!config.secret) throw new Error('No Secret Configured');
}

export function setConfig(_config: Config): void {
  if (!_config.apiKey) {
    throw new Error('No Api Key Found');
  }
  config.isProduction = _config.isProduction;
  config.apiKey = _config.apiKey;
  config.secret = _config.secret;
  axios.defaults.adapter = require('axios/lib/adapters/http');
}
