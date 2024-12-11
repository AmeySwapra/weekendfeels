import React from 'react';
import { Box, Flex, Text, Link, Stack } from '@chakra-ui/react';

function OptionNavbar({
  overviewText = [],

}) {

  const renderTextSection = (textArray) => {
    if (!Array.isArray(textArray)) return null; 
    return textArray.map((paragraph, index) => (
      <Text key={index} mb={4}>
        {paragraph}
      </Text>
    ));
  };

  return (
    <div>
     
      <Box id="option_navbar" bg="#0b7c8b" p={2} ml={3} borderRadius="md" className="opt_menu" mb={4}>
        <Flex direction="row" gap={6} align="flex-start" color={'white'} size="md">
          <Link href="#fold2" className="mbtn active" mb={2}>
            Overview
          </Link>
          <Link href="#containerBox3" className="mbtn" mb={2}>
            Itinerary
          </Link>
          <Link href="#photos" className="mbtn" mb={2}>
            Photogallery
          </Link>
          <Link href="#containerBox6" className="mbtn" mb={2}>
            FAQs
          </Link>
          <Link href="#containerBox4" className="mbtn" mb={2}>
            Advisory
          </Link>
        </Flex>
      </Box>

   
      <Box id="fold2" className="p-2" mt>
        <Stack spacing={4}>
          <Box id="overview" ml={4}>
            {renderTextSection(overviewText)}
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default OptionNavbar;
