import React from 'react'
import Testimonials from '../components/testimonials/Testimonials'
import AboutUs from '../components/about/AboutUs'
import HeroSection from '../components/home/HeroSection'
const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutUs/>
      <Testimonials/>
    </div>
  )
}

export default HomePage
