import { ReactComponent as Logo } from '../../assets/images/logo/logo.svg';
import { Link, Typography } from '@mui/material';

import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='responsive-container'>
        <Link className='logo' href='/' underline='none'>
          <Logo width='35px' height='35px' />
          <Typography variant='body1'>UNITLESS</Typography>
        </Link>
      </div>
    </div>
  );
};
