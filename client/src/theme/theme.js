import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
        main: '#673ab7', 
        light: '#9575cd',
        dark: '#512da8',
        contrastText: '#fff',
    },
    secondary: {
        main: '#3d5afe',
        light: '#8187ff',
        dark: '#0031ca',
        contrastText: '#fff',
    },
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828',
    contrastText: '#fff'

  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20',
    contrastText: '#fff',

  },

  typography:{
   fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
    fontWeight: 700,
    },
    h2: {
    fontWeight: 700,
    },
    h3: {
    fontWeight: 600,
    },
},
  background: {
    default: '#0f172a', // Main page background
    paper: '#1e293b', // Cards, sidebar, navbar
  },
  text: {
    primary: '#f8fafc',
    secondary: '#94a3b8',
},
components: {
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 12,
                textTransform: 'none',
                paddingLeft: 20,
                paddingRight: 20,
            },
        },
    },
    },
 

 
});
     

export default theme
