import React from 'react'
import Privacy from '../components/Privacy'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import HeaderName from '../components/Common/HeaderName'

function PrivacyPage() {
  return (
    <>
      <Navbar/>
      <HeaderName text={'PRIVACY POLICIES'}/>
      <Privacy/>
      <Footer/>
    </>
  )
}

export default PrivacyPage