import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ReviewsIcon from '@mui/icons-material/Reviews';
import BugReportIcon from '@mui/icons-material/BugReport';

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
          <Button
            variant="contained"
            startIcon={<ReviewsIcon />}
            color="info"
            href="https://forms.gle/7YtsmpjJev8opaRd6"
            target="_blank"
            sx={{ marginRight: 2 }}
          >
            Leave Feedback
          </Button>
          <Button
            variant="contained"
            startIcon={<BugReportIcon />}
            color="warning"
            href="https://github.com/unitless-io/loader/issues"
            target="_blank"
          >
            Report bug
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
