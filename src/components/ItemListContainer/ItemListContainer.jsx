import React, { useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom'
//import { data } from '../../config'
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
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    // const categoria = "" //

    // const filtro = data.filter((evento) => evento.categoria.toLowerCase() === categoria.toLowerCase());

    // useEffect(() => {
    //     console.log(categoria)
    //     const promesa = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             (categoria === "" )? resolve(data) : resolve(filtro);
    //         }, 2000);
    //     })
    //     promesa.then((res) => {
    //         setElementos(res)
    //     }).catch((err) =>
    //         console.log(err)
    //     )
    //     return () => {
    //     }
    // }, [])

    useEffect(()=>{
        getData()
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