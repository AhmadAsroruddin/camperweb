import React from 'react'
import Sidebar from '../../shared/Sidebar/Sidebar'
import Header from '../../shared/Header/Header'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='flex h-screen'>
      <div className='basis-[12%] h-full'>
        <Sidebar />
      </div>
      <div className='basis-[88%] h-full flex flex-col'>
        <Header />
        <div className='flex-grow overflow-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
