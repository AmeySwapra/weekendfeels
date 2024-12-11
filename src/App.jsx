import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CareersPage from "./pages/CareersPage";
import AboutPage from "./pages/AboutPage";
import TrekPage from "./pages/TrekPage";
import CampPage from "./pages/CampPage";
import PrivacyPage from "./pages/PrivacyPage";
import NewsPage from "./pages/NewsPage";
import TermsPage from "./pages/TermsPage";
import InfulencerPage from "./pages/InfulencerPage";
import BlogPage from "./pages/BlogPage";
import NEY from "./pages/NEYPage";
import SingleTrekPage from "./pages/SingleTrekPage";
import PawnaRiver from "./pages/PawnaRiver";
import Bhandara from "./pages/Bhandara";
import Malshej from "./pages/Malshej";
import AlibagBeach from "./pages/AlibagBeach";
import PanchetDam from "./pages/PanchetDam";
import Pwanalake from "./pages/Pwanalake";
import AlibagNavgaon from "./pages/AlibagNavgaon";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route  path="/careers" element={<CareersPage/>} />
        <Route  path="/about" element={<AboutPage/>} />
        <Route  path="/trek" element={<TrekPage/>} />
        <Route  path="/camp" element={<CampPage/>} />
        <Route  path="/privacy" element={<PrivacyPage/>} />
        <Route  path="/news" element={<NewsPage/>} />
        <Route  path="/tnc" element={<TermsPage/>} />
        <Route  path="/influencer" element={<InfulencerPage/>} />
        <Route  path="/blog" element={<BlogPage/>} />
        <Route  path="/nye25" element={<NEY/>} />
        <Route  path="/single-trek" element={<SingleTrekPage/>} />
        <Route  path="/pawna-river" element={<PawnaRiver/>} />
        <Route  path="/bhandardara" element={<Bhandara/>} />
        <Route  path="/malshej" element={<Malshej/>} />
        <Route  path="/alibag-beach" element={<AlibagBeach/>} />
        <Route  path="/panshet-dam" element={<PanchetDam/>} />
        <Route  path="/pawna-lake" element={<Pwanalake/>} />
        <Route  path="/alibaug-navegaon" element={<AlibagNavgaon/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
