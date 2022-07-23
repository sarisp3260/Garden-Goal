import React from 'react'

const MainLayout = ({children}) => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='w-11/12 lg:w-10/12'>
            {children}
        </div>
    </div>
  )
}

export default MainLayout