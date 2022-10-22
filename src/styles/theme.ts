import { createTheme } from '@mui/material/styles';

const poppinsFontFamily = {
  fontFamily: [
    'Poppins',
    'Arial',
    'sans-serif',
  ].join(','),
  fontWeight: 600,
};

const robotoFontFamily = {
  fontFamily: [
    'Roboto',
    'Arial',
    'sans-serif',
  ].join(','),
  fontWeight: 300,
};

// A custom theme for this app
const theme = createTheme({
  palette: {},
  typography: {
    ...robotoFontFamily,

    h1: {
      ...poppinsFontFamily,
      fontSize: '8rem',
      lineHeight: '12rem',
      ['@media (max-width: 576px)']: {
        fontSize: '48px',
        lineHeight: '72px',
      }
    },

    h3: {
      ...poppinsFontFamily,
      fontSize: '2.25rem',
      lineHeight: '3.375rem',
      ['@media (max-width: 576px)']: {
        fontSize: '24px',
        lineHeight: '36px',
      }
    },

    body1: {
      ...robotoFontFamily,
      fontSize: '1.25rem',
      lineHeight: '1.725rem',
      ['@media (max-width: 576px)']: {
        fontSize: '16px',
        lineHeight: '22px',
      }
    },

    body2: {
      ...robotoFontFamily,
      fontSize: '1rem',
      lineHeight: '1.3rem',
      ['@media (max-width: 576px)']: {
        fontSize: '12px',
        lineHeight: '17px',
      }
    },

    button: {
      ...robotoFontFamily,
      fontSize: '1.5rem',
      lineHeight: '2.1rem',
      ['@media (max-width: 576px)']: {
        fontSize: '18px',
        lineHeight: '25px',
      }
    },
 },
});

export default theme;
