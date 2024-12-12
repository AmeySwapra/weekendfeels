import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Includes from "../components/details-component/Includes";
import Timeline from "../components/details-component/TimeLine";
import TrekComponent from "../components/details-component/TrekComponent";
import img1 from "../assets/trek/01-Triund_Trek.jpg";
import img2 from "../assets/trek/02-Triund_Trek.jpg";
import img3 from "../assets/trek/08-Triund_Trek.jpg";
import img4 from "../assets/trek/04-Triund_Trek.jpg";
import img5 from "../assets/trek/05-Triund_Trek.jpg";
import img6 from "../assets/trek/06-Triund_Trek.jpg";
import img7 from "../assets/trek/07-Triund_Trek.jpg";
import img8 from "../assets/trek/08-Triund_Trek.jpg";
import img9 from "../assets/trek/09-Triund_Trek.jpg";
import ImageGallery from "../components/details-component/ImageGallery";
import SideSection from "../components/details-component/SideSection";
import OptionNavbar from "../components/details-component/OptionNavbar";
import PhotoGallery from "../components/details-component/PhotoGallery";
import pimg1 from "../assets/trek/001.jpg";
import pimg2 from "../assets/trek/002.jpg";
import pimg3 from "../assets/trek/003.jpg";
import pimg4 from "../assets/trek/004.jpg";
import pimg5 from "../assets/trek/005.jpg";
import pimg6 from "../assets/trek/006.jpg";
import pimg7 from "../assets/trek/007.jpg";
import pimg8 from "../assets/trek/008.jpg";
import pimg9 from "../assets/trek/009.jpg";
import pimg10 from "../assets/trek/010.jpg";
import pimg11 from "../assets/trek/011.jpg";
import pimg12 from "../assets/trek/012.jpg";
import pimg13 from "../assets/trek/013.jpg";
import pimg14 from "../assets/trek/014.jpg";

function AlibagNavgaon() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const overviewText = [
    "Maharashtra’s very own region of red soil, Konkan, is a stunner one-of-a-kind, isn’t it? But this red-soiled land is also graced with soft sands of astonishing beach places. And, while there are many popular and beautiful spots, nothing matches the beauty of Alibaug Nagaon beach camping. Its unparalleled clean ambiance, breathtaking sun views, water sports, and seafood cuisine is like a complete definition of a perfect holiday! And what’s better than having all of this joy packed together? Nagaon beach camping is a weekend holiday destination in Maharashtra which is a total refresher for you, far away from the noise of cities!",
    "Nagaon is a beach town located only 9 km away from Alibaug, in the Raigad district of Maharashtra. It is about 114 km from Mumbai and 152 km from Pune. Nagaon beach camping is one of the top choices in Maharashtra when it comes to short trips. It is filled with tourists from various cities in India and is an experience you cannot afford to miss. The Nagaon beach camping includes tent stays, welcome drinks, all-day meals, barbeque nights, bonfires, open-air movie screenings, music, indoor and outdoor games, live music shows, and a lot more to make your holiday memorable!",
    "The best season to visit Nagaon beach is from the month of October to February. The climate is cool and pleasing, which makes your holiday perfect by all means. You can also enjoy water sports like parasailing on the beach, Jet Ski rides, Banana rides, Bumper Rides, and so much more. You can go ahead and enjoy all the water activities, on all days of the week from 9 am to 6 pm.",
  ];
  const pimages = [
    pimg1,
    pimg2,
    pimg3,
    pimg4,
    pimg5,
    pimg6,
    pimg7,
    pimg8,
    pimg9,
    pimg10,
    pimg11,
    pimg12,
    pimg13,
    pimg14,
  ];
  const timelineData = [
    {
      day: "Day 1",
      events: [
        {
          time: "03:00 PM",
          activity: "Reach the campsite and have a welcome drink",
          icon: "checkin",
        },
        {
          time: "05:30 PM",
          activity:
            "Settle down and enjoy your evening snacks along with a welcome drink",
          icon: "snacks",
        },
        {
          time: "06:00 PM",
          activity:
            "Capture stunning pictures with the backdrop of the colorful sunset",
          icon: "sunset",
        },
        {
          time: "08:00 PM",
          activity: "Vegetarian or Non-Vegetarian BBQ is served",
          icon: "bbq",
        },
        {
          time: "08:30 PM",
          activity: "Move and groove to the beats",
          icon: "music",
        },
        {
          time: "10:00 PM",
          activity:
            "A delicious dinner will be served with options for vegetarian, non-vegetarian, and Jain meals",
          icon: "dinner",
        },
        {
          time: "11:00 PM",
          activity:
            "Sit around a campfire with a live guitarist (Only on Saturdays)",
          icon: "guitar",
        },
      ],
    },
    {
      day: "Day 2",
      events: [
        {
          time: "12:00 AM",
          activity:
            "Open-air movie screening under the open sky and sleep in a tent",
          icon: "movie",
        },
        {
          time: "07:00 AM",
          activity:
            "Wake up, enjoy the sea breeze, freshen up, and have breakfast",
          icon: "snacks",
        },
        {
          time: "08:00 AM",
          activity:
            "Enjoy the morning at the beachside, play games, swim, or do water-sport activities",
          icon: "beach",
        },
        {
          time: "11:00 AM",
          activity: "Checkout from the camp with wonderful memories",
          icon: "checkin",
        },
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <Flex
        direction="row"
        justify="space-between"
        wrap="wrap"
        p={5}
        mt={"114px"}
      >
        {/* Image Gallery with 70% width */}
        <Box flex="7" mr={5}>
          <ImageGallery images={images} />
        </Box>
        {/* TrekComponent with 30% width */}
        <Box flex="3">
          <TrekComponent trekName="Alibaug Nagaon Beach Camping" />
        </Box>
      </Flex>

      {/* Includes Section with 70% width */}
      <Flex direction="row" justify="space-between" wrap="wrap" p={5}>
        <Box flex="7" mr={5}>
          <Includes />
          <OptionNavbar overviewText={overviewText} />
          <Timeline timelineData={timelineData} />
        </Box>
        <Box flex="3">
          <SideSection placeName="Alibaug Nagaon Beach Camping" />
        </Box>
      </Flex>

      <PhotoGallery images={pimages} />
      <Footer />
    </>
  );
}

export default AlibagNavgaon;
