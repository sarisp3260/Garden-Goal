import React from 'react'
import CardCollection from '../components/Collections/CardCollection'
import SideMenu from '../components/Collections/SideMenu'
import { collectionCards } from '../components/Collections/collections'
import ConfigSearcher from '../components/Share/ConfigSearcher'

const Collections = () => {
  return (
    <>
      <SideMenu menuType={"collection"}/>
      <div className='py-6 grid gap-3 place-items-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
        {collectionCards.map((card) => {
          return (<CardCollection key={card.id} card={card}/>)
        })}
      </div>
    </>
  )
}

export default Collections