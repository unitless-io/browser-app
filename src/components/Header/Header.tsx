import { ReactComponent as Logo } from '../../assets/images/logos/logo-black.svg';
import { Typography } from '@mui/material';

import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='responsive-container'>
        <div className='logo'>
          <Logo />
          <Typography variant='body1'>UNITLESS</Typography>
        </div>
      </div>
    </div>
  );
};
