import { requestsFactory } from 'redux-requests-factory';

import type { FunctionCall } from '../../../types/api/functionCall';
import { api, ENDPOINTS } from '../../index';

const request = (funcId: string): Promise<FunctionCall[]> => api.get(ENDPOINTS.CALLS(funcId));

export const {
  loadDataAction: loadFunctionCallsAction,
  responseSelector: functionCallsResponseSelector,
  isLoadedSelector: areLoadedFunctionCallsSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'function-calls',
  serializeRequestParameters: (funcId: string) => `${funcId}`,
  transformResponse: (response: FunctionCall[] | undefined) => response || [],
});
