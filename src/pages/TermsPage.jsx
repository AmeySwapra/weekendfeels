import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import HeaderName from '../components/Common/HeaderName'
import Terms from '../components/Terms'

function TermsPage() {
  return (
    <>
      <Navbar/>
      <HeaderName text={'Terms and Condition'}/>
      <Terms/>
      <Footer/>
    </>
  )
}

export default TermsPage