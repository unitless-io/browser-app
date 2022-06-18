import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

import { loadFunctionAction, functionResponseSelector } from '../../api/requests/function';

const FunctionInfo = ({ funcId }: { funcId: string | undefined }) => {
  const dispatch = useDispatch();
  const allFunctions = useSelector(functionResponseSelector);
  const func = funcId ? allFunctions(funcId) : null;

  useEffect(() => {
    if (funcId) {
      dispatch(loadFunctionAction(funcId));
    }
  }, [dispatch, funcId]);

  return <>
    <div>{ func?.name || funcId } function</div>
    <div>{ func ? `Last called: ${new Date(func.updatedAt).toLocaleString()}` : null }</div>
  </>;
};

export default FunctionInfo;
