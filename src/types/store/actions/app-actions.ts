import { ActionType } from 'typesafe-actions';

import type { appActions } from '@app/store/entities/index';

export type AppActions = ActionType<typeof appActions>;
