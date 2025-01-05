import React, { useEffect, useState } from "react";
import Navbar from "../components/Common/Navbar";
import TrekCards from "../components/Common/TrekCard";
import Footer from "../components/Common/Footer";
import HeaderName from "../components/Common/HeaderName";
import axios from "axios";

function CampPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const fetchData = async () => {
    try {
      setIsLoading(true); // Set loading to true before fetching
      const response = await axios.get("https://restate-json.onrender.com/trekDetails");
      setData(response.data); // Set the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching is complete
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <HeaderName text={"CAMPS"} />
      <TrekCards trekDetails={data} isLoading={isLoading} /> {/* Pass isLoading prop */}
      <Footer />
    </>
  );
}

export default CampPage;
