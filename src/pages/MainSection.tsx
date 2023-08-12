import React from 'react';
import { Box, Stack, Text, SimpleGrid, Image, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const CategoryCard: React.FC<{ name: string  }> = ({ name }) => (
  <Box bg="white" color='grey' p={3}  boxShadow="md">
    <Text fontWeight="sm">{name}</Text>
     <Text mt={2} color="gray.800">105,394 ads</Text> {/* Add this line */}
  
  </Box>
);
const ProductCard: React.FC<{ name: string, image: string, price?: number }> = ({ name, image, price = '255,000' }) => (
  <Box bg="white"  borderRadius="md" boxShadow="md">
    <Image borderTopRadius='md'  src={image} alt={name} />
    <Text fontWeight="sm" p={1} color="black" mt={2}>{name}</Text>
    <Text fontWeight="sm" p={1} color="rgb(0,181,63)" mt={2}>N{price}</Text>
  </Box>
);

const MainSection: React.FC = () => {
  const categories = ['Vehicles', 'Property', 'Mobile Phones and Tablets', 'Electronics', 'Jobs', 'Services'];
  const products = [
  
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100,000'},
   
  ];

  return (
    <Box p={10} bgColor='rgb(235,242,247)' borderRadius='md'>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
        <Box flex={4}>
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category} />
            
          ))}
        </Box>
        <Box   flex={8}>
        <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={{ base: 4, md: 6 }}>
            {products.map((product, index) => (
              <ProductCard key={index} name={product.name} image={product.image}     />
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
  );
};

export default MainSection;
