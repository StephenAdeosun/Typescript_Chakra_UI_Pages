// src/pages/Signup.tsx
import {Link as ChakraLink} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import {
  Box,

  Heading,
  Input,
  Button,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';

const Signup: React.FC = () => {
  return (
    <Center height="100vh" backgroundColor='black'>
      <Box
        borderWidth="1px"
        
        p="0" 
        width="90%"
        maxWidth={{ md: '70%' }} 
        height="80vh" 
        boxShadow="0 4px 24px rgb(257, 87, 0, 0.4);" 
        display="flex"
        border="0px solid #e2e8f0"	
        flexDirection={{ base: 'column', xl: 'row' }}
        justifyContent="center" 
      >

        <Box
          display={{ base: 'none', xl: 'block' }}
          width="50%" // Set the image container width to 50%
          marginRight={{ base: '0', md: '8' }}
        >
          <img
            src="https://scissors2.vercel.app/assets/register%20svg.jpg" // Replace with your image URL
            alt="Signup"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Use object-fit: cover
          />
        </Box>

        <Box flex="1" p="2">
          <VStack spacing="3">
            <Heading size="lg" color='orange'>Signup</Heading>
            <Input placeholder="First Name" color='white' focusBorderColor="grey" borderColor='grey' />
            {/* <Input placeholder="Last Name" /> */}
            <Input placeholder="Email" type="email" color='white' focusBorderColor="grey" borderColor='grey' />
            <Input placeholder="Password" type="password" color='white' focusBorderColor="grey" borderColor='grey' />
            <Input placeholder="Phone Number" type="tel" color='white' focusBorderColor="grey" borderColor='grey' />
            <Button colorScheme="orange" mt="4">Sign Up</Button>
            <Text color="white">
              Already have an account? <ChakraLink as={Link} to="/login" textDecoration="underline" color='white'  _hover={{ color: 'orange' }}>Login</ChakraLink>
            </Text>
          </VStack>
        </Box>
      </Box>
    </Center>
  );
};

export default Signup;
