import createMuiTheme from "@material-ui/core/styles/createMuiTheme"

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: "4em"
    }
  },
  palette: {
    // type: 'dark',

    primary: {
      // light: '#9d46ff',
      main: "#41454E",
      // dark: '#292F36',
      // contrastText: "#fff"
    },
    secondary: {
      // light: '#a255ff',
      main: "#fff",
      // main: '#8840F9',
      // dark: '#0100ca',
      contrastText: "#292F36"
    },
    background: {
      default: "#191919",
      paper: "#FFF"
    },
    text: {
      primary: "#292F36",
      secondary: "rgba(41, 47, 54, .7)"
    }
  },
  overrides: {
    MuiFab: {
      root: {
        "&.MuiFab-secondary": {
          background: "#3AB54A",
          color: "#fff"
        }
      }
    },
    MuiInput: {
      input: {
        '&.MuiInputBase-input': {
          color: "#fff",
          fontSize: '0.8rem'
        }
        // color: "white", // if you also want to change the color of the input, this is the prop you'd use
      }
    }
  }
})

export default theme