import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import PageHeader from '../components/common/PageHeader'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
     {/* <PageHeader/> */}
     <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
