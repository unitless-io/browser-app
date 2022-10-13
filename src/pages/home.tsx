import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className='page-container'>
      <ThemeProvider theme={theme}>
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </div>
  );
};
