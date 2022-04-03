import { combineReducers, Reducer } from 'redux';
import { stateRequestsKey, requestsReducer } from 'redux-requests-factory';

import { RootState } from '../types/store/state';
import { RootAction } from '../types/store/actions';

const rootReducer: Reducer<RootState, RootAction> = combineReducers<RootState>({
  [stateRequestsKey]: requestsReducer,
});

export default rootReducer;
