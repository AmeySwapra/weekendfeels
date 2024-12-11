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

function PanchetDam() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const overviewText = [
    "Panshet is one of the famous picnic spots of Pune and attracts many visitors from Mumbai. The lake is made from the backwaters of Panshet Dam. It is around 50 km from Pune city.",
    "Panshet Dam Camping by Weekend Feels is nestled at a hilltop offering a 270-degree breathtaking view of the entire Panshet Dam and the breathtaking Sahyadri mountains behind it. It includes Tent stays on twin sharing, breakfast, dinner, and snacks served on an unlimited basis, Bonfire and DJ nights, barbeque evenings, and a wide variety of indoor and outdoor games. Not only does this holiday commit to making your experience exceptional, but it also promises to refresh you from within, so you can get back home, as a version 2.0 of yourself!",
    "Panshet Lake Camping is the nearest spot for Pune citizens and is priced very nominally compared to the view it offers.",
    "Places To Visit Near Panshet Dam",
    "Sinhagad Fort",
    "Khadakwasla Dam",
    "Panshet Water Park",
    "Torna Fort",
    "Lavasa city",
    "Varasgaon Dam",
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
          activity:
            "You will check in to the campsite. You can always check in late.",
          icon: "checkin",
        },
        {
          time: "05:30 PM",
          activity:
            "You can relax and watch the beautiful sunset while enjoying some evening snacks. The evening views are absolutely breathtaking for photography.",
          icon: "sunset",
        },
        {
          time: "08:00 PM",
          activity: "You can dance to some DJ music.",
          icon: "music",
        },
        {
          time: "08:30 PM",
          activity:
            "You will be served BBQ starters to satisfy your taste buds.",
          icon: "bbq",
        },
        {
          time: "10:00 PM",
          activity:
            "A delicious dinner will be served, with options for vegetarian, non-vegetarian, and Jain meals.",
          icon: "dinner",
        },
        {
          time: "11:00 PM",
          activity:
            "After dinner, you can choose to dance to romantic tunes or snuggle up next to the bonfire with your loved one until late at night.",
          icon: "bonfire",
        },
        {
          time: "11:30 PM",
          activity:
            "Finally, the most awaited moment - to sit around a campfire, and live this unique experience, accompanied by a live guitarist. A live guitarist is only there on Saturdays.",
          icon: "guitar",
        },
      ],
    },
    {
      day: "Day 2",
      events: [
        {
          time: "06:00 AM",
          activity:
            "You will have a wake-up call so that you can witness the mesmerizing sunrise view. In the monsoon and winter seasons, clouds pass through our campsite. Our campsite gets the benefit of being a hilltop campsite.",
          icon: "sunrise",
        },
        {
          time: "08:00 AM",
          activity:
            "You will be served tea and breakfast to kickstart your day.",
          icon: "breakfast",
        },
        {
          time: "11:00 AM",
          activity: "Finally it will be time to check out from the campsite.",
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
          <TrekComponent trekName="Panshet Dam" />
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
          <SideSection placeName="Panshet Dam" />
        </Box>
      </Flex>

      <PhotoGallery images={pimages} />
      <Footer />
    </>
  );
}

export default PanchetDam;
