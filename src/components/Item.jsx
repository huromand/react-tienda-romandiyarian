import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, descripcion, stock, precio, urlImg }) => {

    return (
        <div className='card col-md-4' >
            <img src={urlImg} className="card-img-top"/>
            <div className="card-body">
                <h2 className="card-title"> {nombre} </h2>
                <h3> $ {precio} </h3>
                <p className="card-text"> {descripcion} </p>
                <Link to={`/item-detail/:id${id}`} className="btn btn-primary">Ver mas</Link>
            </div>
        </div>
    )
}

export default Item