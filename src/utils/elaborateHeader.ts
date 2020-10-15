import { v4 as uuidv4 } from 'uuid';

export default function elaborateHeader() {
  const timestamp = new Date().getTime();
  const clientRequestId = uuidv4();
  return {
    Timestamp: timestamp,
    'Client-Request-Id': clientRequestId,
  };
}
