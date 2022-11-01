import { requestsFactory } from 'redux-requests-factory';

import type { Function } from '@app/types/api/function';
import type { QueryParams } from '@app/types/api/queryParams';
import { api, ENDPOINTS } from '@app/api';

const request = (fileId: QueryParams['fileId']): Promise<Function['name'][]> => api.get(ENDPOINTS.FUNCTIONS(fileId));

export const {
  loadDataAction: loadFunctionsAction,
  responseSelector: functionsResponseSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'functions',
  serializeRequestParameters: (fileId: string) => `${fileId}`,
  transformResponse: (response: Function['name'][] | undefined) => response || [],
});

export const functionsActions = { loadFunctionsAction };
