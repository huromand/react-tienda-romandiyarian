import React, { useState, useEffect } from 'react'
import { data } from '../../config'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {

    const [eventos, setEventos] = useState([])



    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
        promesa.then((res) => {
            setEventos(res)
        }).catch((err) =>
            console.log(err)
        )
        return () => {
        }
    }, [])


    return (
        <>
            <div >
                <h1 className='m-5 display-2'> Productos automatas </h1>
            </div>
            <div>
                <ItemList className='col-md-6' eventos={eventos} />
            </div>

        </>

    )
}

export default ItemListContainer