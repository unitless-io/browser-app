import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import FunctionCalls from '../components/FunctionCalls/FunctionCalls';
import FunctionInfo from '../components/FunctionInfo/FunctionInfo';

const Function = (props: any) => {
  const { fileId, funcName } = useParams();
  return <Container maxWidth="md">
    <FunctionInfo fileId={fileId} funcName={funcName} />
    <Typography variant="h5" sx={{ margin: 1 }}>Calls</Typography>
    <FunctionCalls fileId={fileId} funcName={funcName} />
  </Container>;
};

export default Function;
