import { requestsFactory } from 'redux-requests-factory';

import { api, ENDPOINTS } from '../../index';

const request = (): Promise<{ redirectUrl: string }> => api.post(ENDPOINTS.PAYMENT, {});

export const { doRequestAction: doPaymentAction } = requestsFactory({
  request,
  stateRequestKey: 'payment',
  fulfilledActions: [
    ({ response: { redirectUrl } }) => {
      window.location.href = redirectUrl;
      return null;
    },
  ],
});
