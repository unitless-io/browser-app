import { requestsFactory } from 'redux-requests-factory';

import { api, ENDPOINTS } from '../../index';

const request = ({ funcId, callIds }: { funcId: string; callIds: string[] }): Promise<{ file: string, fileName: string }> => api.getDownloadUrl(ENDPOINTS.UNIT_TESTS_FILE({ funcId, callIds }));

export const {
  loadDataAction: downloadUnitTestsFileAction,
  responseSelector: unitTestsFileResponseSelector,
  requestFulfilledAction: downloadUnitTestsFileFulfilledAction,
} = requestsFactory({
  request,
  stateRequestKey: 'unit-tests-file',
  serializeRequestParameters: ({ funcId, callIds }: { funcId: string; callIds: string[] }) => `${funcId}-${callIds}`,
  dispatchFulfilledActionForLoadedRequest: true,
});
