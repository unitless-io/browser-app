import { requestsFactory } from 'redux-requests-factory';

import type { Application } from '../../../types/api/application';
import { api, ENDPOINTS } from '../../index';

const request = (): Promise<Application[]> => api.get(ENDPOINTS.APPLICATIONS);

export const {
  loadDataAction: loadAppsAction,
  responseSelector: appsResponseSelector,
  isLoadedSelector: areLoadedAppsSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'apps',
});
