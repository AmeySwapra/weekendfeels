import React from "react";
import { Box, Image, Text, VStack, Container, Heading } from "@chakra-ui/react";
import missionImg from '../assets/images/mission.png'
const MissionComponent = () => {
  return (
    <Box pt="82px">
      {/* Image Section */}
      <Box textAlign="center">
        <Image
          src={missionImg}
          alt="WeekendFeels Mission"
          width="100%"
          objectFit="cover"
        />
      </Box>

      {/* Content Section */}
      <Container maxW="container.lg" mt="25px" mb='25px'>
        {/* Description */}
        <VStack spacing={6} align="start">
          <Text fontSize="lg">
            Weekends are the shortest period in the entire week. It is how we
            perceive time, in other words, psychological time. We do not so much
            perceive time itself, but changes in or the passage of time, or what
            might be described as "events in time".
          </Text>
          <Text fontSize="lg">
            At WeekendFeels, we are committed to creating "events in time".
            Create a short weekend escape experience so smooth that one wants to
            relive those moments again and again. Thus making weekends the
            longest period in the entire week.
          </Text>
          <Text fontSize="lg">
            WeekendFeels was born with the vision to create interesting stories
            in our customer's lives. Being transparent with our offering
            combined with the customer-centric approach helped us to set the
            expectation beforehand of our travelers.
          </Text>
          <Text fontSize="lg">
            We put all the checks and balances to ensure that our customers are
            safe and secure at the same time they are having a great time while
            they are with us.
          </Text>
          <Text fontSize="lg" mb="40px">
            We take pride in empowering our partners who took the responsibility
            of fulfilling our vision. The local entrepreneurs enabled with the
            correct set of information helped us to create a tailor-made
            experience for our travelers.
          </Text>
        </VStack>

        {/* Official Details */}
        <VStack align="start" spacing={2} mt={6}>
          <Heading as="h3" size="md" fontWeight="bold">
            Official Company Details:
          </Heading>
          <Text>
            <b>Name: </b>WEEKENDFEELS TRAVELS TECHNOLOGIES LLP
          </Text>
          <Text>
            <b>Registration Number: </b>AAS-6152
          </Text>
          <Text>
            <b>GST Number: </b>07AADFW4817G1Z4
          </Text>
          <Text>
            <b>TAN Number: </b>DELW07202G
          </Text>
          <Text>
            <b>Trademark Number ™: </b>5253816
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default MissionComponent;
