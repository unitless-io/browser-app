import type { ApiActions } from './api-actions';
import { AppActions } from './app-actions';

export type RootAction = ApiActions | AppActions;
