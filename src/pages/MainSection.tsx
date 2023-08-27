import React from 'react';
import { Box, Stack, Text, SimpleGrid, Image, Button,Badge ,Divider} from '@chakra-ui/react';
import { Heading, Input, Flex,  InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';

const CategoryCard: React.FC<{ name: string  }> = ({ name }) => (
  <Box bg="white" color='grey' p={3}  boxShadow="md">
    <Text fontWeight="sm">{name}</Text>
     <Text mt={2} color="gray.800">105,394 ads</Text> 
  
  </Box>
);
const ProductCard: React.FC<{ name: string, image: string,price:string , tags?: string[] , number?:string[]}> = ({ name, image, price , tags, number }) => (
  <Box bg="white" borderRadius="md" boxShadow="md">
    <Box height="150px" position="relative">
      <Image borderTopRadius="md" src={image} alt={name} objectFit="cover" w="100%" h="100%" />
      {tags && tags.length > 0 && (
        <Box position="absolute" top="0" left="0"  bg="rgb(252, 128, 3)"
        color="white" >
          {tags.map((tag, index) => (
            <Badge key={index} variant="ghost" size="sm" mr={1} >
              {tag}
            </Badge>
          
          ))}
        </Box>
      )}
      {number && number.length > 0 && (
        <Box position="absolute" bottom="0" left="0" borderLeft='50%'  bg="rgba(0, 0, 0, 0.7)" color="white">
          {number.map((tag, index) => (
            <Badge key={index} variant="ghost" fontSize="10px" mr={1}>
              {tag}
            </Badge>
          
          ))}
        </Box>
      )}
       <Box position="absolute"  bottom="-3" right="2" >
        <StarIcon bgColor='rgb(235,242,247)' boxShadow='2xl' h='30' w='30' borderRadius='50%' p={2} color="rgb(252, 128, 3)" />
      </Box>
    </Box>
    
<Divider orientation="horizontal" />
    
    <Text fontSize="sm" p={1} color="black" mt={2}>
      {name}
    </Text>
    <Text fontSize="sm" p={1} color="rgb(252, 128, 3)" mt={2}>
    &#8358;{price}
    </Text>
  </Box>
);


const MainSection: React.FC = () => {


  const categories = ['Vehicles', 'Property', 'Mobile Phones and Tablets', 'Electronics', 'Jobs', 'Services'];
  const products = [
  
    { name: 'Toyota Matrix 2004 teal' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVukUuPW0aGKFSk6YeC_nwPAA5NfbTaKCBaQ&usqp=CAU' , price:'100000', tags: ['VIP++'] , number:['16']}	,
    { name: 'Ford Mustang 2014 Red' ,image: 'https://pictures-nigeria.jijistatic.com/129146232_NjAwLTYwMS0xNDUxM2E5YTZj.webp' , price:'7,100,000' , tags: ['2X Diamond'] , number:['15']}	,
    { name: 'BMW 128i 2009 Gold' ,image: 'https://pictures-nigeria.jijistatic.com/129149328_ODEwLTEwODAtYzNlOTMxOWQwYQ.webp' , price:'500,000' , tags: ['VIP TOP +'] , number:['14']}	,

    { name: 'Mercedes-Benz Black' ,image: 'https://pictures-nigeria.jijistatic.com/129135331_MTEyNS0xNTAwLWIzNDUzNTU4ZWU.webp' , price:' 5,680,000' , tags: ['Diamond'] , number:['13']}	,
    { name: 'BMW 1 Series 2008 Red' ,image: 'https://pictures-nigeria.jijistatic.com/129148259_NzE0LTY1NC04MzNmNjRhOGQ3.webp' , price:' 3,850,000,'  , number:['12']}	,
    { name: 'Ferrari 458 Spider  2013 ' ,image: 'https://pictures-nigeria.jijistatic.com/129037158_MTI4MC05NjAtODc4MTZlYmFmNg.webp' , price:' 150,000,000' , tags: ['VIP++'] , number:['11']}	,
    { name: ' BMW X1 2006 Silver',image: 'https://pictures-nigeria.jijistatic.com/128301193_MTA4MC04MDktYzEyMTIzMmU1Nw.webp' , price:' 3,000,000' , tags: ['VIP TOP +'] , number:['10']}	,
    { name: 'BMW 330i 2006 Gray' ,image: 'https://pictures-nigeria.jijistatic.com/113099276_MTUwMC0xMTI1LTZhNDEzNzgxZGU.webp' , price:' 4,500,000' , tags: ['2X Diamond'] , number:['9']}	,
    { name: 'BMW 128i 2009 Gold' ,image: 'https://pictures-nigeria.jijistatic.com/120785918_MTE3MC04NTEtMDRjZWVkZDliYi0x.webp' , price:'4,200,000'  , number:['8']}	,
    { name: 'Dodge Charger 2009 SXT ' ,image: 'https://pictures-nigeria.jijistatic.com/86354789_MTYwMC0xMjAwLTk4NGQ3NDJmMzM.webp' , price:'4,800,000' , tags: ['Vip'] , number:['7']}	,
    { name: 'Dodge Challenger 2011  ',image: 'https://pictures-nigeria.jijistatic.com/96705168_MTAyNC03NjgtNzQ3OTQzOWVkYw.webp' , price:' 6,000,000' , tags: ['VIP++'] , number:['6']}	,
    { name: 'Dodge Nitro SLT 4x4 2007 ' ,image: 'https://pictures-nigeria.jijistatic.com/111877813_MTE1Ni04NjgtODVjYWNmN2YxNA.webp' , price:'2,900,000' , tags: ['Diamond'] , number:['5']}	,
    { name: 'Dodge Challenger  2013 ' ,image: 'https://pictures-nigeria.jijistatic.com/113839577_MTUwMC0yMDAwLWM0M2JkYWQwZjI.webp' , price:'10,500,000' , number:['4']}	,
    { name: 'Dodge Charger 2007 Red' ,image: 'https://pictures-nigeria.jijistatic.com/110538908_MTUwMC0xMTI1LWQ3OTc1MTQ3N2M.webp' , price:'4,700,000' , tags: ['Diamond'] , number:['3']}	,
    { name: 'Dodge Charger SXT 2008 ' ,image: 'https://pictures-nigeria.jijistatic.com/127277453_MTA0MC03ODAtZTlmZjIwYzU0NA.webp' , price:'3,500,000' , number:['2']}	,
       { name: 'Honda Civic  Gray' ,image: 'https://pictures-nigeria.jijistatic.com/129147482_MTI4MC0xMTQzLWIyNmUwZWM2NDk.webp' , price:'8,800,000' , number:['1']}	,
   


  ];

  const [searchInput, setSearchInput] = useState('');
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Function to handle search input changes
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };
  // console.log("Filtered Products Length:", filteredProducts.length);

  return (
    <Box>
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
      <Box width={{ base: '200px', md: '500px' }}>
        <InputGroup>
          <Input
            bg="white"
            color="black"
            placeholder="I am looking for..."
            _placeholder={{ color: 'gray.500', fontSize: 'sm' }}
            borderRadius="md"
            py="6"
            pr="3.5rem"
            value={searchInput} // Bind the search input value
            onChange={handleSearchInputChange} // Handle input changes
          />
          <InputRightElement width="3.5rem">
            <Box w="1.5rem" h="1.5rem">
              <IconButton
                aria-label="Search"
                icon={<FaSearch style={{ fontSize: '1.5rem', cursor: 'pointer' }} />}
                bg="none"
                color="orange"
              />
            </Box>
          </InputRightElement>
        </InputGroup>
      </Box>
      </Flex>
      
    </Box>
    <Box p={{base:'4', md:'16'}} bgColor='rgb(235,242,247)' borderRadius='md'>

      <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
        <Box flex={3} cursor='pointer'>
          {categories.map((category, index) => (
            <CategoryCard key={index} name={category} />
            
          ))}
        </Box>
        <Box flex={8}>
          <Text fontSize="xl" p={1} color="black" mt={-3}>Trending ads</Text>
          <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} spacing={{ base: '4', md: '3' }} cursor="pointer">
            {filteredProducts.length === 0 ? (
              <Text textAlign="center" fontSize="lg" color="gray.500" mt={8}>
                No items found.
              </Text>

            ) : (
              filteredProducts.map((product, index) => (
                <ProductCard key={index} name={product.name} image={product.image} price={product.price} tags={product.tags} number={product.number} />
              ))
            )}
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
    </Box>

  );
};

export default MainSection;