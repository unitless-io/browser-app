import { requestsFactory } from 'redux-requests-factory';

import type { Function } from '../../../types/api/function';
import { api, ENDPOINTS } from '../../index';

const request = (fileId: string): Promise<Function[]> => api.get(ENDPOINTS.FUNCTIONS(fileId));

export const {
  loadDataAction: loadFunctionsAction,
  responseSelector: functionsResponseSelector,
  isLoadedSelector: areLoadedFunctionsSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'functions',
  serializeRequestParameters: (fileId: string) => `${fileId}`,
  transformResponse: (response: Function[] | undefined) => response || [],
});
