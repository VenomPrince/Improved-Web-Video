import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF',
    },
    secondary: {
      main: '#4CAF50',
    },
    background: {
      default: '#f0f2f5',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          textTransform: 'none',
          padding: '12px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});