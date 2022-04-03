import { combineEpics } from 'redux-observable';

import appEpic from './entities/app/epics';

export default combineEpics(appEpic);
