import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,

  Spacer,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../../assets/logo/logo.webp";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      bg="gray.800"
      color="white"
      w="100%"
      px={{ base: 4, md: 8, lg: 24 }}
      py={3}
      position="fixed"
      top={0}
      zIndex={10}
      boxShadow="md"
    >
      <Flex
        align="center"
        maxW="container.xl"
        mx="auto"
        justify="space-between"
      >
        <Link href="/" display="flex" alignItems="center">
          <Image
            src={logo}
            alt="Weekend Feels"
            maxW={{ base: "150px", md: "200px", lg: "275px" }}
            transition="all 0.2s ease-in-out"
          />
        </Link>

        <Spacer />

        <IconButton
          icon={<HamburgerIcon />}
          display={{ base: "block", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="Toggle Navigation"
          borderColor="white"
          color="white"
          _hover={{ bg: "gray.700" }}
        />

        {/* Desktop Navigation */}
        <HStack
          as="ul"
          spacing={6}
          display={{ base: "none", md: "flex" }}
          fontSize={{ base: "16px", lg: "18px" }}
        >
          {[
            { name: "Home", link: "/" },
            { name: "Camps", link: "/camp" },
            { name: "Treks", link: "/trek" },
            {
              name: "NYE'25 Special",
              link: "/nye25",
              style: { color: "#bd71ff" },
            },
            { name: "Blog", link: "/blog", isExternal: true },
            { name: "Careers", link: "/careers" },
            { name: "About", link: "/about" },
          ].map(({ name, link, isExternal, style }) => (
            <Link
              key={name}
              to={link}
              isExternal={isExternal}
              style={style}
              _hover={{ textDecoration: "none", color: "yellow.300" }}
              as="li"
              listStyleType="none"
            >
              {name}
            </Link>
          ))}
        </HStack>

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent mt="60px" borderTop="1px solid yellow" bg="gray.800">
            <DrawerBody>
              <HStack
                as="ul"
                spacing={4}
                flexDirection="column"
                alignItems="flex-start"
                fontSize="18px"
                color="white"
              >
                {[
                  { name: "Home", link: "/" },
                  { name: "Camps", link: "/camp" },
                  { name: "Treks", link: "/trek" },
                  {
                    name: "NYE'25 Special",
                    link: "/nye25",
                    style: { color: "#bd71ff" },
                  },
                  { name: "Blog", link: "/blog", isExternal: true },
                  { name: "Careers", link: "/careers" },
                  { name: "About", link: "/about" },
                ].map(({ name, link, isExternal, style }) => (
                  <Link
                    key={name}
                    to={link}
                    isExternal={isExternal}
                    style={style}
                    _hover={{ textDecoration: "none", color: "yellow.300" }}
                    as="li"
                    listStyleType="none"
                    onClick={onClose}
                  >
                    {name}
                  </Link>
                ))}
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
