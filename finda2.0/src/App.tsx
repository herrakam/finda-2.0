import reactRouterObject from '@/pages/Router';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkMode, lightMode } from '@/globalStyles/GlobalTheme';
import { darkAtom } from '@/atoms/dark';
import { useAtomValue } from 'jotai';

function Apps() {
  const isDarkMode = useAtomValue(darkAtom);
  return (
    <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
      <RouterProvider router={reactRouterObject} />
    </ThemeProvider>
  );
}

export default Apps;
