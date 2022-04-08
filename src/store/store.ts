import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createRequestsFactoryMiddleware } from 'redux-requests-factory';
import { composeWithDevTools } from 'redux-devtools-extension';

import { RootState } from '../types/store/state';
import { RootAction } from '../types/store/actions';

import rootReducer from './reducers';
import epics from './epics';
import { createReduxHistory, routerMiddleware } from './history';

const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();
const { middleware: requestsFactoryMiddleware } = createRequestsFactoryMiddleware();

const middleware = [epicMiddleware, requestsFactoryMiddleware, routerMiddleware];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);

epicMiddleware.run(epics);

export const history = createReduxHistory(store);
