import React from 'react';
import { Box, Grid, GridItem, Image, Text, Heading,Button } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'


function ProductDetailsPage (){
  return (
    <Box p={4} mt='14' bg="#EBF2F7" color='black'>
      <Grid templateColumns={{base:'repeat(2,1fr)', md:"65% 30%"}} display={{base:"block", md:'grid'}}  gap={4}>
        <GridItem colSpan={1}>
          <Image src={'https://pictures-nigeria.jijistatic.com/108435440_NzY4LTEwMjQtMjkyOTFhMzNiNw.webp'} alt='' w="100%" h="75%" borderRadius="md" boxShadow="md" />
        </GridItem>
        <GridItem colSpan={1}>
          <Box bg="white" p={4} borderRadius="md" boxShadow="md">
            <Text as="h1" fontSize="1.3rem" fontWeight={900} mb={2}>
             ₦ 330,000,000, Negotiable
            </Text>
            {/* <Text fontSize="lg" mb={4}>
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum ratione tenetur! Vero modi laudantium aperiam expedita ex provident id sapiente temporibus omnis, iusto natus inventore, magni, quas hic sequi dicta nam! Quod a minima porro sunt debitis sint repellat dignissimos! Asperiores, sequi dolore! Veritatis suscipit optio explicabo similique ullam!
            </Text> */}
            <Button border={'0.4px solid orange'} mt='6' w='100%' fontSize={'sm'} color={'orange'}>View Price history</Button>
            <Button border={'2px solid orange'} fontWeight={'900'} mt='4' w='100%' color={'orange'}>Request Callback</Button>
          </Box>
           <Box bg="white" p={4} borderRadius="md" boxShadow="md" mt={3}>
            <Text as="h1" size="md" mb={2}>
             Kelechi Noble
            </Text>
          <Text fontSize={'10px'} my='1' bgColor={'#EBF2F7'} px='1' w='60%'>Typically replies within a few hour</Text>
          <Text fontSize={'10px'} bgColor={'#EBF2F7'} px='1' w='40%'>7y on Cheappay</Text>
            <Button border={'0.4px solid orange'} _hover={{bgColor:'orange'}} bgColor={'orange'} mt='6' w='100%' fontSize={'sm'} color={'white'}>Show Contact</Button>
            <Button border={'1px solid orange'} _hover={{bgColor:'orange', color:'white'}} fontWeight={'900'} mt='4' w='100%' color={'orange'}>Start chat</Button>
          </Box>
      
           <Box bg="white" p={4} borderRadius="md" boxShadow="md" mt={3}>
            <Text fontWeight={900} as="h1" size="md" mb={2} textAlign={'center'}>
             Safety Tips
            </Text>
            <UnorderedList fontSize={'sm'}>
  <ListItem>Remember, don't send any pre-payments</ListItem>
  <ListItem>Meet the seller at a safe public place</ListItem>
  <ListItem>Inspect the goods to make sure they meet your needs</ListItem>
  <ListItem>Check all documentation and only pay if you're satisfied</ListItem>
</UnorderedList>
          </Box>
           <Box bg="white" p={4} borderRadius="md" boxShadow="md" mt={3} display={'flex'} gap='2' w='100%'>
           <Button border={'0.4px solid orange'} _hover={{bgColor:'orange'}} bgColor={'orange'}   fontSize={'sm'} color={'white'}>Mark Unavailable</Button>
            <Button border={'1px solid orange'}  fontWeight={'900'}  color={'red'}>Report Abuse</Button>
          </Box>
           <Box bg="white" p={4} borderRadius="md" boxShadow="md" mt={3} display={'flex'} gap='2'>
      <ChakraLink  as={Link} to='/Postads' w='100%'>
      <Button border={'0.4px solid orange'} _hover={{bgColor:'orange', color:'white'}} w={'100%'}  fontSize={'sm'} color={'orange'}>Post Ads Like This</Button>
        
        </ChakraLink>  
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductDetailsPage;