import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';

import FunctionCalls from '../components/FunctionCalls/FunctionCalls';
import FunctionInfo from '../components/FunctionInfo/FunctionInfo';

const Function = (props: any) => {
  const { funcId } = useParams();
  return <Container maxWidth="md">
    <FunctionInfo funcId={funcId} />
    <FunctionCalls funcId={funcId} />
  </Container>;
};

export default Function;
