import React from "react";
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const CustomAccordion = ({ data }) => {
  return (
    <Box px={{ base: 4, md: 8, lg: 24 }} py={8}>
      <ChakraAccordion allowToggle>
        {data.map((item, index) => (
          <AccordionItem key={index} border="none">
            <h2>
              <AccordionButton
                bg="#0b7c8b" 
                color="white" 
                mb={2}
                _hover={{ bg: "#095e67" }} 
                _expanded={{ bg: "#06515b", color: "white" }} 
                transition="background-color 0.3s ease" 
              >
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontWeight="bold"
                >
                  {item.heading}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              transition="all 3s ease-in-out" 
              border={'1px solid black'}
              mb={2}
            >
              {item.text}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </ChakraAccordion>
    </Box>
  );
};

export default CustomAccordion;
