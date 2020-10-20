import { v4 as uuidv4 } from 'uuid';
import { config, contentType } from '../environment';
import CryptoJS from 'crypto-js';

export default function elaborateHeader(payload?: any) {
  const timestamp = new Date().getTime();
  const clientRequestId = uuidv4();
  const signature = `${config.apiKey}${clientRequestId}${timestamp}${
    payload ? JSON.stringify(payload) : ''
  }`;
  var hash = CryptoJS.HmacSHA256(signature, config.secret!);
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  return {
    'Content-Type': contentType,
    'Client-Request-Id': clientRequestId,
    'Api-Key': config.apiKey,
    Timestamp: timestamp,
    'Message-Signature': hashInBase64,
  };
}
