// src/pages/ResetPassword.tsx

import React from 'react';
import {Link as ChakraLink} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';

const ResetPassword: React.FC = () => {
  return (
    <Center height="100vh" backgroundColor='black'>
      <Box
        p="4"
        width={{ base: '90%', md: '70%' }}
        maxWidth={{ md: '500px' }}
        height="60vh"
        boxShadow="0 4px 24px rgba(255, 165, 0, 0.4)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <VStack spacing="4">
          <Heading size="lg" color='orange'>Reset Password</Heading>
          <Input placeholder="New Password"  color='white' focusBorderColor="grey" borderColor='grey' type="password" />
          <Input placeholder="Confirm New Password"  color='white' focusBorderColor="grey" borderColor='grey' type="password" />
          <Button colorScheme="orange">Reset Password</Button>
          <Text color='white'>
            Remember your password? <ChakraLink as={Link} to="/login" textDecoration="underline" color='white' _hover={{ color: 'orange' }}>Login</ChakraLink>
          </Text>
          
        </VStack>
      </Box>
    </Center>
  );
};

export default ResetPassword;
