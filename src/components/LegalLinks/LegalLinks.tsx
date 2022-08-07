import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function LegalLinks(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      <Link color="inherit" href="/privacy-policy">
        Privacy Policy
      </Link>
      {' | '}
      <Link color="inherit" href="/terms">
        Terms of Service
      </Link>
    </Typography>
  );
}
