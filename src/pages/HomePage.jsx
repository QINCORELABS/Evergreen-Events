import React from 'react'
import Testimonials from '../components/testimonials/Testimonials'
import AboutHome from '../components/home/AboutHome'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/services/ServicesSection'
import Achievements from '../components/home/Achievements'
import FoodBooking from '../components/home/FoodBooking'
import EventGallery from '../components/home/EventGallery'

const HomePage = () => {
  
  return (
    <div>
      <HeroSection/>
      <AboutHome/>
      <Achievements/>
      <ServicesSection/>
      <FoodBooking/>
      <EventGallery/>
      
      <Testimonials/>
    </div>
  )
}

export default HomePage
