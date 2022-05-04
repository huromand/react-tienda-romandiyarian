import React from 'react'

const Item = ({ id, nombre, descripcion, stock, precio, urlImg }) => {

    return (
        <div className='card' >
            <img src={urlImg} className="card-img-top"/>
            <div className="card-body">
                <h2 className="card-title"> {nombre} </h2>
                <h3> $ {precio} </h3>
                <p className="card-text"> {descripcion} </p>
                <a href="#" className="btn btn-primary">Agregar</a>
            </div>
        </div>
    )
}

export default Item