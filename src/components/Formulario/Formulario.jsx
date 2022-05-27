import React, { useContext } from 'react'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext'

const Formulario = () => {

    const { limpiar } = useContext(CartContext)

    return (
        <form>
            <h5 className="display-6 ">Datos del Comprador</h5>
            <div className="form-group">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name" placeholder="Nombre"/>
            </div>
            <div className="form-group">
                <label for="mail">Correo Electrónico</label>
                <input type="email" class="form-control" id="mail" placeholder="mail@mail.com"/>
            </div>
            <div className="form-group">
                <label for="cel">Telefono</label>
                <input type="text" class="form-control" id="cel" placeholder="ej: 11654321"/>
            </div>

            <div className='btn-group' role='group' >
                <button className='m-1 btn btn-secondary'> Finalizar Compra </button>
                <Link to="/">
                    <button className='m-1 btn btn-secondary' > Seguir Comprando </button>
                </Link>
                <button onClick={limpiar} className='m-1 btn btn-secondary'> Vaciar Carrito </button>
            </div>

        </form>
    )

}

export default Formulario