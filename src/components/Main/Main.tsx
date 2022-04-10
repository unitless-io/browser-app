import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';

import { userResponseSelector } from '../../api/requests/user';

const Main = () => {
  const user = useSelector(userResponseSelector);

  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6" component="div">
            Token: {user?.appToken}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Main;
