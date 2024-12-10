import React from 'react'
import Navbar from '../components/Common/Navbar'
import HeaderName from '../components/Common/HeaderName'
import News from '../components/News'
import Footer from '../components/Common/Footer'

function NewsPage() {
  return (
    <>
      <Navbar/>
      <HeaderName text={'NEWS'} />
      <News/>
      <Footer/>
    </>
  )
}

export default NewsPage