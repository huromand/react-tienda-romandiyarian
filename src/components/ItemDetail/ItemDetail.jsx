import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({elements}) => {

    const { id, producto, imagen, stock, precio, categoria, descripcion, cantidad} = elements
    
    return (
        <div>
            <h1 className='m-5 display-2'> Producto </h1>
            <div className="card mb-5 container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card-body">
                            <h5 className="display-6 text-center">{producto}</h5>
                            <hr />

                            <h5 className=" text-success"> <i>Precio unitario: ${precio}</i> </h5>
                            <ItemCount data={{ stock, id, imagen, producto, precio, cantidad }} />

                            <hr />
                            <p className=" text-start">{descripcion}</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <img src={imagen} className=" container-fluid" alt="Celular" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ItemDetail