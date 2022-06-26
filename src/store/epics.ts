import { combineEpics } from 'redux-observable';

import appEpic from './entities/app/epics';
import functionCalls from './entities/function-calls/epics';

export default combineEpics(appEpic, functionCalls);
