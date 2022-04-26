import React from 'react'
import CardFriend from '../components/CardFriend'
import ConfigSearcher from '../components/ConfigSearcher'

const Friends = () => {
  return (
    <div className='bg-blueDark'>
        <ConfigSearcher/>
        <CardFriend/>
    </div>
  )
}

export default Friends