import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Container } from '@chakra-ui/react';

function App() {
  return (
    <Container maxW="2xl">
      <Home />
    </Container>
  );
}

export default App;
