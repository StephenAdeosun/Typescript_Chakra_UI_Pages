// src/pages/Login.tsx

import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  VStack,
} from '@chakra-ui/react';

const Login: React.FC = () => {
  return (
    <Flex align="center" justify="center" height="100vh"  backgroundColor='black'>
        
      <Box borderWidth="1px" borderRadius="lg"   border="0px solid #e2e8f0"	 boxShadow="0 4px 24px rgba(255, 165, 0, 0.4)" p="8" width="500px">
        <VStack spacing="4">
          <Heading size="lg" color='orange'>Login</Heading>
          <Input placeholder="Email"  color='white' focusBorderColor="grey" borderColor='grey' type="email" />
          <Input placeholder="Password"  color='white' focusBorderColor="grey" borderColor='grey' type="password" />
          <Button colorScheme="orange">Login</Button>
          <Text color='white'>
            Forgot your password?  <ChakraLink as={Link} to="/reset-password" color='white' textDecoration="underline" _hover={{ color: 'orange' }}>
              Reset Password
            </ChakraLink>
          </Text>
          <Text color='white'>
            Don't have an account? <ChakraLink as={Link} to="/" textDecoration="underline" color='white' _hover={{ color: 'orange' }}>Sign Up</ChakraLink>
          </Text>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Login;
