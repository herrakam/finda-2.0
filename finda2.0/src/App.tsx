import { darkMode } from '@/globalStyles/GlobalTheme';
import Index from '@/pages/Index';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function Apps() {
  return (
    <ThemeProvider theme={darkMode}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Apps;
