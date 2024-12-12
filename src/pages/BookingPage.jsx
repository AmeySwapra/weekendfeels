import React from 'react'
import Navbar from '../components/Common/Navbar'
import Footer from '../components/Common/Footer'
import HeaderName from '../components/Common/HeaderName'
import BookingForm from '../components/details-component/BookingForm'

function BookingPage() {

  return (
    <>
      <Navbar/>
      <HeaderName text={'BOOKINGS'}/>
      <BookingForm/>
      <Footer/>
    </>
  )
}

export default BookingPage