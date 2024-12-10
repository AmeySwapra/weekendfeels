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
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
