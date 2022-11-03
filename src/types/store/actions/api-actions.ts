import { ActionType } from 'typesafe-actions';

import { apiActions } from '@app/api/requests';

export type ApiActions = ActionType<typeof apiActions>;
