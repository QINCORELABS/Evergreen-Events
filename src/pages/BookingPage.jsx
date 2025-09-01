import React, { useEffect } from 'react'
import Booking from '../components/booking/Booking'
import PageHeader from '../components/common/PageHeader'

const BookingPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  
  return (
    <div>
    <PageHeader title="BOOKING"/>
      <Booking/>
    </div>
  )
}

export default BookingPage
