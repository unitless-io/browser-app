import { FunctionId, QueryParams } from '../types/api/queryParams';

export const ENDPOINTS = {
  FILES: '/files',
  FUNCTIONS: (fileId: QueryParams['fileId']) => `/functions?fileId=${fileId}`,
  FUNCTION: ({ fileId, funcName }: FunctionId) => `/functions/${funcName}?fileId=${fileId}`,
  CALLS: ({ fileId, funcName }: FunctionId) => `/calls?fileId=${fileId}&funcName=${funcName}`,
  UNIT_TESTS_FILE: ({ fileId, funcName, callIds }: QueryParams) =>
    `/unit-tests?fileId=${fileId}&funcName=${funcName}&callIds=${callIds.join(',')}`,
};
