import { useEffect } from 'react';
import type { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

import { RootAction } from '../types/store/actions';

const useInit = (onInit: (...params: any[]) => RootAction, extraDeps: any[] = []): void => {
  const dispatch: Dispatch<RootAction> = useDispatch();

  useEffect(() => {
    dispatch(onInit());
  }, [onInit, dispatch, ...extraDeps]);
};

export default useInit;
