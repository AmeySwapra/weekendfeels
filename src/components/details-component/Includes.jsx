import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { FaCampground, FaHiking, FaUserTie, FaMugHot, FaUtensils, FaBreadSlice, FaFirstAid, FaDog, FaCheckCircle } from 'react-icons/fa';

const includesData = [
  { icon: FaCampground, label: 'Tent Stay (2/3/4 Sharing)' },
  { icon: FaHiking, label: 'Hiking' },
  { icon: FaUserTie, label: 'Tour Guide' },
  { icon: FaMugHot, label: 'Tea' },
  { icon: FaUtensils, label: 'Dinner' },
  { icon: FaBreadSlice, label: 'Breakfast' },
  { icon: FaFirstAid, label: 'First-Aid Kit' },
  { icon: FaDog, label: 'Pet-Friendly' },
  { icon: FaCheckCircle, label: 'No Hidden Costs' },
];

const Includes = () => {
  return (
    <Box w="100%" p={4}>
      <Box mb={4} bg="#0b7c8b" p={2} borderRadius="md">
        <Heading size="md" color="white" textAlign="start" m={0}>
          INCLUDES
        </Heading>
      </Box>
      <SimpleGrid columns={5} spacingY={4} spacingX={2}>
        {includesData.map((item, index) => (
          <Flex key={index} align="center">
            <Box as={item.icon} fontSize="2xl" color="teal.500" mr={2} />
            <Text fontSize="sm">{item.label}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Includes;
