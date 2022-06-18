import { useParams } from 'react-router-dom';
import FunctionCalls from '../components/FunctionCalls/FunctionCalls';
import FunctionInfo from '../components/FunctionInfo/FunctionInfo';

const Function = (props: any) => {
  const { funcId } = useParams();
  return <>
    <FunctionInfo funcId={funcId} />
    <FunctionCalls funcId={funcId} />
  </>;
};

export default Function;
