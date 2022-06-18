import { requestsFactory } from 'redux-requests-factory';

import type { Function } from '../../../types/api/function';
import { api, ENDPOINTS } from '../../index';

const request = (funcId: string): Promise<Function> => api.get(ENDPOINTS.FUNCTION(funcId));

export const {
  loadDataAction: loadFunctionAction,
  responseSelector: functionResponseSelector,
  isLoadedSelector: isLoadedFunctionSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'function',
  serializeRequestParameters: (funcId: string) => `${funcId}`,
  transformResponse: (response: Function | undefined) => response || null,
});
