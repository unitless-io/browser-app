import { Link } from 'react-router-dom';
import MUILink, { LinkProps } from '@mui/material/Link';

interface Props extends LinkProps<typeof Link> {};

export default function RouterLink({
  children,
  ...props
}: Props) {
  return (
    <MUILink
      {...props}
      component={Link}
    >
      {children}
    </MUILink>
  );
};
