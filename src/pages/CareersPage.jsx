import React from 'react'
import HeaderName from '../components/Common/HeaderName'
import Footer from '../components/Common/Footer'
import Navbar from '../components/Common/Navbar'
import { Box, Heading, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
import Accordion from '../components/Common/Accordion'

function CareersPage() {

    const accordionData = [
        { heading: "Why join WeekendFeels?", text: "It's a fast-paced environment with room for growth and innovation." },
        { heading: "What we offer", text: "Work on exciting projects with a customer base of over 50,000." },
        { heading: "Our Philosophy", text: "We value structured work but encourage experimentation and creativity." },
      ];
  return (
    <>
      <Navbar/>
      <HeaderName text={'Careers'}/>
      <VStack
      spacing={4}
      align="start"
      textAlign="start"
      px={{ base: 4, md: 8, lg: 24 }}
      py={6}
      color={'black'}
    >
      <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
        Why work with WeekendFeels?
      </Heading>

      <Box maxW="600px">
        <UnorderedList spacing={3} textAlign="left" styleType="disc">
          <ListItem>
            Opportunity to work in a high-paced environment, quite literally.
            We take decisions in an instant.
          </ListItem>
          <ListItem>
            Apply your skills to a customer base of more than 50k.
          </ListItem>
          <ListItem>
            We believe in allowing the individual to grow their skillset with
            us.
          </ListItem>
          <ListItem>
            We do love structured work but at the same time, we won't stop you
            from experimenting with different strategies.
          </ListItem>
          <ListItem>Your thoughts and ideas will be highly valued.</ListItem>
        </UnorderedList>
      </Box>
    </VStack>
    <Accordion data={accordionData} />
      <Footer/>
    </>
  )
}

export default CareersPage