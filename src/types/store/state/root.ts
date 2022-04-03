import type { stateRequestsKey, RequestsState } from 'redux-requests-factory';

export interface RootState {
  [stateRequestsKey]: RequestsState;
}
