import { ReactComponent as Logo } from '../../assets/images/logos/logo-white.svg';
import { ReactComponent as MailIcon } from '../../assets/images/icons/mail-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twitter-icon.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/images/icons/whatsapp-icon.svg';

import { Button, Link, Typography } from '@mui/material';

import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='responsive-container'>
        <div className='logo'>
          <Logo />
        </div>

        <div className='content-links'>
          <Link
            href='/privacy-policy'
            underline='none'
            color='white'
            className='mb-8'
          >
            <Typography variant='body2'>
              PRIVACY POLICY
            </Typography>
          </Link>
          <Link
            href='/terms'
            underline='none'
            color='white'
            className='mb-20'
          >
            <Typography variant='body2'>
              TERMS OF USE
            </Typography>
          </Link>
          <Button
            variant='outlined'
            href='/sign-in'
          >
            <Typography variant='body2'>
              REGISTER
            </Typography>
          </Button>
        </div>

        <div className='social-media-links'>
          <Link href='#'>
            <MailIcon />
          </Link>
          <Link href='#'>
            <TwitterIcon />
          </Link>
          <Link href='#'>
            <WhatsappIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
