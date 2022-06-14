import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { db } from '../../service/firebase'
import { getDocs, collection } from 'firebase/firestore'

const ItemListContainer = () => {

    const [elementos, setElementos] = useState([])

    const getData = async () => {
        const col =collection(db,"productos")

        try{
            const data = await getDocs(col)

            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            setElementos(result)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    return (
        <>
            <div >
                <h1 className='m-5 display-2 text-center'> Productos </h1>
            </div>
            <div>
                <ItemList className='col-md-6' elements={elementos} />
            </div>
        </>
    )
}

export default ItemListContainer