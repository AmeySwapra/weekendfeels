import React from 'react'
import TrekCards from '../components/Common/TrekCard'
import Footer from '../components/Common/Footer'
import Navbar from '../components/Common/Navbar'
import HeaderName from '../components/Common/HeaderName'
import BlogCard from '../components/Common/BlogCard'
import img from '../assets/trek/img.jpg'
const trekDetails = [
  {
    id: 1,
    title: "Triund Trek",
    image: img,
    date: "14 December 2024",
    moreDates: [
      "14-12-2024",
      "15-12-2024",
      "21-12-2024",
      "22-12-2024",
      "28-12-2024",
      "29-12-2024",
      "31-12-2024",
    ],
    location: "Delhi, Chandigarh",
    duration: "2 Day / 1 Night",
    originalPrice: 1499,
    discount: "33% off",
    discountedPrice: 999,
    link: "/Triund-Trek-51",
  },
];



function TrekPage() {
  return (
   <>
     <Navbar/>
     <HeaderName text={"TREKS"} />
     <TrekCards trekDetails={trekDetails}/>
     <Footer/>
   </>
  )
}

export default TrekPage