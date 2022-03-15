import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


import theme from './components/theme';
import { Avatar, Typography } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ height: 645, bgcolor: '#eeeeee' }}>
          <Box sx={{ height: 120, bgcolor: '#ff6d00' }} />
          <Avatar sx={{ width: 120, height: 120, mx: 'auto', mt: -8 }}></Avatar>
          <Typography textAlign='center' textTransform='uppercase'>Your order from
          <Typography variant='h6'>Pizza Hut</Typography></Typography>

        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
