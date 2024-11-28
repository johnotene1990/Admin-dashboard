import React from 'react'
import Navbar from '../navbar/navbar'
import Home from '../home/home'
// import ReportChart from '../home/report'

const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
    <Navbar
    sidebarToggle={sidebarToggle}
    setSidebarToggle={setSidebarToggle}/>
    
    <Home/>
    {/* <ReportChart/> */}
    </div>
  )
}

export default Dashboard
