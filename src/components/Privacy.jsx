import { Box, Text, Stack, VStack, Link } from "@chakra-ui/react";

const Privacy = () => {
  return (
    <Box p={{ base: 4, md: 8, lg: 24 }} mt="25px">
      <Box textAlign="center" fontWeight="bold" fontSize="lg">
        DISCLAIMER
      </Box>
      <Text mt={4} fontStyle="italic">
        Please read this Privacy Policy carefully. By using the Website, you
        indicate that you understand, agree, and consent to this Privacy
        Policy. If you do not agree with the terms of this Privacy Policy,
        please do not use this Website.
      </Text>

      <Box textAlign="center" fontWeight="bold" fontSize="lg" mt={6}>
        PURPOSE
      </Box>
      <VStack spacing={4} align="start" mt={4}>
        <Text>
          This Privacy Policy (hereinafter referred to as the "Policy") is
          considered to be an electronic contract between{" "}
          <b>Weekendfeels Travels Technologies LLP</b> (hereinafter referred
          to as "We" / "Us" / "Our"/ "Company") and the <b>Website
          Users/Customer</b> (hereinafter referred to as "You" / "Your" /
          "Yourself"/ "User"). This Privacy Policy is governed by the
          provisions of the Information Technology Act, 2000, and the rules
          made thereunder, as well as the amended provisions pertaining to
          electronic documents/records in various statutes as amended by the
          Information Technology Act, 2000.
        </Text>
        <Text>
          This document is published and shall be construed in accordance
          with the provisions of the Information Technology (reasonable
          security practices and procedures and sensitive personal data of
          information) rules, 2011, under the Information Technology Act,
          2000; which require publishing of the Privacy Policy for
          collection, use, storage, and transfer of sensitive personal data
          or information.
        </Text>
        <Text>
          This Privacy Policy is a legally binding document between{" "}
          <b>Weekendfeels Travels Technologies LLP</b> and the User. The
          terms of this Privacy Policy will be effective upon your acceptance
          of the same (directly or indirectly in electronic form, by clicking
          on the "I Accept" tab or by use of the website or by other means)
          and will govern the relationship between{" "}
          <b>Weekendfeels Travels Technologies LLP</b> and the User, for the
          User's use of the Website.
        </Text>
        <Text>
          By providing Us with your Information or by making use of the
          facilities provided by the Website, the User hereby consents to the
          collection, storage, processing, and transfer of any or all
          Personal Information and Non-Personal Information by Us as
          specified under this Privacy Policy. The User further agrees that
          such collection, use, storage, and transfer of their information
          shall not cause any loss or wrongful gain to you or any other
          person.
        </Text>
      </VStack>

      <Box textAlign="center" fontWeight="bold" fontSize="lg" mt={6}>
        USER INFORMATION
      </Box>
      <VStack spacing={4} align="start" mt={4}>
        <Text>
          To avail of certain services on Our Websites, Users are required to
          provide certain information for the registration process which can
          include and is not limited to:
        </Text>
        <Text as="ul" pl={4}>
          <li>Name</li>
          <li>E-mail ID</li>
          <li>Sex</li>
          <li>Age</li>
          <li>PIN code</li>
          <li>Credit card or debit card details</li>
          <li>Medical records and history</li>
          <li>Sexual orientation</li>
          <li>Biometric information</li>
          <li>Password</li>
        </Text>
        <Text>
          The information that is gathered from you will not be considered
          sensitive if it is freely available and accessible in the public
          domain or is furnished under the Right to Information Act, 2005, or
          any other law for the time being in force.
        </Text>
      </VStack>

      <Box textAlign="center" fontWeight="bold" fontSize="lg" mt={6}>
        COOKIES
      </Box>
      <Text mt={4}>
        To improve the responsiveness of the sites for our Users, We may use
        "cookies" or similar electronic tools to collect information and to
        assign each visitor a unique User Identification Number.
      </Text>

      <Box textAlign="center" fontWeight="bold" fontSize="lg" mt={6}>
        LINKS TO OTHER SITES
      </Box>
      <Text mt={4}>
        Our Policy discloses the privacy practices for our own website only.
        Please note that Our Website provides links to other Third-Party
        Websites that are not under our control. The Company in no way shall
        be responsible for the User's access and use of such Third-party
        Websites.
      </Text>

      <Box textAlign="center" fontWeight="bold" fontSize="lg" mt={6}>
        INFORMATION SHARING
      </Box>
      <Text mt={4}>
        The Website shall not share any form of personal and sensitive data
        with a Third Party without prior consent of the User.
      </Text>

      <Box textAlign="center" fontWeight="bold" fontSize="lg" mt={6}>
        GRIEVANCE REDRESSAL
      </Box>
      <Text mt={4}>
        Any complaints, abuse, or concerns with regards to content or
        comments or breach of these terms shall be immediately informed to
        the designated Grievance Officer.
      </Text>
      <Stack spacing={1} mt={4} fontWeight="bold">
        <Text>Mr. Mohit (Grievance Officer)</Text>
        <Link href="https://www.weekendfeels.com" color="blue.500" isExternal>
          www.weekendfeels.com
        </Link>
        <Text>Email: mohit@weekendfeels.com</Text>
        <Text>Phone: +91 93158 18031</Text>
      </Stack>

      <Text textAlign="center" fontStyle="italic" mt={6}>
        Please note: This Privacy Policy does not require any physical,
        electronic, or digital signature.
      </Text>
    </Box>
  );
};

export default Privacy;
