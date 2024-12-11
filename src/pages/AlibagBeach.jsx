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

function AlibagBeach() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const overviewText = [
    "Your wait for an ideal weekend escape near Mumbai is over. Weekend Feels bring you Alibaug Beach Camping. Alibaug beach is clean, uncrowded, and peaceful, making it ideal for beach camping. The clear water and pristine sand of the beach set the mood for relaxation. If laying back on hammocks is not your style, you can spend your day participating in water sports, playing beach volleyball, or just getting a dip in the water. The nighttime is the best as you can see the star-filled sky, light up a bonfire, try your hand at BBQ & just chill with your buddies. The sea breeze coupled with the ambiance at our campsite doubles up the fun quotient.",

    "The camping will be among the greenery of the coconut grooves inside Revdanda Fort. The Revdanda fort is on the beach itself.",

    "Reaching Alibaug is the easiest with Public transport using the ferry. You can read up about",

    "Are you planning for resorts instead of Camping? You can read up about",
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
      day: "Day 01",
      events: [
        {
          time: "03:00 PM",
          activity: "Reach the campsite and have a welcome drink",
          icon: "checkin",
        },
        {
          time: "05:00 PM",
          activity:
            "Settle down and enjoy your evening snacks along with a welcome drink",
          icon: "snacks",
        },
        {
          time: "05:30 PM",
          activity:
            "Capture stunning pictures with the backdrop of the colorful sunset, perfect for photography",
          icon: "sunset",
        },
        {
          time: "06:00 PM",
          activity:
            "Enjoy games like carrom, badminton, volleyball, click pictures, or relax on the beach",
          icon: "sports",
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
            "A delicious dinner with options for vegetarian, non-vegetarian, and Jain meals",
          icon: "dinner",
        },
        {
          time: "11:00 PM",
          activity:
            "Sit around a campfire and enjoy a live guitarist (Only on Saturdays)",
          icon: "guitar",
        },
      ],
    },
    {
      day: "Day 02",
      events: [
        {
          time: "12:00 AM",
          activity:
            "Cuddle with loved ones for an open-air movie screening and sleep in a tent",
          icon: "movie",
        },
        {
          time: "07:00 AM",
          activity: "Wake up, enjoy the breeze, freshen up, and have breakfast",
          icon: "breakfast",
        },
        {
          time: "09:00 AM",
          activity:
            "Enjoy the morning at the beach, play games, swim, or try water sports",
          icon: "beach",
        },
        {
          time: "11:00 AM",
          activity: "Checkout from the camp with wonderful memories",
          icon: "checkout",
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
          <TrekComponent trekName="Alibag Beach Camp" />
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
          <SideSection placeName="Alibag Beach" />
        </Box>
      </Flex>

      <PhotoGallery images={pimages} />
      <Footer />
    </>
  );
}

export default AlibagBeach;
