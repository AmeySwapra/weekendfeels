import React, { useEffect, useState } from 'react'
import Navbar from '../components/Common/Navbar'
import TrekCards from '../components/Common/TrekCard'
import Footer from '../components/Common/Footer'
import HeaderName from '../components/Common/HeaderName'
import axios from 'axios'
function CampPage() {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://restate-json.onrender.com/trekDetails');
            console.log(response.data); // The data is already parsed in `response.data`
            setData(response.data); // Set the state with the fetched data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    useEffect(() => {
        fetchData();
    }, [])
  return (
    <>
      <Navbar/>
      <HeaderName text={'CAMPS'}/>
      <TrekCards trekDetails={data}/>
      <Footer/>
    </>
  )
}

export default CampPage