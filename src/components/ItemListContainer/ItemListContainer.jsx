import React, { useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom'
import { data } from '../../config'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = () => {

    const [elementos, setElementos] = useState([])

    const categoria = "" //

    const filtro = data.filter((evento) => evento.categoria.toLowerCase() === categoria.toLowerCase());

    useEffect(() => {
        console.log(categoria)
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                (categoria === "" )? resolve(data) : resolve(filtro);
            }, 2000);
        })
        promesa.then((res) => {
            setElementos(res)
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
                <ItemList className='col-md-6' eventos={elementos} />
            </div>

        </>

    )
}

export default ItemListContainer