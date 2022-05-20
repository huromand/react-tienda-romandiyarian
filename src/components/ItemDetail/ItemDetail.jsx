import React, { } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ eventos }) => {

    return (
        <div>
            <h1 className='m-5 display-2'> Producto </h1>
            <div className="card mb-5 container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={eventos.imagen} className=" container-fluid" alt="Automata" />
                        <Link className='text-decoration-none' to={`/categoria/${eventos.categoria}`}>
                            <p className='card-text text-light bg-dark text-center' > Automata {eventos.categoria} </p>
                        </Link>
                    </div>

                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="display-6 text-center">{eventos.producto}</h5>
                            <hr />

                            <h5 className=" text-success"> <i>Precio unitario: ${eventos.precio}</i> </h5>
                            <ItemCount data={{ stock: eventos.stock, id: eventos.id, imagen: eventos.imagen, producto: eventos.producto, precio: eventos.precio, fecha: eventos.fecha, cantidad: eventos.cantidad }} />

                            <hr />
                            <p className=" text-start">{eventos.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ItemDetail