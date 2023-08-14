import React from 'react';
import { Box, Heading, Text, Button, Input, Flex,  InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';

const HeroSection: React.FC = () => {
  return (
    <Box
      bg="rgb(252, 128, 3)"
      color="white"
      py={32}
      width="100%"
      textAlign="center"
    >
      
      <Text fontSize="xl" color="white" mb={6}>
       Find Anything in  <Box
      bg="black" // Background color
      p={2} // Padding
      rounded="sm" // Rounded corners
      display="inline-block" // Display inline with text
    >
      <Text color="white" fontSize='sm'> All in Nigeria </Text>
    </Box>
      </Text>
      <Flex direction="column" alignItems="center" mb={6}>
        {/* <Text fontSize="lg" mb={2}><BiMap size={20} />
          Explore our collection:
        </Text> */}
         <Box width={{base:'200px', md:'500px'}}>
      <InputGroup>
        <Input
          bg="white" // Background color
          color="black" // Text color
          placeholder="I am looking for..." // Placeholder text
          _placeholder={{ color: 'gray.500', fontSize: 'sm' }}
          borderRadius="md" // Rounded corners
          py='6'
          pr="3.5rem" // Space for the right icon
        />
        <InputRightElement width="3.5rem" pointerEvents="none">
          <Box w="1.5rem" h="1.5rem">
              <IconButton
                aria-label="Search"
                icon={<FaSearch style={{ fontSize: '1.5rem' }}/>}
                bg="none"
                color="orange"
                // width="8.5rem"
                // height="2.5rem"
                // borderRadius="full"
              />
          </Box>
        </InputRightElement>
      </InputGroup>
    </Box>
        {/* <Input placeholder="I am looking for..."  maxWidth="300px" /> */}
      </Flex>
      
    </Box>
  );
};

export default HeroSection;
