import { Box, Center, Flex, Grid, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Loading = () => {
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
      >
        <Box textAlign="center" position="relative" overflow="hidden">
          {/* Image Container */}
          <Skeleton height="200px" w="100%" />
          {/* Dark Overlay */}
          <Box
            bg="rgba(0, 0, 0, 0.3)"
            position="absolute"
            bottom={0}
            w="100%"
            h="22%"
          />
          {/* Text Overlay */}
          <Box
            color="white"
            position="absolute"
            bottom={0}
            w="100%"
            p={2}
          >
            <SkeletonText noOfLines={1} skeletonHeight="4" w="50%" mx="auto" />
          </Box>
        </Box>
        <Box p={3}>
          <Flex align="center" mb={2}>
            <SkeletonCircle size="5" />
            <Skeleton height="4" w="20%" ml={2} />
          </Flex>
          <Grid templateColumns="repeat(2, 1fr)" gap={2} mb={3}>
            <Flex align="center">
              <SkeletonCircle size="5" />
              <Skeleton height="4" w="40%" ml={2} />
            </Flex>
            <Flex align="center">
              <SkeletonCircle size="5" />
              <Skeleton height="4" w="40%" ml={2} />
            </Flex>
          </Grid>
          <Box mb={2}>
            <Skeleton height="2px" w="100%" />
          </Box>
          <Flex align="center" justify="space-between" mt={3}>
            <Skeleton height="5" w="25%" />
            <Skeleton height="6" w="20%" borderRadius="md" />
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

export default Loading;
