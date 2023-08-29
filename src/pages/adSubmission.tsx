import React, { useState,useRef, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  List,
  ListItem,
  InputGroup,
Divider,
  InputRightElement,
  IconButton,
  Image,
} from '@chakra-ui/react';
import { FaAngleDown , FaAngleLeft} from 'react-icons/fa';
import { FaPlusCircle, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const categories = [
  { name: ' Vehicles', image: 'https://assets.jijistatic.com/art/attributes/categories/vehicles.png' },
  { name: 'Clothing', image: 'https://assets.jijistatic.com/art/attributes/categories/fashion.png' },
  { name: 'Property', image: 'https://assets.jijistatic.com/art/attributes/categories/real-estate.png' },
  { name: 'Furniture', image: 'https://assets.jijistatic.com/art/attributes/categories/home.png' },
  { name: 'Pets', image: 'https://assets.jijistatic.com/art/attributes/categories/animals.png' },
  { name: 'Repair & Construction', image: 'https://assets.jijistatic.com/art/attributes/categories/repair.png' },
  { name: 'Babies and kids', image: 'https://assets.jijistatic.com/art/attributes/categories/babies.png' },
  { name: 'Agriculture & Food', image: 'https://assets.jijistatic.com/art/attributes/categories/agriculture.png' },
  { name: 'Jobs', image: 'https://assets.jijistatic.com/art/attributes/categories/jobs.png' },
  { name: 'Commercial Equipments', image: 'https://assets.jijistatic.com/art/attributes/categories/equipment.png' },
  { name: 'Mobile Phones & Tablets', image: 'https://assets.jijistatic.com/art/attributes/categories/mobile.png' },
  { name: 'Electronics', image: 'https://assets.jijistatic.com/art/attributes/categories/electronics.png' },
  { name: 'Seeking Work CVs', image: 'https://assets.jijistatic.com/art/attributes/categories/jobseekers.png' },
];

const locations = [
  'Abuja',
  'Lagos State',
  'Rivers State',
  'Kano State',
  'Osun State',
  'Osun State',
  'Osun State',
  'Abia State',
  'Ondo State',
  'Oyo State',
  'Kwara State',
  'Adamawa State',
  'Akwa Ibom State',
  'Anambra State',


  // Add more locations as needed
];


const AdSubmissionPage: React.FC = () => {
  // const containerRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredCategories, setFilteredCategories] = useState<{ name: string; image: string }[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCategoryInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSelectedCategory(inputValue);
    filterCategories(inputValue);
    setShowDropdown(inputValue !== '');
  };

  const filterCategories = (input: string) => {
    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const handleLocationInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSelectedLocation(inputValue);
    filterLocations(inputValue);
    setShowLocationDropdown(inputValue !== '');
  };

  const filterLocations = (input: string) => {
    const filtered = locations.filter(location =>
      location.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  const handleLocationSelection = (location: string) => {
    setSelectedLocation(location);
    setShowLocationDropdown(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
  };
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = event.target.files;
    if (selectedImages) {
      setImages(prevImages => [...prevImages, ...Array.from(selectedImages)]);
    }
  };

  const [imageInputKey, setImageInputKey] = useState(Date.now());

  const handleImageRemove = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    setImageInputKey(Date.now()); // Reset the file input
  };

  const [newInputValue, setNewInputValue] = useState('');

  const handleClearForm = () => {
    setSelectedCategory('');
    setSelectedLocation('');
    setImages([]);
    setImageInputKey(Date.now());
    setNewInputValue(''); // Reset the value of the new input field
    // Reset any other state values if needed
  };

  return (
    <Box p={4} pt={{base:'10', md:'24'}} bgColor='rgb(235,242,247)'>
      <Box maxWidth="900px" bgColor='white' mb={'64'} borderRadius="lg" p='4' margin="auto" display='flex' alignItems={'center'} justifyContent='space-between'>
      {/* <Heading size="lg" textAlign='center' fontWeight='md'  color='white'  fontSize='md' > */}
         <Link to="/">
         <IconButton
         aria-label="Toggle dropdown"
         icon={<FaAngleLeft />}
         color="gray.600"
         fontSize={'2xl'}
        //  alignItems="end"
         onClick={() => setShowDropdown(!showDropdown)}
         bg={"none"}
         border="none"
       // bg={showDropdown ? 'gray.700' : 'black'}
       // _hover={{ bg: 'gray.400' }}
       />
        
       </Link>
       
      {/* </Heading>  */}
      <Heading size="lg" fontWeight='md'    fontSize='md' color={'black'} >
        Post Ad
       
      </Heading> 
      <Button
          variant="link"
         alignSelf='right'
          colorScheme="red"
          onClick={handleClearForm}
          _hover={{ textDecoration: 'none' }}
        >
          Clear Form
        </Button>
      </Box>
      <Divider mb='26px' />
      <Box maxWidth="900px" bgColor='white' p='6' borderRadius="md" mt={'8'}  margin="auto"  ref={containerRef} >
        <Box maxWidth="400px" margin="auto" >
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                placeholder="Category*"
                value={selectedCategory}
                onChange={handleCategoryInputChange}
                border="1px solid gray"
                mb={4}
                // py={8} 
                ref={containerRef}
                height="60px"
               

                color="black" // Change the text input color
                _placeholder={{ color: 'gray.500' }}
              // disabled={images.length === 0} // Disable the input when images are present
              />
              <InputRightElement>
                <IconButton
                  aria-label="Toggle dropdown"
                  icon={<FaAngleDown />}
                  color="gray.600"
                  alignItems="end"
                  onClick={() => setShowDropdown(!showDropdown)}
                  bg={"none"}
                  border="none"
                // bg={showDropdown ? 'gray.700' : 'black'}
                // _hover={{ bg: 'gray.400' }}
                />
              </InputRightElement>
            </InputGroup>
            {showDropdown && (
              <List bg="white"
                border="1px solid gray"
                mt={2}
                position="relative"
                zIndex="2"
                maxWidth="400px"
                // width="100%"
                // width={{ base: '100%', md: '250px' }}
                maxHeight="250px" // Set a fixed max height for scrolling
                overflowY="auto"  // Enable vertical scrolling 
                borderRadius="md"

                
              >

                {filteredCategories.map((category, index) => (
                  <ListItem
                    key={index}
                    cursor="pointer"
                    // py={5}
                    px={2}
                    color={"gray.700"}

                    _hover={{ bg: 'teal.100' }}
                    onClick={() => handleCategorySelection(category.name)}
                    display="flex"
                    alignItems="center"
                  >
                    <Image src={`${category.image}`} alt={category.name} boxSize="30px" mr={2} />
                    {category.name}
                  </ListItem>
                ))}
              </List>
            )}

            <InputGroup>
              <Input
                placeholder="Select Location*"
                value={selectedLocation}
                onChange={handleLocationInputChange}
                color="gray.600"
                mt={4}
                // disabled={selectedCategory === ''}
                _placeholder={{ color: 'gray.500' }}

                height="60px"
                border="1px solid gray"
              />
              <InputRightElement>
                <IconButton
                  aria-label="Toggle location dropdown"
                  icon={<FaAngleDown />}
                  // textAlign="center"
                  alignItems="end"

                  bg={"none"}
                  color={"gray.600"}
                  onClick={() => setShowLocationDropdown(!showLocationDropdown)}

                />
              </InputRightElement>
            </InputGroup>
            {showLocationDropdown && (
              <List
                bg="white"
                border="1px solid gray"
                mt={2}
                mb={8}
                // position="absolute"
                zIndex="2"
                // width="31.7%"
                borderRadius="md"
                maxHeight="150px"
                overflowY="auto"
              >
                {filteredLocations.map((location, index) => (
                  <ListItem
                    key={index}
                    cursor="pointer"
                    py={1}
                    px={2}
                    color={"gray.700"}
                    _hover={{ bg: 'teal.100' }}
                    onClick={() => handleLocationSelection(location)}
                    display="flex"
                    alignItems="center"
                  >
                    {location}
                  </ListItem>
                ))}
              </List>
            )}


            <Heading size="sm" mb={2} mt={4} fontWeight={'sm'} color="gray.500">
              Add Photo
            </Heading>
            <Text color="gray.400" fontSize='sm' fontWeight={'sm'}>
              First picture - is the title picture. You can change the order of photos: just grab your photos and drag
            </Text>
            <label htmlFor="image-upload" style={{ marginTop: '10px' }}>
              <IconButton
                as="span"
                aria-label="Add Image"
                icon={<FaPlusCircle />}
                size="lg"
                  _hover={{ bg: 'orange.500' }}
               bg="orange.400" 
              />
              <input
                key={imageInputKey}
                id="image-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                // disabled={selectedCategory === ''}

                style={{ display: 'none' }}
              />
            </label>
            <div style={{ display: 'flex', marginTop: '20px' }}>
              {images.map((image, index) => (
                <Box
                  key={index}
                  border="1px solid gray"
                  borderRadius="md"
                  p={1}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  marginRight="10px"
                  height="100px"
                  width="100px"
                >
                  <IconButton
                    icon={<FaTrash />}
                    size="sm"
                    // colorScheme="red"
                    onClick={() => handleImageRemove(index)}
                    alignSelf="flex-end"
                    // top="0"
                    color="red.600"
                  
                    aria-label="Delete Image"
                    disabled={selectedCategory === ''}

                  />
                  <Image src={URL.createObjectURL(image)} alt={`Image ${index}`}  maxH="70%" maxW="100%" />

                </Box>

              ))}
            </div> <Box>
              <Text color="gray.400" fontSize='sm' fontWeight={'sm'}>
                Supported formats are .jpg, .gif and .png, 5MB max
              </Text>
            </Box>

            {/* ... Other form elements ... */}
            <InputGroup>
              <Input
                placeholder="Enter Youtube URL"
                border="1px solid gray"
                my={4}
                height="60px"
                value={newInputValue}
                onChange={(event) => setNewInputValue(event.target.value)}
                color="black" // Change the text input color
                _placeholder={{ color: 'gray.500' }}

              />
            </InputGroup>

            <Button type="submit" w={'100%'} 
                  _hover={{ bg: 'orange.500' }}
            color="white"
            bgColor="orange.400"
              // disabled={selectedCategory === ''}
            >
              Next
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default AdSubmissionPage;