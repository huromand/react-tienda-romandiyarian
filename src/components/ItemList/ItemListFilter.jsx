import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../../config'
import Item from '../Item/Item';


const ItemListFilter = () => {



    const { categoria } = useParams();
    const [eventos, setEventos] = useState([]);
    const filtrado = data.filter((eve) => eve.categoria.toLowerCase() === categoria.toLowerCase())
    console.log(categoria.toLowerCase());

    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(filtrado)
            }, 2000);
        })
        promesa.then((res) => {
            console.log(res);
            setEventos(res)
        }).catch((err) =>
            console.log(err)
        )
        // return () => {
        // }
    }, [])





    return (
        <div className='row d-flex flex-column flex-md-row justify-content-center col-md-12'>

            {eventos ? eventos.map(evento => <Item data={evento} />) : <h5 className='text-warning'>Cargando Categorias Seleccionadas...</h5>}
        </div>


    );

}

export default ItemListFilter


