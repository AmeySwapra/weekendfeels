import {
  Box,
  VStack,
  Text,
  Image,
  Flex,
  Center,
  Divider,
} from "@chakra-ui/react";
import pic1 from "../assets/images/Manish.webp";
import pic2 from "../assets/images/Meenal.webp";
import pic3 from "../assets/images/Rosy.webp";

const Testimonial = () => {
  const testimonials = [
    {
      image: pic2,
      name: "Meenal",
      role: "Traveler",
      text: `“We went to Alibaug beach camping with WeekendFeels and guess what, everything was above expectations. We loved the place from where it started- the welcome drink, the starters, the activities, the music, the dinner, the friendly staff, and the live music. We blend in the night and we forgot that our life has a lot of tensions in our daily routine. At last, the open-air cinema and campfire ♥. We enjoyed every single second of that night. We can't express the feelings in words so if you want to know, you have to visit there.”`,
    },
    {
      image: pic1,
      name: "Manish",
      role: "Adventurer",
      text: `“We really had a great time. The entire team were very friendly and helpful. Camping site is amazingly beautiful and serene. Luckily we also got to view Saturn and Jupiter from there, and the open sky and starry night were mesmerizing. But you need to improve the approach road. Tents were clean and spacious. We were the only family so the staff took utmost care of our safety. Overall this one-day picnic was a good change from the usual city stress.”`,
    },
    {
      image: pic3,
      name: "Rosy",
      role: "Nature Lover",
      text: `“What an amazing experience.. Nature has so much to give us... an extremely beautiful location WeekendFeels had suggested us n we enjoyed so so much!! From start till the end, be the food, the activities, night safari everything has its own charm. Igatpuri campsite was so amazing that one should definitely visit once.. What an experience!”`,
    },
  ];

  return (
    <Box
      bg="#e0e0e0"
      py={10}
      px={{ base: 6, md: 12, lg: 24 }}
    >
      <Center mb={8}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="400"
          color="black"
        >
          Testimonials
        </Text>
      </Center>

      <Flex
        justify="center"
        wrap="wrap"
        gap={{ base: 4, md: 6, lg: 8 }}
        align="flex-start"
      >
        {testimonials.map((testimonial, index) => (
          <VStack
            key={index}
            align="center"
            p={4}
            spacing={4}
            textAlign="center"
            w={{ base: "100%", sm: "48%", md: "30%" }}
            bg="white"
            boxShadow="md"
            borderRadius="md"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              borderRadius="full"
              boxSize={{ base: "80px", md: "100px" }}
              objectFit="cover"
            />
            <Text
              color="gray.600"
              fontSize={{ base: "sm", md: "md" }}
              minH="150px"
            >
              {testimonial.text}
            </Text>
            <Divider borderColor="gray.300" />
            <Text fontWeight="bold">
              — <Text as="em">{testimonial.name}</Text>,{" "}
              <Text as="span" color="blue.500">
                {testimonial.role}
              </Text>
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonial;
