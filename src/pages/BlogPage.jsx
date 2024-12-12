import React, { useEffect, useState } from 'react'
import Navbar from '../components/Common/Navbar'
import HeaderName from '../components/Common/HeaderName'
import BlogCard from '../components/Common/BlogCard'
import Footer from '../components/Common/Footer'
import axios from 'axios'
function BlogPage() {

  const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://restate-json.onrender.com/cards');
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
      <HeaderName text={'BLOGS'}/>
      <BlogCard cardsData={data}/>
      <Footer/>
    </>
  )
}

export default BlogPage