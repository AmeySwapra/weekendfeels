import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Text,
  Icon,
  Badge,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Skeleton,
} from "@chakra-ui/react";
import { FaCalendarCheck, FaMapSigns, FaClock } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Loading from "./Loading"; // Import the Loading component

const TrekCard = ({ trek }) => {
  return (
    <Center py={4}>
      <Box
        w={{ base: "85%", md: "100%", lg: "100%" }}
        border="1px solid #e2e8f0"
        borderRadius="md"
        overflow="hidden"
        bg="white"
        boxShadow="sm"
        position="relative"
        _hover={{
          ".image-container": {
            transform: "scale(1.1)",
          },
          ".text-overlay": {
            transform: "translateY(-30px)",
          },
        }}
      >
        <Link to={`/${trek.link}`}>
          <Box textAlign="center" position="relative" overflow="hidden">
            {/* Image Container */}
            <Box
              className="image-container"
              transition="transform 0.5s ease"
              position="relative"
            >
              <Image
                src={trek.image}
                alt={trek.title}
                objectFit="cover"
                w="100%"
                h="200px"
              />
              {/* Dark Overlay */}
              <Box
                className="image-overlay"
                bg="rgba(0, 0, 0, 0.3)"
                position="absolute"
                bottom={0}
                w="100%"
                h="22%"
              />
              {/* Text Overlay */}
              <Box
                className="text-overlay"
                color="white"
                position="absolute"
                bottom={0}
                w="100%"
                p={2}
                transition="transform 0.5s ease"
              >
                <Text fontWeight="bold" fontSize="md">
                  {trek.title}
                </Text>
              </Box>
            </Box>
          </Box>
        </Link>
        <Box p={3}>
          <Flex align="center" mb={2}>
            <Icon as={FaCalendarCheck} color="#0b7c8b" />
            <Text ml={2} fontSize="sm">
              {trek.date}
            </Text>
            {/* Popover for date picker */}
            <Popover>
              <PopoverTrigger>
                <Link ml={2} fontSize="sm" color="blue.500">
                  More Date
                </Link>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverBody>
                  {/* Date picker component */}
                  <DatePicker selected={new Date()} onChange={() => {}} />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={2} mb={3}>
            <Flex align="center">
              <Icon as={FaMapSigns} color="#0b7c8b" />
              <Text ml={2} fontSize="sm">
                {trek.location}
              </Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaClock} color="#0b7c8b" />
              <Text ml={2} fontSize="sm">
                {trek.duration}
              </Text>
            </Flex>
          </Grid>
          <Divider mb={1} />
          <Text>
            <Text as="span" textDecoration="line-through" fontSize="sm" mr={2}>
              ₹{trek.originalPrice}
            </Text>
            <Badge
              bg="#f6a01c"
              fontSize="xs"
              color={"blackAlpha.600"}
              fontWeight={"500"}
            >
              {trek.discount}
            </Badge>
          </Text>
          <Flex justify="space-between" align="center" mt={3}>
            <Text fontSize="lg" color="#0b7c8b" fontWeight="bold">
              ₹{trek.discountedPrice} onwards
            </Text>
            <Button
              as={Link}
              href={trek.link}
              textDecoration={"none"}
              borderRadius="none"
              colorScheme="blue"
              size="sm"
            >
              Know More
            </Button>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

const TrekCards = ({ trekDetails = [], isLoading }) => {
  return (
    <Box p={4} px={{ base: 4, md: 8, lg: 24 }}>
      {isLoading ? (
        <Loading /> 
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {trekDetails.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TrekCards;
