import React, { PropsWithChildren } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar/Sidebar'

const Layout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
