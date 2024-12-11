import { Box, Text, List, ListItem, Icon, VStack, HStack } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa'; // Check circle icon

function SideSection({ placeName }) {
  // Construct the Google Maps URL dynamically using the placeName prop
  const mapURL = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${placeName}&zoom=10&maptype=roadmap`;

  return (
    <Box className="col-md-4 col-lg-4 p-0" textAlign="center" paddingTop="10px" height="fit-content">
      {/* Location Section */}
     
      {/* Embed Google Map with coordinates */}
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        <Text fontWeight="bold" mb={2}>
          Map Location
        </Text>
        <iframe
          width="300"
          height="300"
          loading="lazy"
          allowFullScreen
          src={mapURL} // Dynamically use mapURL
          style={{ border: '0', borderRadius: '8px' }}
        ></iframe>
      </Box>

      {/* Why Weekend Feels Section */}
      <Box mt={6} p={4} borderRadius="lg" boxShadow="md" backgroundColor="gray.50">
       <Box background={'#ea7e06'} color={'white'}>
       <Text fontWeight="bold" fontSize="xl" mb={4} textAlign="center">
          Why Weekend Feels
        </Text>
       </Box>
        <List spacing={4}>
          <ListItem>
            <HStack>
              <Icon as={FaCheckCircle} boxSize={6} color="#EA2C0E" />
              <VStack align="start">
                <Text fontWeight="bold">Actual Location Pictures</Text>
                <Text>All the images advertised are of the actual campsite.</Text>
              </VStack>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack>
              <Icon as={FaCheckCircle} boxSize={6} color="#EA2C0E" />
              <VStack align="start">
                <Text fontWeight="bold">Partial Payment Options Available</Text>
                <Text>Book your tour with just advance payment and pay the rest at the time of check-in.</Text>
              </VStack>
            </HStack>
          </ListItem>
          <ListItem>
            <HStack>
              <Icon as={FaCheckCircle} boxSize={6} color="#EA2C0E" />
              <VStack align="start">
                <Text fontWeight="bold">Completely Automated & Secure</Text>
                <Text>Booking process is completely secured with SSL protocol and you get automated confirmation & notification related to your booking regularly.</Text>
              </VStack>
            </HStack>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default SideSection;
