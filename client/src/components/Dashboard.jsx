import React from 'react'
import Body from './DashboardComponent/Body'
import Footer from './DashboardComponent/Footer'
import Header from './DashboardComponent/Header'
import SideBar from './DashboardComponent/SideBar'


function Dashboard() {
  return (
    <>

      <Header />
      <SideBar />
      <Body />
      <Footer />
    </>
  )
}

export default Dashboard