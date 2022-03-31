import { Button, Center, VStack, Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../../API_URL';
const Login = () => {

    const handleLoginButton=()=>{
window.open(API_URL);
    }
  return (
    <Flex h="full" justify="center" alignItems="center" mt={40}>
      <Box>
      
        <Button bgColor="green.300" _hover={{ bgColor: 'green.200' }} onClick={handleLoginButton}>
          Login with spotify
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
