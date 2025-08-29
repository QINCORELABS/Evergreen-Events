import React, { useEffect } from 'react'

import PageHeader from '../components/common/PageHeader'
import AboutUs from '../components/about/AboutUs'

const AboutPage = () => {
  
useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
     <PageHeader title="About"/>
     <AboutUs/>
    </div>
  )
}

export default AboutPage
