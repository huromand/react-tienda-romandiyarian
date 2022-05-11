import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { data } from '../config'

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [eventos, setEventos] = useState(null);
    const filtrado = data.find((eve) => eve.id === Number(id))


    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtrado)
            }, 2000);
        })
        promesa.then((res) => {
            setEventos(res)
        }).catch((err) =>
            console.log(err)
        )
        // return () => {
        // }
    }, [])





    return (

        <div className='justify-content m-2'>
            {eventos ? <ItemDetail eventos={eventos} /> : <h5>Cargando...</h5>}
        </div>


    );

};

export default ItemDetailContainer