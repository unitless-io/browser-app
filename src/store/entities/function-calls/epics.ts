import { combineEpics, Epic } from 'redux-observable';
import { filter, tap, ignoreElements } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import {downloadUnitTestsFileAction, downloadUnitTestsFileFulfilledAction} from '../../../api/requests';
import { RootAction } from '../../../types/store/actions';
import { RootState } from '../../../types/store/state';

const downloadUnitTestsFileNotificationEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(downloadUnitTestsFileAction)),
    tap(() => { /* TODO: send notification that download will start soon */ }),
    ignoreElements(),
  );

const downloadUnitTestsFileEpic: Epic<RootAction, RootAction, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(downloadUnitTestsFileFulfilledAction)),
    tap(() => { setTimeout(() => document.getElementById('file-download')?.click(), 0) }),
    ignoreElements(),
  );

export default combineEpics(downloadUnitTestsFileNotificationEpic, downloadUnitTestsFileEpic);
