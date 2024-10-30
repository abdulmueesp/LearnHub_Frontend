import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div><Outlet/></div>
      </div>
    </div>
  )
}

export default Layout
