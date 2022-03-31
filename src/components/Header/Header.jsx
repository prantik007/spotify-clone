import { Heading, HStack, Image, Box, color, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

import spotifyLogo from '../../assets/spotify.png';

const Header = () => {
  return (
    <HStack bgColor="black" w="full" h="80px" justify="space-around" mb={0}>
      <Link to="/">
        {' '}
        <HStack>
          <Image src={spotifyLogo} alt="spotify logo" h="50px" />
          <Heading color="white">Spotify</Heading>
        </HStack>
      </Link>
      <HStack h="80px">
        <Link to="/">
          <HStack
            mr="4"
            color="white"
            _hover={{ color: 'green.300' }}
            h="full"
            cursor="pointer"
          >
            <Text fontSize="2xl" color="inherit">
              Home
            </Text>
          </HStack>
        </Link>

        <Link to="/about">
          <HStack
            color="white"
            _hover={{ color: 'green.300' }}
            h="full"
            cursor="pointer"
          >
            <Text fontSize="2xl" color="inherit">
              About
            </Text>
          </HStack>
        </Link>
      </HStack>
    </HStack>
  );
};

export default Header;
