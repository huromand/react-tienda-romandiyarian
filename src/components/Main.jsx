import React from 'react'
import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar'

const Main = ( ) => {
  return (
    <>
        <NavBar/>
        <div className='d-flex justify-content-center'>
            <ItemListContainer/>
        </div>
    </>
  )
}

export default Main