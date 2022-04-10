import { requestsFactory } from 'redux-requests-factory';

import { User } from '../../../types/api/user';
import { api, ENDPOINTS } from '../../index';

const request = (): Promise<User | null> => api.get(ENDPOINTS.USER);

export const {
  loadDataAction: loadUserAction,
  responseSelector: userResponseSelector,
  requestRejectedAction: loadUserRejectedAction,
} = requestsFactory({
  request,
  stateRequestKey: 'user',
});
