import React from 'react';
import { Box, Grid, GridItem, Link, Text, UnorderedList, ListItem, Stack, Button, Image } from '@chakra-ui/react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
const Footer: React.FC = () => {
  return (
    <Box as="div" bg='rgb(235,242,247)'>
    <Image
      src="https://assets.jiji.ng/static/img/footer-nigeria-new.svg"
      alt="Your Image"
      style={{
        width: '100%',
        maxWidth: '80%',
        margin: 'auto',
        
      }}
    />
  
    <Box as='footer' bgColor='rgb(0,181,63)' fontSize='80%' color="white" px={{base:'10', md:'24'}} py={8}>
 

      <Grid templateColumns={['1fr', '1fr', 'repeat(3, 1fr)', 'repeat(5, 1fr)']} gap={4}>
        <GridItem>
          <Text fontSize="md" mb={4}>
          About us
          </Text>
         
                  <Stack>
                    <Link href="#">About Cheapay</Link>
                    <Link href="#">We are hiring!</Link>
                    <Link href="#">Terms & Conditions</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Billing Policy</Link>
                    <Link href="#">Cookie Policy</Link>
                    <Link href="#">Copyright Infringement Policy</Link>
                  </Stack>
             
        </GridItem>
        <GridItem>
          <Text fontSize="md" mb={4}>
            Support
          </Text>
          <Stack>
                   <Link href="#">support@jiji.ng</Link>
                  <Link href="#">Safety tips</Link>
                  <Link href="#">Contact Us</Link>
                  <Link href="#">FAQ</Link>
        </Stack>
        </GridItem>
        <GridItem>
          <Text fontSize="md" mb={4}>
            Our resources
          </Text>
          <Stack>
            <Link href="#">Our blog</Link>
            <Link href="#">Cheappay on FB</Link>
            <Link href="#">Our Instagram</Link>
            <Link href="#">Our Youtube</Link>
            <Link href="#">Our Twitter</Link>
          </Stack>
        </GridItem>

        <Box flex="1">
          <Text fontSize="md"  mb={4}>App Downloads</Text>
          <Stack spacing={4}>
            <Button
              as="a"
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaGooglePlay style={{ fontSize: '1.5rem' }} />}
              px={8}
              fontSize="10px"
              // colorScheme="white"
              bg="black"
              color="white"
            >
              Download on <br />Google Play
            </Button>
            <Button
              as="a"
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              px={8}
              fontSize="10px"
              color="white"
              bg="black"
              leftIcon={<FaApple  style={{ fontSize: '1.5rem', color:'white' }}/>}
            >
              Download on the <br/> 
               App Store
            </Button>
          </Stack>
        </Box>
        <GridItem>
          <Text fontSize="md" mb={4}>
            Hot links
          </Text>
          <Stack>
            <Link href="#">Brand</Link>
            <Link href="#">Regions</Link>
            <Link href="#">Jiji Africa</Link>
          </Stack>
        </GridItem>
       
       
      </Grid>
      <Text textAlign="center" mt={8}>
        &copy; {new Date().getFullYear()} Cheappay. All rights reserved.
      </Text>
    </Box>
    </Box>
  );
};

export default Footer;
