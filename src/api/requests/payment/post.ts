import { requestsFactory } from 'redux-requests-factory';

import { api, ENDPOINTS } from '../../index';

const request = (): Promise<void> => api.post(ENDPOINTS.PAYMENT, {});

export const { doRequestAction: doPaymentAction } = requestsFactory({
  request,
  stateRequestKey: 'payment',
});
