import { createTheme } from '@mui/material/styles'

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,

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

      error: {
        main: '#d32f2f',
      },

      success: {
        main: '#2e7d32',
      },

      background:
        mode === 'dark'
          ? {
              default: '#0f172a',
              paper: '#1e293b',
            }
          : {
              default: '#f8fafc',
              paper: '#ffffff',
            },

      text:
        mode === 'dark'
          ? {
              primary: '#f8fafc',
              secondary: '#94a3b8',
            }
          : {
              primary: '#111827',
              secondary: '#6b7280',
            },
    },

    typography: {
      fontFamily:
        '"Roboto", "Helvetica", "Arial", sans-serif',

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
  })

export default getTheme