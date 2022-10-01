import React from 'react'
import SideMenu from '../components/Collections/SideMenu'
import CardStore from '../components/Store/CardStore'
import { storeItems } from '../components/Store/store'

const Store = () => {
  return (
    <>
      <SideMenu menuType={"store"}/>
      <div className='py-6 grid gap-3 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {storeItems.map((items) => {
          return (<CardStore key={items.id} items={items}/>)
        })}
      </div>
    </>
  )
}

export default Store