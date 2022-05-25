import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//import { data } from '../../config'
import Item from '../Item/Item';
import { db } from '../../service/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemListFilter = () => {

    const { categoria } = useParams();
    const [eventos, setEventos] = useState([]);
    
    const getData = async () => {
        const col = collection(db, "productos")
        try {
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const filtrado = result.find((prod) => prod.categoria == categoria.toLowerCase())
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
        <div className='row d-flex flex-column flex-md-row justify-content-center col-md-12'>

            {eventos ? eventos.map(evento => <Item data={evento} />) : <h5 className='text-warning'>Cargando Categorias Seleccionadas...</h5>}
        </div>


    );

}

export default ItemListFilter


