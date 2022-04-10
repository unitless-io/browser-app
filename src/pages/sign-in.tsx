import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { getServerPath } from '../utils/get-server-path';
import { ENDPOINTS } from '../api';
import Copyright from '../components/Copyright';
import { useRedirectToHome } from '../hooks/use-redirect-to-home';

const handleGoogleOnClick = () => {
  window.location.href = getServerPath(ENDPOINTS.SIGN_IN);
};

export default function SignIn() {
  useRedirectToHome();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleGoogleOnClick}>
            Google
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
