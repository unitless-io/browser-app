import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { isSomethingLoadingSelector } from 'redux-requests-factory';
import { useSelector } from 'react-redux';

const Loading: FC = () => {
  const isSomethingLoading = useSelector(isSomethingLoadingSelector);

  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isSomethingLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
