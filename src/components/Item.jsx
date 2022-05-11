import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, descripcion, stock, precio, urlImg }) => {

    return (
        <>
        <div className='card col-md-4 p-5 m-1' >
            <img src={urlImg} className="card-img-top" alt='imagen de producto'/>
            <div className="card-body">
                <h2 className="card-title"> {nombre} </h2>
                <h3> $ {precio} </h3>
                <p className="card-text"> {descripcion} </p>
                <Link to={`/item-detail/${id}`} className="btn btn-primary">Ver mas</Link>
            </div>
        </div>
        </>
    )
}

export default Item