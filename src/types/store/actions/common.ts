import { ActionType } from 'typesafe-actions';

import * as appActions from '../../../store/entities/app/actions';

const commonAction = {
  ...appActions,
};

export type CommonAction = ActionType<typeof commonAction>;
