import React from "react";
import Slider from "react-slick";
import {
  Box,
  Image,
  Text,
  Flex,
  Badge,
  Button,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/camp/list (1).jpg";
import img2 from "../assets/camp/list (2).jpg";
import img3 from "../assets/camp/list (3).jpg";
import img4 from "../assets/camp/list (4).jpg";
import img5 from "../assets/camp/list (5).jpg";

const campingDestinations = [
  {
    id: 1,
    name: "Pawna Lake Camping",
    image: img1,
    rating: 4.5,
    reviews: 1689,
    originalPrice: 1399,
    discount: 29,
    finalPrice: 999,
    link: "pawna-lake",
  },
  {
    id: 2,
    name: "Alibaug Beach Camping",
    image: img2,
    rating: 4.7,
    reviews: 1009,
    originalPrice: 1499,
    discount: 20,
    finalPrice: 1199,
    link: "alibag-beach",
  },
  {
    id: 3,
    name: "Panshet Dam Camping",
    image: img3,
    rating: 4.6,
    reviews: 288,
    originalPrice: 1199,
    discount: 17,
    finalPrice: 999,
    link: "panshet-dam",
  },
  {
    id: 4,
    name: "Pawna Riverside Camping",
    image: img4,
    rating: 4.7,
    reviews: 912,
    originalPrice: 1499,
    discount: 20,
    finalPrice: 1199,
    link: "pawna-river",
  },
  {
    id: 5,
    name: "Alibaug Nagaon Beach Camping",
    image: img5,
    rating: 4.6,
    reviews: 704,
    originalPrice: 1499,
    discount: 17,
    finalPrice: 1249,
    link: "alibaug-navegaon",
  },
];

const CampingCard = ({
  name,
  image,
  rating,
  reviews,
  originalPrice,
  discount,
  finalPrice,
  link,
}) => {
  return (
    <Link to={`/${link}`}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        p={{ base: "3", md: "4" }}
        m={{ base: "5px", md: "10px" }}
      >
        <Image
          src={image}
          alt={name}
          width="100%"
          height={{ base: "150px", md: "200px" }}
          objectFit="cover"
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.05)" }}
        />
        <VStack align="start" spacing="2" mt="4">
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            color="teal.600"
          >
            {name}
          </Text>
          <Flex align="center">
            <Badge colorScheme="green" mr="2">
              {rating} ★
            </Badge>
            <Text fontSize="sm" color="gray.500">
              {reviews} reviews
            </Text>
          </Flex>
          <Flex justify="space-between" width="100%">
            <Text
              fontSize="sm"
              color="gray.500"
              textDecoration="line-through"
            >
              ₹{originalPrice}
            </Text>
            <Text fontSize="sm" color="red.500">
              {discount}% Off
            </Text>
          </Flex>
          <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color="teal.700">
            ₹{finalPrice}
          </Text>
          <Link to={`/${link}`}>
            <Button colorScheme="teal" size="sm" mt="2">
              Explore
            </Button>
          </Link>
        </VStack>
      </Box>
    </Link>
  );
};

const CampingSlider = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <IconButton
        aria-label="Next slide"
        icon={<ChevronRightIcon />}
        variant="ghost"
        fontSize={"40px"}
        position="absolute"
        top="50%"
        right="-30px"
        transform="translateY(-50%)"
        zIndex="2"
        _hover={{ opacity: 1 }}
      />
    ),
    prevArrow: (
      <IconButton
        aria-label="Previous slide"
        icon={<ChevronLeftIcon />}
        variant="ghost"
        fontSize={"40px"}
        position="absolute"
        top="50%"
        left="-30px"
        transform="translateY(-50%)"
        zIndex="2"
        _hover={{ opacity: 1 }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box maxW="1200px" mx="auto" p="4" position="relative">
      <Text
        fontSize={{ base: "2xl", md: "3xl" }}
        color={"teal.400"}
        fontWeight="400"
        textAlign="center"
        mb="6"
      >
        Where To Next?
      </Text>
      <Slider {...sliderSettings}>
        {campingDestinations.map((destination) => (
          <CampingCard key={destination.id} {...destination} />
        ))}
      </Slider>
      <Flex justify="center" mt="6">
        <Link to={"/camp"}>
          <Button
            w={{ base: "200px", md: "300px" }}
            h={"50px"}
            background={"#f0ad4e"}
            borderRadius={"none"}
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={"400"}
            _hover={{ background: "#f4f4f4", border: "2px solid black" }}
          >
            View All Campsites
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default CampingSlider;
