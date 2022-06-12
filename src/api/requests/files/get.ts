import { requestsFactory } from 'redux-requests-factory';

import type { File } from '../../../types/api/file';
import { api, ENDPOINTS } from '../../index';

const request = (appId: string): Promise<File[]> => api.get(ENDPOINTS.FILES(appId));

export const {
  loadDataAction: loadFilesAction,
  responseSelector: filesResponseSelector,
  isLoadedSelector: areLoadedFilesSelector,
} = requestsFactory({
  request,
  stateRequestKey: 'files',
  serializeRequestParameters: (appId: string) => appId,
  transformResponse: (response: File[] | undefined) => response || [],
});
