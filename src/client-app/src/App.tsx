import { Box, Container } from '@mui/material';
import './App.css';
import Header from './components/header';
import Home from './components/home';

function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Header
            title='How Tall is Lance Morris?'
          />
        <Home />
      </Box>
    </Container>
  );
}

export default App;
