import React from "react";
import { Box, Flex, Text, Icon, Divider } from "@chakra-ui/react";
import { FaTree, FaUsers, FaMapSigns } from "react-icons/fa";
import CountUp from 'react-countup';

const Exp = () => {
  return (
    <Box bg="#e0e0e0" py="10">
      <Box maxW="1200px" mx="auto" px="6">
        <Flex direction="column" align="center" mb="10">
          <Text fontSize="3xl" fontWeight="light" color="black">
            Our Experience
          </Text>
          <Text color="#454444" fontSize="lg">
            Your Trusted Partner for Memorable Moments
          </Text>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          spacing="6"
          textAlign="center"
        >
          <Box flex="1" p="6">
            <Icon as={FaTree} boxSize="10" color="#0b7c8b" />
            <Text fontSize="58px" fontWeight="400" mt="4" color="teal.600">
              <CountUp start={0} end={3486} duration={3} />
            </Text>
            <Divider borderColor="black" borderWidth="1px"  my="2" />
            <Text fontSize="lg" fontWeight="semibold" color="black">
              Camps Organized
            </Text>
          </Box>

          <Box flex="1" p="6">
            <Icon as={FaUsers} boxSize="10" color="#0b7c8b" />
            <Text fontSize="58px" fontWeight="400" mt="4" color="teal.600">
              <CountUp start={0} end={63650} duration={3} />
            </Text>
            <Divider borderColor="black" borderWidth="1px" my="2" />
            <Text fontSize="lg" fontWeight="semibold" color="black">
              Satisfied Customers
            </Text>
          </Box>

          <Box flex="1" p="6">
            <Icon as={FaMapSigns} boxSize="10" color="#0b7c8b" />
            <Text fontSize="58px" fontWeight="400" mt="4" color="teal.600">
              <CountUp start={0} end={10} duration={5} />
            </Text>
            <Divider borderColor="black" borderWidth="1px" my="2" />
            <Text fontSize="lg" fontWeight="semibold" color="black">
              Locations
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Exp;
