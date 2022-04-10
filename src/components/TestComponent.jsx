import React from 'react'
import About from './Landing/About'
import NavUser from './UserMenu/NavUser'
import Sidebar from './sidebar/Sidebar'
import Profile from './UserMenu/Profile'

function TestComponent() {
  return (
    <>
      <About/>
      <NavUser/>
      <Profile/>
      <Sidebar/>
    </>
  )
}

export default TestComponent