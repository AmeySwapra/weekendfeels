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

function SingleTrekPage() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const overviewText = [
    "The Triund trek in the Himalayas is a relatively easy and popular trail, offering stunning views of the snow-covered Dhauladhar ranges and Kangra Valley. It's the best option for those seeking a hassle-free trek in the region. The trail's end has a steep climb, but the route is short.",
    "Triund is considered one of the most popular treks in India. The vast expanse of the Triund top boasts lush green grass and deodar, oak, pine, and Rhododendron forests, making it an ideal destination for nature lovers. Whether you prefer a warm summer or snowy winter, the trek is open throughout the year, except during the monsoon season.",
    "Join us on an adventure to witness nature at its finest! Book the Triund trek with your friends or loved ones this weekend and experience the magic of this journey."
  ];
  const pimages = [pimg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7, pimg8, pimg9, pimg10, pimg11, pimg12, pimg13, pimg14]
  const timelineData = [
    {
      day: 'Day 1',
      events: [
        { time: '10:00 AM', activity: 'Arrive at Bhagsunag Taxi Stand and meet your guide.', icon: 'checkin' },
        { time: '11:30 AM', activity: 'Start the hike towards Triund Top.', icon: 'hiking' },
        { time: '01:30 PM', activity: 'Take a break at the half point at Leta Base.', icon: 'tea' },
        { time: '05:00 PM', activity: 'Reach the Triund Top and take pictures.', icon: 'sunset' },
        { time: '05:30 PM', activity: 'Enjoy tea with a sunset view.', icon: 'tea' },
        { time: '06:30 PM', activity: 'Tents will be allotted for camping.', icon: 'tent' },
        { time: '09:00 PM', activity: 'A basic home-cooked dinner will be served.', icon: 'dinner' },
        { time: '10:00 PM', activity: 'Relax and enjoy the night.', icon: 'night' }
      ]
    },
    {
      day: 'Day 2',
      events: [
        { time: '06:00 AM', activity: 'Wake up for the mesmerizing sunrise view.', icon: 'sunrise' },
        { time: '08:00 AM', activity: 'Tea and breakfast to kickstart the day.', icon: 'tea' },
        { time: '09:00 AM', activity: 'Begin the downhill trek to Bhagsunag base.', icon: 'hiking' },
        { time: '02:30 PM', activity: 'Complete the adventure and say goodbye to your guide.', icon: 'checkin' }
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
          <TrekComponent trekName="Triund Trek - Kund" />
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
          <SideSection placeName="Triund kund trek" />
        </Box>
      </Flex>

      <PhotoGallery images={pimages}/>
      <Footer />
    </>
  );
}

export default SingleTrekPage;
