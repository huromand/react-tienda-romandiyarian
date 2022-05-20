import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'

const Home = () => {

    const {cat} = useParams();

    // useEffect(() => {
    //   if(cat===undefined) cat="";
    //   console.log(cat)
    
    //   return () => {}
    // }, [])
    

    return (
        <ItemListContainer cat={cat} />
    )
}

export default Home