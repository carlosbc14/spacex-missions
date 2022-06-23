import { Container, Image } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import logo from './assets/logo-spacex.png';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';

export default function App() {
  return (
    <Container maxW="80%" centerContent>
      <Image m={8} src={logo} width={455} />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="/launch/:launchId" element={<LaunchDetails />} />
      </Routes>
    </Container>
  );
}
