import { ActionType } from 'typesafe-actions';

import { apiActions } from '../../../api/requests';

export type ApiActions = ActionType<typeof apiActions>;
