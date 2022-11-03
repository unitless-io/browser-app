import { requestsFactory } from 'redux-requests-factory';

import { api, ENDPOINTS } from '@app/api';

const request = (): Promise<void> => api.delete(ENDPOINTS.DELETE_ALL_CALLS);

export const { doRequestAction: deleteAllCallsAction } = requestsFactory({
  request,
  stateRequestKey: 'delete-all-calls',
  fulfilledActions: [
    () => {
      window.location.reload();

      return null;
    },
  ],
});

export const deleteAllCallsActions = { deleteAllCallsAction };
