import { createTheme } from '@mui/material/styles';

const poppinsFontFamily = {
  fontFamily: [
    'Poppins',
    'Arial',
    'sans-serif',
  ].join(','),
  fontWeight: 600,
};

const helveticaFontFamily = {
  fontFamily: [
    'Helvetica',
    'Arial',
    'sans-serif',
  ].join(','),
  fontWeight: 400,
};

// A custom theme for this app
const theme = createTheme({
  palette: {},
  typography: {
    ...helveticaFontFamily,

    h1: {
      ...poppinsFontFamily,
      fontSize: '128px',
      lineHeight: '192px',
    },

    h3: {
      ...poppinsFontFamily,
      fontSize: '36px',
      lineHeight: '54px',
    },

    body1: {
      ...helveticaFontFamily,
      fontSize: '20px',
      lineHeight: '27.6px',
    },

    body2: {
      ...helveticaFontFamily,
      fontSize: '15px',
      lineHeight: '21px',
    },

    button: {
      ...helveticaFontFamily,
      fontSize: '24px',
      lineHeight: '33px',
    },
 },
});

export default theme;
