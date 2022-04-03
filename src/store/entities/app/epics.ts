import { combineEpics, Epic } from 'redux-observable';
import { mergeMap, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { RootAction } from '../../../types/store/actions';
import { RootState } from '../../../types/store/state';

import { initAppAction } from './actions';

export const initAppEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(initAppAction)),
    mergeMap(() => {
      console.log('!!!!!!');
      return [];
    })
  );

export default combineEpics(initAppEpic);
