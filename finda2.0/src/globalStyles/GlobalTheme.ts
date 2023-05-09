import { DefaultTheme } from 'styled-components';

const typographyContent = {
  Title: { fontWeight: 900, fontSize: '40px' },
  Bold: { fontWeight: 700, fontSize: '20px' },
  Regular: { fontWeight: 500, fontSize: '16px' },
  Light: { fontWeight: 300, fontSize: '13px' },
  Thin: { fontWeight: 100, fontSize: '10px' },
};
const globalTheme: DefaultTheme = {
  pallete: {
    primary: '#1DC078',
    secondary: '#3298dc',
    warning: '#f00',
    focus: '#e3bc1c',
    grey1: '#20232a',
    grey2: '#333333',
    grey3: '#828282',
    grey4: '#BDBDBD',
    grey5: '#E0E0E0',
    grey6: '#F5F5F7',
    black: '#010101',
    white: '#FFFFFF',
    normalBg: '#ffffff',
    normalBtn: '#f2f2f2',
    normalFont: '#010101',
  },
  typography: {
    ...typographyContent,
  },
};

const lightMode: DefaultTheme = {
  pallete: {
    primary: '#1DC078',
    secondary: '#3298dc',
    warning: '#f00',
    focus: '#e3bc1c',
    grey1: '#20232a',
    grey2: '#333333',
    grey3: '#828282',
    grey4: '#BDBDBD',
    grey5: '#E0E0E0',
    grey6: '#F5F5F7',
    black: '#010101',
    white: '#FFFFFF',
    normalBg: '#ffffff',
    normalBtn: '#f2f2f2',
    normalFont: '#010101',
  },
  typography: {
    ...typographyContent,
  },
};

const darkMode: DefaultTheme = {
  pallete: {
    primary: '#1DC078',
    secondary: '#3298dc',
    warning: '#f00',
    focus: '#e3bc1c',
    grey1: '#20232a',
    grey2: '#333333',
    grey3: '#828282',
    grey4: '#BDBDBD',
    grey5: '#E0E0E0',
    grey6: '#F5F5F7',
    black: '#010101',
    white: '#FFFFFF',
    normalBtn: '#272727',
    normalBg: ' #0f0f0f',
    normalFont: '#FFFFFF',
  },
  typography: { ...typographyContent },
};
export { lightMode, darkMode, globalTheme };
