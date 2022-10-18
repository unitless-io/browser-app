import { ReactComponent as Logo } from '../../assets/images/logos/logo-white.svg';
import { ReactComponent as MailIcon } from '../../assets/images/icons/mail-icon.svg';
import { ReactComponent as TwitterIcon } from '../../assets/images/icons/twitter-icon.svg';
import { ReactComponent as WhatsappIcon } from '../../assets/images/icons/whatsapp-icon.svg';

import { Link, Typography } from '@mui/material';
import RouterLink from '../RouterLink';
import RouterButton from '../RouterButton';
import { ROUTES } from '../../router/constants';

import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='responsive-container'>
        <div className='logo'>
          <Logo />
        </div>

        <div className='content-links'>
          <RouterLink
            to={ROUTES.PRIVACY_POLICY}
            underline='none'
            color='white'
            className='mb-8'
          >
            <Typography variant='body2'>
              PRIVACY POLICY
            </Typography>
          </RouterLink>
          <RouterLink
            to={ROUTES.TERMS}
            underline='none'
            color='white'
            className='mb-20'
          >
            <Typography variant='body2'>
              TERMS OF USE
            </Typography>
          </RouterLink>
          <RouterButton
            to={ROUTES.SIGN_IN}
            variant='outlined'
          >
            <Typography variant='body2'>
              REGISTER
            </Typography>
          </RouterButton>
        </div>

        <div className='social-media-links'>
          <Link href='#'>
            <MailIcon className='social-media-icon'/>
          </Link>
          <Link href='#'>
            <TwitterIcon className='social-media-icon'/>
          </Link>
          <Link href='#'>
            <WhatsappIcon className='social-media-icon'/>
          </Link>
        </div>
      </div>
    </div>
  );
};
