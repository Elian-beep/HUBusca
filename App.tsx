import { StatusBar } from 'expo-status-bar';
import { Container } from './src/defaultStyles';
import Routes  from './src/Routes';
import Home from './src/pages/Home';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Home />
    </Container>
  );
}