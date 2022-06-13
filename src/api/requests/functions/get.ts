import { requestsFactory } from 'redux-requests-factory';

import type { Function } from '../../../types/api/function';
import { api, ENDPOINTS } from '../../index';

interface FunctionsRequest {
  appId: string;
  fileId: string;
}

const request = ({ appId, fileId }: FunctionsRequest): Promise<Function[]> => api.get(ENDPOINTS.FUNCTIONS(appId, fileId));

export const {
  loadDataAction: loadFunctionsAction,
  responseSelector: functionsResponseSelector,
  isLoadedSelector: areLoadedFunctionsSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'functions',
  serializeRequestParameters: ({ appId, fileId }: FunctionsRequest) => `${appId}-${fileId}`,
  transformResponse: (response: Function[] | undefined) => response || [],
});
