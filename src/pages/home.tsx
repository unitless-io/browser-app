import * as React from 'react';
import Container from '@mui/material/Container';

import Files from '../components/Files';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: '24px' }}>
        <Typography variant="h6">Files</Typography>
        <Files />
      </Container>
    </>
  );
}
