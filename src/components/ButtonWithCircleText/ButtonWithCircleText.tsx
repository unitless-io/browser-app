import { IconButton, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import './ButtonWithCircleText.scss';

export default function Card() {
  return (
    <div className='button-with-circle-text'>
      <IconButton
        href='https://www.youtube.com/watch?v=lxW4tBuhCl8'
      >
        <PlayArrowIcon />
      </IconButton>

      <div className='circle-text'>
        <Typography
          variant='button'
        >
          {
            'check out our demo check out our demo check out our demo'.split('')
              .map((char, ind) => (
                <span
                  className={'char' + ind + ' ' + 'green'}
                  key={'char' + ind}
                >
                  {char}
                </span>
              ))
          }
        </Typography>
      </div>
    </div>
  );
};
