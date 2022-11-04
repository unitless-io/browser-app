import * as React from 'react';
import Container from '@mui/material/Container';

import Files from '../components/Files';

export default function Home() {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: '24px' }}>
        <Files />
      </Container>
    </>
  );
}
