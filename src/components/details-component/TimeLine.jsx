import React from 'react';
import { Box, Text, Flex, Heading, VStack, Divider, IconButton } from '@chakra-ui/react';
import { 
  FaCheckCircle, FaHiking, FaCoffee, FaSun, FaHome, FaMoon, FaCampground, FaGuitar, FaMusic, FaFilm, FaAnchor, 
  FaBreadSlice
} from 'react-icons/fa';
import { FiSunrise } from 'react-icons/fi';
import {  GiFireBowl, GiCampfire, GiWaterfall } from 'react-icons/gi';
import { MdOutlineBeachAccess, MdOutlineKayaking, MdOutlineSportsHandball } from 'react-icons/md';

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
        return <FaCampground />;
      case 'dinner':
        return <FaHome />;
      case 'night':
        return <FaMoon />;
      case 'sunrise':
        return <FiSunrise />;
      case 'kayaking':
        return <MdOutlineKayaking/>
      case 'raindance':
        return <GiWaterfall />;
      case 'joker':
        return <FaFilm />;
      case 'bbq':
        return <GiFireBowl />;
      case 'music':
        return <FaMusic />;
      case 'bonfire':
        return <GiCampfire />;
      case 'boat':
        return <FaAnchor />;
      case 'beach':
        return <MdOutlineBeachAccess/>;
      case 'movie':
        return <FaFilm />;
      case 'guitar':
        return <FaGuitar />;
        case 'snacks':
        return <FaBreadSlice/>;
        case 'sports':
          return <MdOutlineSportsHandball/>
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
            icon={<FaSun />}
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
                  bg={idx % 2 === 0 ? 'white' : '#f0fffe'}
                >
                  <Flex align="center" mb={2}>
                    <Box
                      mr={4}
                      w={10}
                      h={10}
                      bg="gray.300"
                      borderRadius="full"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {getIcon(event.icon)}
                    </Box>
                    <Box bg='#aaf5ff' color={'black'} p={2} borderRadius={'lg'}>
                      <Text fontSize="md" fontWeight="light">{event.time}</Text>
                    </Box>
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
