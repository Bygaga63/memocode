import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
      type: 'dark',

      primary: {
        light: '#9d46ff',
        main: '#41454E',
        dark: '#292F36',
        contrastText: '#fff'
      },
      secondary: {
        light: '#a255ff',
        main: '#8840F9',
        dark: '#0100ca',
        contrastText: '#000',
      },
      background: {
        default: '#292F36',
        paper: '#fff'
      },
      text: {
        primary: '#292F36',
        secondary: 'rgba(41, 47, 54, .7)',
      },
    },
});

export default theme;