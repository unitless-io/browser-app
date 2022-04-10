import { combineEpics, Epic } from 'redux-observable';
import { mergeMap, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { replace } from 'redux-first-history';

import { RootAction } from '../../../types/store/actions';
import { RootState } from '../../../types/store/state';
import { initAppAction } from './actions';
import { loadUserAction, loadUserRejectedAction } from '../../../api/requests/user';
import { ROUTES } from '../../../router/constants';

const initAppEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(initAppAction)),
    mergeMap(() => {
      return [loadUserAction()];
    })
  );

const redirectToSignInEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(loadUserRejectedAction)),
    mergeMap(() => {
      return [replace(ROUTES.SIGN_IN)];
    })
  );

export default combineEpics(initAppEpic, redirectToSignInEpic);
