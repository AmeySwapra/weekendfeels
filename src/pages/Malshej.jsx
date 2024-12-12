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

function Malshej() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
 const overviewText = [
    "Malshej Ghat, where the skies are filled with an incredible color palette, where nature is miraculously stunning, and where the breezes literally change the world around you! What do you think the Malshej Ghat camping experience would be like? Well, only if there was a better word for incredible!",
    "Situated 130 km from Pune and 154 km from Mumbai, Malshej Ghat camping is a breathtaking experience in the western ghats of Maharashtra. Decorated with lush greenery and a wonderful climate, it is a perfect weekend expedition you certainly cannot miss. If the traveler and adventurer in you have been craving a break for a long time, Malshej Ghat camping is nothing less than a surprise treat for you.",
    "Malshej Ghat camping is a weekend getaway experience that is filled with all activities to refresh you from within. The lakeside camping includes tent stays, bonfire nights, breakfast, evening snacks, dinner, music and dance sets, live BBQ, indoor and outdoor sports, sightseeing, and so much more. The best time for Malshej Ghat camping is undoubtedly the end of rain and the beginning of winter. The weather is fascinating and makes your adventure activities a lot more fun!",
    "The campsite is located at Pimpalgaon Joga Dam, just after the ghat area when coming from Mumbai. The campsite is before the ghat area when coming from Pune or Nashik."
];
  const pimages = [pimg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7, pimg8, pimg9, pimg10, pimg11, pimg12, pimg13, pimg14]
  const timelineData = [
    {
      day: 'Day 1',
      events: [
        { time: '03:00 PM', activity: 'Reach campsite', icon: 'checkin' },
        { time: '05:00 PM', activity: 'Enjoy your evening snacks by the lake', icon: 'snacks' },
        { time: '06:00 PM', activity: 'Watch the sun go down on the lake', icon: 'sunset' },
        { time: '08:00 PM', activity: 'BBQ starters will be served', icon: 'bbq' },
        { time: '09:30 PM', activity: 'Dinner (Veg/NonVeg/Jain) will be served. Cozy up with your loved ones next to the bonfire', icon: 'dinner' },
        { time: '10:00 PM', activity: 'Listen to music, dance, and enjoy some romantic songs till late at night', icon: 'bonfire' }
      ]
    },
    {
      day: 'Day 2',
      events: [
        { time: '07:00 AM', activity: 'Wake up and leave for forest trek (1 hour duration)', icon: 'hiking' },
        { time: '08:30 AM', activity: 'Tea and breakfast will be served', icon: 'tea' },
        { time: '11:00 AM', activity: 'Checkout with sweet memories', icon: 'checkin' }
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
          <TrekComponent trekName="Malshej Ghat Lakeside camping" />
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
          <SideSection placeName="Malshej Ghat" />
        </Box>
      </Flex>

      <PhotoGallery images={pimages}/>
      <Footer />
    </>
  );
}

export default Malshej;
