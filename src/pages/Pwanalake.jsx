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

function Pwanalake() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const overviewText = [
    "Pawna Lake Camping includes tent stays for 2 to 5 people, unlimited food for three meals, a fun-filled barbeque and musical night, indoor and outdoor games, and a bonfire.",
    "Pawna Lake Camping is located 25 km from Lonavla and is one of the most popular tourist destinations in Maharashtra. It is suitable for families, couples, and friends alike.",
    "A 2-days 1-night Pawna Lake Camping on the banks of the beautiful Pawna Lake is here. Take part in this lakeside camping to escape from the hassles of your city life.",
    "Pawna lake is one of the popular artificial lakes located 10 kilometers away from Kamshet on the old Mumbai-Pune highway and is the nearest camping spot near Pune. It is a place known for nature, lake, and green hills altogether.",
    "Distance From Mumbai: 117 km",
    "Distance From Pune: 55km"
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
        { time: "03:00 PM", activity: "You will check in to the campsite. You can always check in late.", icon: "checkin" },
        { time: "05:30 PM", activity: "You can relax and watch the beautiful sunset by the lake while enjoying some evening snacks.", icon: "snacks" },
        { time: "06:00 PM", activity: "You can capture stunning pictures with the backdrop of the colorful sunset, as the evening views are absolutely breathtaking for photography.", icon: "sunset" },
        { time: "08:30 PM", activity: "You will be served BBQ starters to satisfy your taste buds.", icon: "bbq" },
        { time: "09:00 PM", activity: "You can dance to some DJ music.", icon: "music" },
        { time: "10:00 PM", activity: "A delicious dinner will be served, with options for vegetarian, non-vegetarian, and Jain meals.", icon: "dinner" },
        { time: "11:00 PM", activity: "After dinner, you can choose to dance to romantic tunes or snuggle up next to the bonfire with your loved one until late at night.", icon: "bonfire" }
      ]
    },
    {
      day: "Day 2",
      events: [
        { time: "06:00 AM", activity: "You will have a wake-up call so that can witness the mesmerizing sunrise view.", icon: "sunrise" },
        { time: "08:00 AM", activity: "You will be served tea and breakfast to kickstart your day.", icon: "tea" },
        { time: "09:00 AM", activity: "You can go for speed boating or kayaking at an additional cost. This is not included in the package. Scroll down to FAQ for more details on this.", icon: "kayaking" },
        { time: "11:00 AM", activity: "Finally it will be time to check out from the campsite.", icon: "checkin" }
      ]
    }
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
          <TrekComponent trekName="Pawna Lake Camping" />
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
          <SideSection placeName="Pawna lake" />
        </Box>
      </Flex>

      <PhotoGallery images={pimages} />
      <Footer />
    </>
  );
}

export default Pwanalake;
