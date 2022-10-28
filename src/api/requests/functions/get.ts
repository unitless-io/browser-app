import { requestsFactory } from 'redux-requests-factory';

import type { Function } from '../../../types/api/function';
import type { QueryParams } from '../../../types/api/queryParams';
import { api, ENDPOINTS } from '../../index';

const request = (fileId: QueryParams['fileId']): Promise<Function[]> => api.get(ENDPOINTS.FUNCTIONS(fileId));

export const {
  loadDataAction: loadFunctionsAction,
  responseSelector: functionsResponseSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'functions',
  serializeRequestParameters: (fileId: string) => `${fileId}`,
  transformResponse: (response: Function[] | undefined) => response || [],
});

export const functionsActions = { loadFunctionsAction };
