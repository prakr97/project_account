import React from 'react'
import Body from './DashboardComponent/Body'

import Header from './DashboardComponent/Header'
import SideBar from './DashboardComponent/SideBar'


function Dashboard() {
  return (
    <>
      {/* <h1>hola como estas</h1> */}

      <Header />
      <SideBar />
      <Body />

    </>
  )
}

export default Dashboard