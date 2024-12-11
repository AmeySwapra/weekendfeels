import React, { useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Image,
  Text,
  Badge,
  Button,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CampingCard = ({ data }) => {
    return (
    <Link to={`/${data.link}`}>
        <Box bg="white" boxShadow="lg" borderRadius="md" overflow="hidden"  _hover={{
        ".image-container": {
          transform: "scale(1.1)",
        },
        ".text-overlay": {
          transform: "translateY(-30px)",
        },
      }}>
        {/* Image container with overlay and name styling */}
        <Box className="image-container" position="relative" transition="transform 0.5s ease">
          <Image
            src={data.imageUrl}
            alt={data.name}
            objectFit="cover"
            w="100%"
            h="200px"
          />
          {/* Dark Overlay */}
          <Box
            className="image-overlay"
            bg="rgba(0, 0, 0, 0.3)"
            position="absolute"
            bottom={0}
            w="100%"
            h="22%"
          />
          {/* Name Overlay */}
          <Box
            className="text-overlay"
            color="white"
            position="absolute"
            bottom={0}
            w="100%"
            p={2}
            textAlign={'center'}
            transition="transform 0.5s ease"
          >
            <Text fontWeight="bold" fontSize="md">
              {data.name}
            </Text>
          </Box>
        </Box>
  
        {/* Details section */}
        <VStack spacing={3} p={4} align="stretch">
          {/* Align badges in a horizontal row */}
          <HStack spacing={3}>
            <Badge background={'#0b8b17'} color={'white'}>EARLY BIRD OFFER</Badge>
            <Badge background={'#9a5bff'} color={'white'}>NEW YEAR SPECIAL</Badge>
          </HStack>
  
          {/* Price and offer details */}
          <Text fontSize="md">
            <strike>₹{data.originalPrice}</strike>{' '}
            <Text as="span" color="#0b7c8b" fontSize={'30px'} fontWeight="400">
              ₹{data.finalPrice}
            </Text>{' '}
            per person
          </Text>
          <Text fontSize="sm" color="gray.600">
            Pay{' '}
            <Text as="span" color="#61cef7" fontSize={'20px'} fontWeight="400">
              ₹{data.lockPrice}
            </Text>{' '}
            to lock this offer price
          </Text>
  
          {/* Check-in and Check-out */}
          <HStack gap={'80px'}>
          <VStack>
          <HStack>
            <Icon as={FaSignInAlt} color="teal.500" />
            <Text fontSize="sm">Check-in: {data.checkIn}</Text>
          </HStack>
          <HStack>
            <Icon as={FaSignOutAlt} color="teal.500" />
            <Text fontSize="sm">Check-out: {data.checkOut}</Text>
          </HStack>
          </VStack>
  
          {/* Button aligned to check-in/check-out */}
          <Button as="a" href={data.link} colorScheme="blue" size="sm" borderRadius={'none'} mt={2}>
            Know More
          </Button>
          </HStack>
        </VStack>
      </Box>
    </Link>
    );
  };
  

const NeyCards = () => {
    const [campingData, setCampingData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/campingData');
             console.log(response.data);
            setCampingData(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    },[])
  return (
    <Box p={4} px={{ base: 4, md: 8, lg: 24 }}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {campingData.map((camp) => (
          <CampingCard key={camp.id} data={camp} />
        ))}
      </Grid>
    </Box>
  );
};

export default NeyCards;
