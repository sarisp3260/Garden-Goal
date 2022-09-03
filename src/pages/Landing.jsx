import React from 'react'
import GreenFooter from '../components/Footer/GreenFooter'
import GameIntro from '../components/Landing/GameIntro'
import Scroll from '../components/Landing/Scroll'
import Welcome from '../components/Landing/Welcome'
import NavbarOut from '../components/Navbar/NavbarOut'

const Landing = () => {
  return (
    <div>
        <NavbarOut/>

        <Welcome/>
        <Scroll/>
        <GameIntro/>
        <GreenFooter/>
    </div>
  )
}

export default Landing