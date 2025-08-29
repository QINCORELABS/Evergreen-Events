import React, { useEffect } from 'react'
import ServiceDetails from '../components/servicedetails/ServiceDetails'

const ServiceDetailsPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  
  return (
    <div>
      <ServiceDetails/>
    </div>
  )
}

export default ServiceDetailsPage
