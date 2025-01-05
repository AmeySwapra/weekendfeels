import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

 
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  
  const imageBoxSize = useBreakpointValue({
    base: "100%", 
    md: "75%", 
    lg: "70%", 
  });

  const buttonSize = useBreakpointValue({
    base: "30px", 
    md: "40px", 
    lg: "50px", 
  });

  return (
    <Box
      position="relative"
      id="photos"
      width={imageBoxSize}
      margin="0 auto"
      borderRadius="5px"
      overflow="hidden"
      boxShadow="md"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        position="relative"
      >
        {/* Image */}
        <Image
          src={images[currentIndex]}
          alt={`Gallery Image ${currentIndex + 1}`}
          width="100%"
          maxHeight="500px"
          objectFit="cover"
        />

        {/* Navigation Buttons */}
        <IconButton
          aria-label="Previous"
          icon={<ChevronLeftIcon />}
          position="absolute"
          top="50%"
          left="10px"
          zIndex="2"
          transform="translateY(-50%)"
          onClick={goToPrev}
          colorScheme="teal"
          size={buttonSize}
        />
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon />}
          position="absolute"
          top="50%"
          right="10px"
          zIndex="2"
          transform="translateY(-50%)"
          onClick={goToNext}
          colorScheme="teal"
          size={buttonSize}
        />
      </Flex>

      {/* Bullet Navigation (optional) */}
      <Flex justify="center" mt="2">
        {images.map((_, index) => (
          <Box
            key={index}
            as="span"
            width="10px"
            height="10px"
            borderRadius="full"
            margin="0 5px"
            backgroundColor={currentIndex === index ? "teal.500" : "gray.400"}
            onClick={() => setCurrentIndex(index)}
            cursor="pointer"
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ImageGallery;
