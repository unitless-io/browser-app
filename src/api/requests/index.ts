import { fileActions } from './files';
import { functionsActions } from './functions';
import { functionActions } from './function';
import { loadFunctionCallsAction } from './function-calls';
import { downloadUnitTestsFileActions } from './unit-tests-file';

export * from './files';
export * from './functions'
export * from './function-calls';
export * from './function';
export * from './unit-tests-file';

export const apiActions = { ...fileActions, ...functionsActions, ...functionActions, ...loadFunctionCallsAction, ...downloadUnitTestsFileActions };
