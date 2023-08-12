// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer,
  Heading,
  Button, Link as ChakraLink } from '@chakra-ui/react';

const Navbar: React.FC = () => {
  return (
    <Flex p={24} py='2' bg='rgb(0,181,63)' justifyContent='center' alignItems="center"  position="fixed"
    top="0"
    left="0"
    right="0"
    zIndex="999"
    boxShadow="md">
      <Heading color='white'>Cheappay</Heading>
      <Spacer />
      
      
     
    
    <ChakraLink as={Link} to="/login"  color='white' mr={2} >Login</ChakraLink>
    <ChakraLink as={Link} to="/signup"  color='white' mr={2} >Registeration</ChakraLink>
      <Button colorScheme="red" px='12'  as={ChakraLink} href="#">
        Sell
      </Button>
    </Flex>
  );
};

export default Navbar;
