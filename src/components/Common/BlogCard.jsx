import React, { useState } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Link,
  Grid,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";

const Card = ({ title, excerpt, imageUrl, link }) => {
  return (
    <Box
      maxW="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
    >
      <Link href={link} isExternal>
        <Image
          src={imageUrl}
          alt={title}
          objectFit="cover"
          w="100%"
          h="200px"
        />
      </Link>

      <Box p="4">
        <Heading as="h3" fontSize="lg" mb="2" color="blue.600">
          <Link href={link} isExternal>
            {title}
          </Link>
        </Heading>

        <Text fontSize="sm" color="gray.600" noOfLines={3}>
          {excerpt}
        </Text>

        <Link
          href={link}
          isExternal
          color="teal.500"
          fontWeight="bold"
          display="block"
          mt="4"
        >
          Read More »
        </Link>
      </Box>
    </Box>
  );
};

const BlogCard = ({ cardsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardsData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  return (
    <Box p={4} px={{ base: 4, md: 8, lg: 24 }} overflowX="hidden">
      {/* Responsive Grid for Cards */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: "20px", md: "40px", lg: "60px" }}
        px={{ base: 4, md: 8, lg: 24 }}
      >
        {currentItems.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            excerpt={card.excerpt}
            imageUrl={card.imageUrl}
            link={card.link}
          />
        ))}
      </Grid>

      {/* Responsive Pagination */}
      <Flex
        mt={6}
        justify="center"
        flexWrap="wrap"
        gap={2}
        p={2}
        overflowX="hidden"
      >
        <Button
          size={{ base: "sm", md: "md" }}
          onClick={() => paginate(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>

        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            size={{ base: "sm", md: "md" }}
            onClick={() => paginate(index + 1)}
            variant={currentPage === index + 1 ? "solid" : "outline"}
          >
            {index + 1}
          </Button>
        ))}

        <Button
          size={{ base: "sm", md: "md" }}
          onClick={() => paginate(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default BlogCard;
