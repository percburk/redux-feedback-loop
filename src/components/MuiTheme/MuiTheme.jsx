import { createMuiTheme } from '@material-ui/core/styles';

// color palette, font selections, and some custom typography
const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#c51162',
    },
    error: {
      main: '#c51162',
    },
    success: {
      main: '#00796b',
    },
  },
  typography: {
    fontFamily: 'Roboto Slab',
    fontSize: 13,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightBold: 700,
    h6: {
      fontSize: 16,
    },
    button: {
      fontFamily: 'Open Sans',
      fontWeight: 400,
    },
  },
});

export default MuiTheme;
