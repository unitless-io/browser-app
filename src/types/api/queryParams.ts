export type QueryParams = {
  fileId: string;
  funcName: string;
  callIds: string[];
};

export type FunctionId = Pick<QueryParams, 'fileId' | 'funcName'>;
