import type { RouterState } from 'redux-first-history';
import type { stateRequestsKey, RequestsState } from 'redux-requests-factory';

export interface RootState {
  router: RouterState;
  [stateRequestsKey]: RequestsState;
}
