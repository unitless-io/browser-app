import { requestsFactory } from 'redux-requests-factory';

import type { FunctionCall } from '../../../types/api/functionCall';
import type { FunctionId } from '../../../types/api/queryParams';
import { api, ENDPOINTS } from '../../index';

const request = (args: FunctionId): Promise<FunctionCall[]> => api.get(ENDPOINTS.CALLS(args));

export const {
  loadDataAction: loadFunctionCallsAction,
  responseSelector: functionCallsResponseSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'function-calls',
  serializeRequestParameters: ({ fileId, funcName }: FunctionId) => `${fileId}:${funcName}`,
  transformResponse: (response: FunctionCall[] | undefined) => response || [],
});

export const functionCallsActions = { loadFunctionCallsAction };
