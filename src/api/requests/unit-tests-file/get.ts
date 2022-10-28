import { requestsFactory } from 'redux-requests-factory';

import type { QueryParams } from '../../../types/api/queryParams';
import type { UnitTestsFile } from '../../../types/api/unitTestsFile';
import { api, ENDPOINTS } from '../../index';

const request = (args: QueryParams): Promise<UnitTestsFile> => api.getDownloadUrl(ENDPOINTS.UNIT_TESTS_FILE(args));

export const {
  loadDataAction: downloadUnitTestsFileAction,
  responseSelector: unitTestsFileResponseSelector,
  requestFulfilledAction: downloadUnitTestsFileFulfilledAction,
} = requestsFactory({
  request,
  stateRequestKey: 'unit-tests-file',
  serializeRequestParameters: ({ fileId, funcName, callIds }: QueryParams) => `${fileId}:${funcName}:${callIds}`,
  dispatchFulfilledActionForLoadedRequest: true,
});

export const downloadUnitTestsFileActions = { downloadUnitTestsFileAction, downloadUnitTestsFileFulfilledAction };
