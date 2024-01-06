import { StatusBar } from 'expo-status-bar';
import { Container } from './src/defaultStyles';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Routes from './src/routes';

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <Routes />
    </Container>
  );
}