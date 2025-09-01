import React, { useEffect } from 'react'
import Contact from '../components/contact/Contact'
import PageHeader from '../components/common/PageHeader'

const ContactPage = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  
  return (
    <div>
        <PageHeader title = "CONTACT"/>
      <Contact/>
    </div>
  )
}

export default ContactPage
