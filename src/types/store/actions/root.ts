import type { ApiActions } from './api-actions';
import type { CommonAction } from './common';

export type RootAction = ApiActions | CommonAction;
