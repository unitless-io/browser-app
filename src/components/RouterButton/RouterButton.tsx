import { Link } from 'react-router-dom';
import Button, { ButtonProps } from '@mui/material/Button';

interface Props extends ButtonProps<typeof Link> {};

export default function RouterButton({
  children,
  ...props
}: Props) {
  return (
    <Button
      {...props}
      component={Link}
    >
      {children}
    </Button>
  );
};
