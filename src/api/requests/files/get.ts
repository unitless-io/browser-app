import { requestsFactory } from 'redux-requests-factory';

import type { File } from '../../../types/api/file';
import { api, ENDPOINTS } from '../../index';

const request = (): Promise<File[]> => api.get(ENDPOINTS.FILES);

export const { forcedLoadDataAction: loadFilesAction, responseSelector: filesResponseSelector } = requestsFactory({
  request,
  stateRequestKey: 'files',
  transformResponse: (response: File[] | undefined) => response || [],
});

export const fileActions = { loadFilesAction };
