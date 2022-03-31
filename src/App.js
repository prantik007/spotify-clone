import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Flex,
} from '@chakra-ui/react';

import theme from './Theme/Theme';

import Header from './components/Header/Header';
import { API_URL } from './API_URL';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import About from './components/About/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction='column' align='center' bgColor='#222326' >
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </Router>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
