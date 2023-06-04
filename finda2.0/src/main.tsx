import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { GlobalStyle } from '@/globalStyles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { darkMode } from '@/globalStyles/GlobalTheme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={darkMode}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
