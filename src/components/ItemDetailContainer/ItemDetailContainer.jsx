import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
//import { data } from '../../config'
import { db } from '../../service/firebase';
import { getDocs, collection } from 'firebase/firestore';
//import { getDefaultNormalizer } from '@testing-library/react';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [eventos, setEventos] = useState(null);
    //const filtrado = data.find((eve) => eve.id === Number(id))

    // useEffect(() => {
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(filtrado)
    //         }, 2000);
    //     })
    //     promesa.then((res) => {
    //         setEventos(res)
    //     }).catch((err) =>
    //         console.log(err)
    //     )
    // }, [])

    const getData = async () => {
        const col = collection(db, "productos")
        try {
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const filtrado = result.find((prod) => prod.id == id)
            setEventos(filtrado)
            console.log(filtrado)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    

    return (

        <div className='justify-content m-4'>
            {eventos ? <ItemDetail eventos={eventos} /> : <h5 className='m-5 text-center'> Cargando Producto Seleccionado... </h5>}
        </div>

    );

};

export default ItemDetailContainer