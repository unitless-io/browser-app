import { requestsFactory } from 'redux-requests-factory';

import type { Function } from '../../../types/api/function';
import type { FunctionId } from '../../../types/api/queryParams';
import { api, ENDPOINTS } from '../../index';

const request = (args: FunctionId): Promise<Function> => api.get(ENDPOINTS.FUNCTION(args));

export const {
  loadDataAction: loadFunctionAction,
  responseSelector: functionResponseSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'function',
  serializeRequestParameters: ({ fileId, funcName }: FunctionId) => `${fileId}:${funcName}`,
  transformResponse: (response: Function | undefined) => response || null,
});

export const functionActions = { loadFunctionAction };
