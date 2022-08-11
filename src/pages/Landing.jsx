import React from 'react'
import GreenFooter from '../components/Footer/GreenFooter'
import GameIntro from '../components/Landing/GameIntro'
import Welcome from '../components/Landing/Welcome'
import NavbarOut from '../components/Navbar/NavbarOut'

const Landing = () => {
  return (
    <div>
        <NavbarOut/>

        <Welcome/>
        <GameIntro/>

        <GreenFooter/>
    </div>
  )
}

export default Landing