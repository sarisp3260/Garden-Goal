import React from 'react'
import CardFriend from '../components/Friends/CardFriend'
import ConfigSearcher from '../components/Friends/ConfigSearcher'

const Friends = () => {
  return (
    <div className='bg-blueDark'>
        <ConfigSearcher/>
        <CardFriend/>
    </div>
  )
}

export default Friends