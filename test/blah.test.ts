import { setConfig, payments } from '../src';

describe('Request Tests', () => {
  describe('payments', () => {
    it('create', async () => {
      setConfig({
        isProduction: false,
        apiKey: 'Your api key',
        secret: 'Your secret',
      });
      const response = await payments.create({
        requestType: 'PaymentCardSaleTransaction',
        transactionAmount: {
          total: 1000,
          currency: 'MXN',
        },
        paymentMethod: {
          paymentCard: {
            number: '4004430000000007',
            securityCode: '123',
            expiryDate: {
              month: '12',
              year: '21',
            },
          },
        },
      });
      expect(response.status).toEqual(200);
    });
  });
});
