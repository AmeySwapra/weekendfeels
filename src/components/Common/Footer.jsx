import {
  Box,
  VStack,
  HStack,
  Text,
  Link,
  Image,
  Divider,
  Stack,
} from "@chakra-ui/react";
import {
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaFacebook,
  FaQuora,
  FaTwitter,
  FaBlogger,
} from "react-icons/fa";
import paymentLogo from "../../assets/logo/payments.png";

const Footer = () => {
  return (
    <Box bg="#212529" color="#999999" py={8} px={{ base: 6, md: 16, lg: 24 }}>
      <Box maxW="1200px" mx="auto">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={6}
          justify="space-between"
          align="stretch"
        >
          <VStack
            align="flex-start"
            spacing={4}
            w={{ base: "100%", md: "30%" }}
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              Contact Info
            </Text>
            <Text>We are available Mon-Sat 10AM-11PM</Text>
            <Link
              href="mailto:info@weekendfeels.com"
              _hover={{ color: "white", textDecoration: "none" }}
            >
              info@weekendfeels.com
            </Link>
            <Divider borderColor="#717171" />
            <Text>
              <Text as="span">Sales Office: </Text>
              <Link
                href="tel:+919315818031"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                +91-93158 18031
              </Link>
            </Text>
          </VStack>

          <VStack
            align={{ base: "flex-start", md: "center" }}
            spacing={4}
            w={{ base: "100%", md: "30%" }}
          >
            <Text fontSize="lg" fontWeight="bold" color="white">
              About WeekendFeels
            </Text>
            <VStack align="flex-start" spacing={4}>
              <Link
                href="/about"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                About Us
              </Link>
              <Link
                href="/tnc"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/news"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                News
              </Link>
              <Link
                href="/careers"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                Careers
              </Link>
              <Link
                href="/influencer"
                bgClip="text"
                bgGradient="linear(to-r, #fc01d7, #ff7c9d)"
              >
                Influencer Program
              </Link>
            </VStack>
          </VStack>

          <VStack
            align="flex-start"
            spacing={4}
            w={{ base: "100%", md: "30%" }}
          >
            <Text>
              The payment is encrypted and transmitted securely with SSL
              protocol.
            </Text>
            <Image
              src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-09.png"
              alt="DMCA Protection Status"
            />
            <Image
              src={paymentLogo}
              alt="Payment Methods"
              boxSize={{ base: "80px", md: "100px" }}
            />
          </VStack>
        </Stack>

        <Divider my={6} borderColor="#717171" />

        <HStack justify="center" spacing={6} wrap="wrap">
          <Link
            href="https://www.instagram.com/myweekendfeels/"
            target="_blank"
          >
            <FaInstagram size="40px" color="white" />
          </Link>
          <Link href="https://in.pinterest.com/myweekendfeels/" target="_blank">
            <FaPinterest size="40px" color="white" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/weekendfeels"
            target="_blank"
          >
            <FaLinkedin size="40px" color="white" />
          </Link>
          <Link href="https://www.facebook.com/myweekendfeels" target="_blank">
            <FaFacebook size="40px" color="white" />
          </Link>
          <Link href="https://www.quora.com/q/weekendfeels" target="_blank">
            <FaQuora size="40px" color="white" />
          </Link>
          <Link href="https://twitter.com/feelsweekend" target="_blank">
            <FaTwitter size="40px" color="white" />
          </Link>
          <Link href="/blog" target="_blank">
            <FaBlogger size="40px" color="white" />
          </Link>
        </HStack>

        <Text textAlign="center" mt={4} fontSize="sm">
          Copyright ©2024 All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
