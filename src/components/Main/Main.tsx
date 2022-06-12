import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Apps from '../Apps/Apps';

const Main = () => {
  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <Container>
        <Typography variant="h4">Applications</Typography>
        <Box>
          <Apps />
        </Box>
      </Container>
    </>
  );
};

export default Main;
