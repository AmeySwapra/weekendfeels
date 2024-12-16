// import React from "react";
// import { Box, Image, Link, IconButton, useBreakpointValue } from "@chakra-ui/react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img1 from '../assets/carimg/NYE25.webp'
// import img2 from '../assets/carimg/web1.webp'
// import img3 from '../assets/carimg/web2.webp'
// import img4 from '../assets/carimg/web3.webp'
// import img5 from '../assets/carimg/web4.webp'
// import m1 from '../assets/carimg/NYE25_Mobile.webp'
// import m2 from '../assets/carimg/mobile1.webp'
// import m3 from '../assets/carimg/mobile2.webp'
// import m4 from '../assets/carimg/mobile3.webp'
// import m5 from '../assets/carimg/mobile4.webp'

// const Carousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//   };

//   const images = [
//     {
//       srcDesktop: img1,
//       srcMobile: m1,
//       alt: "New Year 2025",
//       href: "/nye25",
//     },
//     {
//       srcDesktop: img2,
//       srcMobile: m2,
//       alt: "Partial Payments Available",
//       href: "/camps",
//     },
//     {
//       srcDesktop: img3,
//       srcMobile: m3,
//       alt: "Happy Customers",
//       href: "/camps",
//     },
//     {
//       srcDesktop: img4,
//       srcMobile: m4,
//       alt: "Multiple Locations",
//       href: "/camps",
//     },
//     {
//       srcDesktop: img5,
//       srcMobile: m5,
//       alt: "Zero Cancellation Charges",
//       href: "/camps",
//     },
//   ];

//   const [slider, setSlider] = React.useState(null);

//   const handlePrev = () => slider?.slickPrev();
//   const handleNext = () => slider?.slickNext();

//   const isMobile = useBreakpointValue({ base: true, md: false });

//   return (
//     <Box position="relative"w="full" overflow="hidden" minH="250px"  mt={{ base: '64px', md: '94px' }}>
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {images.map((item, index) => (
//           <Box key={index} position="relative">
//             <Link href={item.href}>
//               <Image
//                 src={isMobile ? item.srcMobile : item.srcDesktop}
//                 alt={item.alt}
//                 w="100%"
//                 maxW="1536px"
//                 minH="40vh"
//                 maxH="65vh"
//                 objectFit="cover"
//               />
//             </Link>
//           </Box>
//         ))}
//       </Slider>

//       <IconButton
//         aria-label="Previous Slide"
//         icon={<FaChevronLeft />}
//         position="absolute"
//         top="50%"
//         left="5%"
//         transform="translateY(-50%)"
//         zIndex={2}
//         onClick={handlePrev}
//         variant="ghost"
//         fontSize={'25px'}
//         fontWeight={'800'}
//         color={'white'}
//         _hover={{color: 'black'}}
//       />
//       <IconButton
//         aria-label="Next Slide"
//         icon={<FaChevronRight />}
//         position="absolute"
//         top="50%"
//         right="5%"
//         transform="translateY(-50%)"
//         zIndex={2}
//         onClick={handleNext}
//         variant="ghost"
//         fontSize={'25px'}
//         fontWeight={'800'}
//         color={'white'}
//         _hover={{color: 'black'}}
//       />
//     </Box>
//   );
// };

// export default Carousel;
