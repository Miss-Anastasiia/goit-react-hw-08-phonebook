import { createTheme } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(161 240 226)',
      light: 'rgb(21,76,121)',
      dark: '#7700ff',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
});

export const light = {
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(21,76,121)',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      main: '#fff',
    },
  },
};

export const dark = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#7700ff',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      main: '#757575',
    },
  },
};