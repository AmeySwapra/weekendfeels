import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import Includes from '../components/details-component/Includes';
import Timeline from '../components/details-component/TimeLine';
import TrekComponent from '../components/details-component/TrekComponent';
import img1 from '../assets/trek/01-Triund_Trek.jpg';
import img2 from '../assets/trek/02-Triund_Trek.jpg';
import img3 from '../assets/trek/08-Triund_Trek.jpg';
import img4 from '../assets/trek/04-Triund_Trek.jpg';
import img5 from '../assets/trek/05-Triund_Trek.jpg';
import img6 from '../assets/trek/06-Triund_Trek.jpg';
import img7 from '../assets/trek/07-Triund_Trek.jpg';
import img8 from '../assets/trek/08-Triund_Trek.jpg';
import img9 from '../assets/trek/09-Triund_Trek.jpg';
import ImageGallery from '../components/details-component/ImageGallery';
import SideSection from '../components/details-component/SideSection';
import OptionNavbar from '../components/details-component/OptionNavbar';
import PhotoGallery from '../components/details-component/PhotoGallery';
import pimg1 from '../assets/trek/001.jpg'
import pimg2 from '../assets/trek/002.jpg'
import pimg3 from '../assets/trek/003.jpg'
import pimg4 from '../assets/trek/004.jpg'
import pimg5 from '../assets/trek/005.jpg'
import pimg6 from '../assets/trek/006.jpg'
import pimg7 from '../assets/trek/007.jpg'
import pimg8 from '../assets/trek/008.jpg'
import pimg9 from '../assets/trek/009.jpg'
import pimg10 from '../assets/trek/010.jpg'
import pimg11 from '../assets/trek/011.jpg'
import pimg12 from '../assets/trek/012.jpg'
import pimg13 from '../assets/trek/013.jpg'
import pimg14 from '../assets/trek/014.jpg'

function Bhandara() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const overviewText = [
    "Bhandardara Camping is 75 km from Nashik and 165 km from Pune. The campsite is on the banks of Arthur Lake, also known as Bhandardara Lake. Having been graced with generous natural vegetation, water bodies, and gorgeous sites, Bhandardara Lake Camping is a prime tourist spot in Maharashtra. It is a one-of-a-kind experience one must not miss out on!",
    "Bhandardara Lake Camping is best known for its adventure sports, fabulous sightseeing, best resort places, and breathtaking climate. Located 50 kms from Kasara railway station, our campsite is a hotspot of tourism for its natural beauty. This camp by the lake is a great place to stay and enjoy a getaway in the lap of nature.",
    "The best time to visit Bhandardara Lake is during the months of October to February, Bhandardara lakeside camping includes tent stays for 2 to 5 people, unlimited food for three meals, a fun-filled barbeque and musical night, outdoor games, and a bonfire. It also includes an open-air movie screening to enjoy. All this to make sure, you feel relaxed, refreshed, and recharged!",
    "There are a lot of things to do in Bhandardara. Some of the fascinating spots to visit here are Bhandardara Lake, Wilson Dam, and Umbrella Falls. You can enjoy Randha Falls, Ratangad Fort, and Kalsubai Peak also.",
    "There is an environmental tax that you need to pay when you enter the Bhandardara forest area. The charges are Rs.30 for adults, Rs.15 for kids, Rs.25 for two-wheelers, and Rs. 100 for four-wheelers.",
    "Related Reads: 12 Best Resorts In Bhandardara, 9 Best Things To Do In Bhandardara"
  ];
    
  const pimages = [pimg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7, pimg8, pimg9, pimg10, pimg11, pimg12, pimg13, pimg14]
  const timelineData = [
    {
      day: "Day 1",
      events: [
        {
          time: "03:00 PM",
          activity: "Reach at the campsite on your own",
          icon: "checkin"
        },
        {
          time: "05:30 PM",
          activity: "Watch the sun go down the horizon from your lakeside tents while enjoying your evening snacks",
          icon: "snacks"
        },
        {
          time: "06:00 PM",
          activity: "Enjoy sunset and capture stunning pictures with the backdrop of the colorful sunset",
          icon: "sunset"
        },
        {
          time: "08:30 PM",
          activity: "Barbecue starters are served",
          icon: "bbq"
        },
        {
          time: "09:30 PM",
          activity: "Campfire, Dance, and Music followed by dinner",
          icon: "bonfire"
        },
        {
          time: "10:00 PM",
          activity: "Enjoy food prepared by the locals around the bonfire",
          icon: "dinner"
        },
        {
          time: "11:00 PM",
          activity: "Cozy up next to your loved one for a session of Open Air Movie Screening till late at night. You can experience fireflies as well (Depending on the availability of fireflies. The season for fireflies is 20 April to 30 June).",
          icon: "movie"
        }
      ]
    },
    {
      day: "Day 2",
      events: [
        {
          time: "06:00 AM",
          activity: "Wake up early to see the beautiful sunrise & a mesmerizing sight of the lake in the morning hours",
          icon: "sunrise"
        },
        {
          time: "08:00 AM",
          activity: "Have your breakfast and spend some time at the camp before checking out and bringing the camping to an end",
          icon: "snacks"
        },
        {
          time: "09:00 AM",
          activity: "Start your day with a boat ride in the famous Arthur Hill Lake also known as Bhandardara Lake",
          icon: "boat"
        },
        {
          time: "11:00 AM",
          activity: "Checkout from the camp",
          icon: "checkin"
        }
      ]
    }
  ];
  return (
    <>
      <Navbar />
      <Flex direction="row" justify="space-between" wrap="wrap" p={5} mt={'114px'}>
        {/* Image Gallery with 70% width */}
        <Box flex="7" mr={5}>
          <ImageGallery images={images} />
        </Box>
        {/* TrekComponent with 30% width */}
        <Box flex="3">
          <TrekComponent trekName="Bhandardara camping" />
        </Box>
      </Flex>

      {/* Includes Section with 70% width */}
      <Flex direction="row" justify="space-between" wrap="wrap" p={5}>
        <Box flex="7" mr={5}>
          <Includes />
          <OptionNavbar  overviewText={overviewText} />
          <Timeline timelineData={timelineData} />
        </Box>
        <Box flex="3">
          <SideSection placeName="Bhandardara Camping" />
        </Box>
      </Flex>

      <PhotoGallery images={pimages}/>
      <Footer />
    </>
  );
}

export default Bhandara;
