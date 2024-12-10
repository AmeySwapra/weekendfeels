import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import Testimonial from "../components/Testimoinal";
import Carousel from "../components/Carousel";
import CampingSlider from "../components/CampingSlider";
import Exp from "../components/Exp";
import BlogSection from "../components/Blogsection";


function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel/>
      <CampingSlider/>
      <Testimonial />
      <BlogSection/>
      <Exp/>
      <Footer />
    </>
  );
}

export default HomePage;
