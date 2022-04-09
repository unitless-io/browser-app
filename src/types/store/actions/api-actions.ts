import { ActionType } from 'typesafe-actions';

import { loadUserAction } from '../../../api/requests/user';

const apiActions = { loadUserAction };

export type ApiActions = ActionType<typeof apiActions>;
