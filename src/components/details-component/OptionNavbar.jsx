import React from 'react';
import { Box, Flex, Text, Link, Stack } from '@chakra-ui/react';

function OptionNavbar({ overviewText = [] }) {
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
      {/* Navbar */}
      <Box
        id="option_navbar"
        bg="#0b7c8b"
        p={3}
        borderRadius="md"
        className="opt_menu"
        mb={4}
        mx={{ base: 0, md: 3 }} // Adjust margin for small and large screens
      >
        <Flex
          direction={{ base: 'column', sm: 'row' }} // Column for smaller screens, row for larger
          gap={{ base: 2, sm: 6 }} // Smaller gap on mobile, larger gap for larger screens
          align={{ base: 'flex-start', sm: 'center' }}
          color="white"
        >
          <Link href="#fold2" className="mbtn active">
            Overview
          </Link>
          <Link href="#containerBox3" className="mbtn">
            Itinerary
          </Link>
          <Link href="#photos" className="mbtn">
            Photogallery
          </Link>
          <Link href="#containerBox6" className="mbtn">
            FAQs
          </Link>
          <Link href="#containerBox4" className="mbtn">
            Advisory
          </Link>
        </Flex>
      </Box>

      {/* Overview Section */}
      <Box id="fold2" className="p-2" mt={4}>
        <Stack spacing={4} px={{ base: 4, sm: 6, md: 8 }}> {/* Padding adjusts for screen sizes */}
          <Box id="overview">
            {renderTextSection(overviewText)}
          </Box>
        </Stack>
      </Box>
    </div>
  );
}

export default OptionNavbar;
