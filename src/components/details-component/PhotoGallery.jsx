import React, { useState } from 'react';
import { Box, Button, Grid, Image, Text, Stack } from '@chakra-ui/react';

function PhotoGallery({ images = [] }) {
  const [visibleImages, setVisibleImages] = useState(9); 
  const imagesToShow = images.slice(0, visibleImages);

 
  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 9); 
  };

  return (
    <Box className="container" py={10}  px={{ base: 6, md: 16, lg: 24 }}>
      <Stack spacing={6} align="center">
        <Box textAlign="center">
          <Text fontSize="2xl" fontWeight="light" color="black" mb={5}>
            Photo Gallery
          </Text>
          <Text fontSize="lg" color="#6e6e6e">
            Post an image of your trip &amp; tag @myweekendfeels for the chance to be featured here!
          </Text>
        </Box>

        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)', 
            sm: 'repeat(2, 1fr)',   
            md: 'repeat(3, 1fr)',  
            lg: 'repeat(6, 1fr)',   
          }}
          gap={1}
        >
          {imagesToShow.map((image, index) => (
            <Box key={index} className="img-c" position="relative">
              <Box
                className="img-w"
                bgImage={`url(${image})`}
                bgSize="cover"
                bgPosition="center"
                height="250px"  
                borderRadius="md"
                width="100%" 
              >
                <Image
                  src={image}
                  alt={`Triund Trek ${index}`}
                  loading="lazy"
                  objectFit="cover"  
                  height="100%"  
                  width="100%"  
                />
              </Box>
            </Box>
          ))}
        </Grid>

        {/* Load More Button */}
        {images.length > visibleImages && (
          <Button onClick={loadMoreImages} colorScheme="blue" variant="solid" mt={4}>
            Load More Photos
          </Button>
        )}
      </Stack>
    </Box>
  );
}

export default PhotoGallery;
