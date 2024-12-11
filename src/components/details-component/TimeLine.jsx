import React from 'react';
import { Box, Text, Flex, Heading, VStack, Divider, IconButton } from '@chakra-ui/react';
import { FaCheckCircle, FaHiking, FaCoffee, FaSun, FaHome, FaMoon } from 'react-icons/fa';
import { FiSunrise } from 'react-icons/fi';
import { FaTents } from 'react-icons/fa6';

const Timeline = ({ timelineData }) => {
  // Map event icons based on event.icon name
  const getIcon = (icon) => {
    switch (icon) {
      case 'checkin':
        return <FaCheckCircle />;
      case 'hiking':
        return <FaHiking />;
      case 'tea':
        return <FaCoffee />;
      case 'sunset':
        return <FaSun />;
      case 'tent':
        return <FaTents />;  // Correct icon for tent
      case 'dinner':
        return <FaHome />;
      case 'night':
        return <FaMoon />;
      case 'sunrise':
        return <FiSunrise />; // Correct icon for sunrise
      default:
        return null;
    }
  };

  return (
    <Box id="containerBox3" className="exp" p={4}>
      {/* Header Section */}
      <Box className="row" display="flex" justifyContent="space-between" alignItems="center" mb={6}>
      <Box mb={4} w={'full'} bg="#0b7c8b" p={2} borderRadius="md">
        <Heading size="md" color="white" textAlign="start" m={0}>
        ITINERARY
        </Heading>
      </Box>
        <Box className="col-md-3 col-sm-3 col-xs-3 text-right">
          <IconButton
            icon={<FaSun />}  // You can replace this with any other icon if you prefer
            aria-label="Toggle"
            variant="ghost"
            color="white"
            fontSize="22px"
            onClick={() => alert('Icon clicked!')}
            ml={2}
            bg="transparent"
            _hover={{ bg: 'transparent' }}
          />
        </Box>
      </Box>

      {/* Timeline Section */}
      <VStack spacing={6} align="stretch">
        {timelineData.map((day, index) => (
          <Box key={index}>
            <Heading size="md" color="teal.500">
              {day.day}
            </Heading>
            <VStack spacing={4} align="stretch" mt={4}>
              {day.events.map((event, idx) => (
                <Box
                  key={idx}
                  p={4}
                  borderRadius="md"
                  boxShadow="sm"
                  bg={idx % 2 === 0 ? 'white' : 'gray.100'}
                >
                  <Flex align="center" mb={2}>
                    <Box
                      mr={4}
                      w={6}
                      h={6}
                      bg="gray.300"
                      borderRadius="full"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {getIcon(event.icon)}
                    </Box>
                    <Text fontSize="xl" fontWeight="bold">{event.time}</Text>
                  </Flex>
                  <Text>{event.activity}</Text>
                </Box>
              ))}
            </VStack>
            {index < timelineData.length - 1 && <Divider my={6} />}
          </Box>
        ))}
      </VStack>
      <Box mt={6}>
        <b>Note:</b> Above mentioned timings are tentative. They may fluctuate depending on various factors.
      </Box>
    </Box>
  );
};

export default Timeline;
