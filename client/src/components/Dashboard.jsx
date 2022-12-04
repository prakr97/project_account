import React, { useEffect } from 'react'
import Body from './DashboardComponent/Body'

import Header from './DashboardComponent/Header'
import SideBar from './DashboardComponent/SideBar'

import authHeader from '../service/api'
import { useNavigate } from 'react-router-dom'


function Dashboard() {

  const navigate = useNavigate()

  // useEffect(() => {
  //   authentication()
  // }, []);
  // const authentication = async () => {
  //   const isAuth = await authHeader()
  //   if (isAuth) {
  //     console.log('welcome user')
  //     navigate('/')
  //   }
  //   else navigate('/login')
  // }

  return (
    <>


      <Header />
      <SideBar />
      <Body />

    </>
  )
}

export default Dashboard