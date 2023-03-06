import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    // primary: {},
    customRibRed: {
      main: red[400],
      superDark: red[800],
      superLight: red[100],
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});
