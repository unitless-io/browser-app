import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import RemoveAllCallsButton from '@app/components/RemoveAllCallsButton';

const ResponsiveAppBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              UNITLESS
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1 }}></Box>
          <RemoveAllCallsButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
