import { ActionType } from 'typesafe-actions';

import type { appActions } from '../../../store/entities/index';

export type AppActions = ActionType<typeof appActions>;
