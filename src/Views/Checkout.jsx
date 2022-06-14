import React, {useContext} from 'react'
import Formulario from '../components/Formulario/Formulario'
import { CartContext } from '../components/CartContext/CartContext'

const Checkout = () => {

    const { carro, totalItems, precioTotal } = useContext(CartContext)

    return (
        <div style={{minHeight: "80vh"}}>
            <h2 className='text-center display-2'>Checkout</h2>

            <div className='d-flex justify-content-center align-items-center my-5'>
                <span >
                    Cantidad de productos Total: {totalItems()} - Precio total: ${precioTotal()} 
                </span>
            </div>

            <Formulario items={carro} total={precioTotal()} />
        </div>
        
    )
}

export default Checkout