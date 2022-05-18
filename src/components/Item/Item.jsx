import './item.css'
import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ data }) => {

    const { id, producto, precio, imagen, categoria } = data;

    return (

        <div className='card m-2 p-1 container-fluid col-sm-6 col-md-4 col-lg-3' >
            <img className='card-img-top' src={imagen} alt='Producto automata' />
            <Link className='text-decoration-none' to={`/categoria/${categoria}`}>
                <p className='card-text text-light bg-success text-center opacity-50' > {categoria} </p>
            </Link>
            <div className='card-body text-center'>
                <h5 className='card-title' > <strong> {producto} </strong> </h5>
                <p className='card-text' > <i> $ {precio}</i> </p>
                <Link to={`/ItemDetail/${id}`}>
                    <button className='btn btn-success'> Ver + </button>
                </Link>
            </div>
        </div >
    )
}

export default Item
