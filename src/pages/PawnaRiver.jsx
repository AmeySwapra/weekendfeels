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

function PawnaRiver() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
    const pimages = [pimg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7, pimg8, pimg9, pimg10, pimg11, pimg12, pimg13, pimg14]
    const timelineData = [
        {
          day: 'Day 1',
          events: [
            { time: '03:00 PM', activity: 'Check-in to the campsite', icon: 'checkin' },
            { time: '04:00 PM', activity: 'Beat the heat with Raindance', icon: 'raindance' },
            { time: '05:30 PM', activity: 'Enjoy the evening snacks by the river', icon: 'snacks' },
            { time: '07:30 PM', activity: 'Laugh to a 45-minute Entertainment show which includes Magic Show, Joker Show and Fire Show (Only on Saturdays)', icon: 'joker' },
            { time: '08:30 PM', activity: 'BBQ starters will be served', icon: 'bbq' },
            { time: '09:00 PM', activity: 'Dance to some professional DJ Music', icon: 'music' },
            { time: '10:00 PM', activity: 'A delicious dinner will be served, with options for vegetarian, non-vegetarian, and Jain meals.', icon: 'dinner' },
            { time: '10:30 PM', activity: 'Cozy up next to your loved one for a session of Open Air Movie Screening till late at night', icon: 'movie' }
          ]
        },
        {
          day: 'Day 2',
          events: [
            { time: '12:30 AM', activity: 'Live guitarist/band music (Only on Saturdays)', icon: 'guitar' },
            { time: '06:00 AM', activity: 'Wake up call, Enjoy the sunrise view', icon: 'sunrise' },
            { time: '08:30 AM', activity: 'Breakfast will be served', icon: 'snacks' },
            { time: '11:00 AM', activity: 'Checkout from the campsite', icon: 'checkin' }
          ]
        }
      ];
    
      const overviewText = [
        "Escape the chaos of city life with our Pawna Riverside Camping adventure. Picture this: camping by the stunning Pawna River, where nature takes center stage for a much-needed break.",
        "Immerse yourself in the calming vibes of Pawna River, creating the perfect backdrop for an unforgettable getaway.",
        "Our premium Pawna Riverside Camping brings you additional inclusions like Rain Dance, Joker Show (only Saturdays), Movie Screenings, and Live Guitarist performances (only Saturdays).",
        "Unlike Pawna Lake, our riverside campsite offers easier accessibility. Common autos and buses regularly commute from Kamshet station, providing convenient transport options directly to the campsite."
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
          <TrekComponent trekName="Pawna Riverside Camping" />
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
          <SideSection placeName="Pawna riverside camping weekendfeel" />
        </Box>
      </Flex>

      <PhotoGallery images={pimages}/>
      <Footer />
    </>
  )
}

export default PawnaRiver