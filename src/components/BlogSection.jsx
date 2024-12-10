import React from 'react';
import { Box, Container, Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import img1 from '../assets/images/options-nearby-min.png'
import img2 from '../assets/images/Panshet-min.png'
const BlogSection = () => {
  return (
    <Box py="10" bg="#f8f8f8">
      <Container maxW="1200px" px="6">
        <Flex direction="column" align="center" mb="10">
          <Heading as="h2" fontSize="3xl" fontWeight="300" color="black">
            Our Blog
          </Heading>
          <Text color="#454444" fontSize="lg">
            Ideas for your next weekend
          </Text>
        </Flex>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="center"
          spacing="8"
          textAlign="start"
          gap={8}
        >
          {/* Blog 1 */}
          <Box flex="1" mb="6" borderRadius="lg" overflow="hidden">
            <Image
              src={img2}
              alt="Panshet Dam"
              borderRadius="md"
              
              w="100%"
              h="200px"
            />
            <Heading size="md" mt="4" color="teal.600">
              <a href="/blog/panshet-dam-how-to-reach-time-prices/">Panshet Dam - How to Reach, Time &amp; Prices</a>
            </Heading>
            <Text fontSize="sm" color="gray.500" my="2">
              by Kavita <span className="mx-2">•</span> Jul 29, 2022 at 10:45 am
            </Text>
            <Text fontSize="md" color="black">
              Situated on the outskirts of Pune city, about 50 km to its South, Panshet is home to lush greenery,
              gushing waterfalls, and mountains. It is known for its unparalleled natural beauty and an absolutely
              enthralling ambiance.
            </Text>
          </Box>

          {/* Blog 2 */}
          <Box flex="1" mb="6" borderRadius="lg" overflow="hidden">
            <Image
              src={img1}
              alt="Best Camping Options"
              borderRadius="md"
              
              w="100%"
              h="200px"
            />
            <Heading size="md" mt="4" color="teal.600">
              <a href="/blog/best-camping-near-mumbai-pune/">11 Best Camping Options Near Mumbai and Pune</a>
            </Heading>
            <Text fontSize="sm" color="gray.500" my="2">
              by Sara <span className="mx-2">•</span> Jan 10, 2022 at 4:30 pm
            </Text>
            <Text fontSize="md" color="black">
              From the picturesque mountains to the natural Konkan coastal strip, Maharashtra is a breathtaking
              sight. It is a paradise for explorers; the state is renowned for its diverse culture and cuisine.
            </Text>
          </Box>
        </Flex>

        {/* View All Button */}
        <Flex justify="center" mt="6">
          <Button
            as="a"
            href="/blog"
            background={'#337ab7'}
            color={'white'}
            fontSize={'14px'}
            variant="outline"
            size="lg"
            borderRadius={'none'}
            px="6"
            py="3"
            _hover={{background: 'white', color:' black', border: '1px solid black',}}
          >
            View All Blog Posts
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default BlogSection;
