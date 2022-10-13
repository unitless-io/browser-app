import { Card as MUICard, CardContent } from '@mui/material';
import { CardProps } from '@mui/material/Card';

import colors from '../../styles/style.scss';

interface Props extends CardProps {
  isActive?: boolean;
};

const cardStyles = {
  height: '100%',
  padding: '21px',
  borderRadius: '0px',
  boxShadow: '0px 30px 45px rgba(0, 0, 0, 0.1)',
};

const activeCard = {
  borderLeft: `32px solid ${colors.lightBlue}`
};

const inactiveCard = {
  backgroundColor: colors.lightGray,
  borderLeft: `32px solid ${colors.mediumGray}`,
};

export default function Card({
  isActive = true,
  children,
  sx,
  ...props
}: Props) {
  return (
    <MUICard
      sx={{
        ...cardStyles,
        ...isActive ? activeCard : inactiveCard,
        ...sx
      }}
      {...props}
    >
      <CardContent sx={{ padding: 0 }}>
        {children}
      </CardContent>
    </MUICard>
  );
};
