import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import bgImg from '../../assets/images/cstripe.png'
const MotionHeading = motion(Flex);

const HeaderName = ({ text }) => {
  return (
    <Box
      bgImage={`url(${bgImg})`}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      w="100%"
      mt={'125px'}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        h="80px" 
      >
        <MotionHeading
          as="h1"
          fontSize={{ base: "2xl", md: "4xl" }}
          my={4}
          fontWeight='400'
          color="black" 
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            duration: 0.8,
          }}
        >
          {text}
        </MotionHeading>
      </Flex>
    </Box>
  );
};

export default HeaderName;
