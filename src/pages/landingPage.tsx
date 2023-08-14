// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer,
  Heading,
  Button, Link as ChakraLink } from '@chakra-ui/react';

const Navbar: React.FC = () => {
  return (
    <Flex p={{base:'2'}} px='20' bg='rgb(252, 127, 3)' justifyContent={{base:'space-evenly', sm:'center' }} alignItems="center"  position="fixed"
    top="0"
    left="0"
    right="0"
    width="100%"
    zIndex="999"
    boxShadow="md">
      <Heading color='white' fontSize={{base:'md', md:'xl'}}>Cheappay</Heading>
      <Spacer display={{base:'none', sm: 'block'}} />
      
      
     
    
    <ChakraLink as={Link} to="/login"  color='white' mr={2} fontSize={{base:'sm' , md:'lg'}}>Login</ChakraLink>
    <ChakraLink as={Link} to="/signup"  color='white' mr={2} fontSize={{base:'sm' , md:'lg'}} >Registeration</ChakraLink>
      <Button colorScheme="red" px='4'   as={ChakraLink} href="#">
        Sell
      </Button>
    </Flex>
  );
};

export default Navbar;
