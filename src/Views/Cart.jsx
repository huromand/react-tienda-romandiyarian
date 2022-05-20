import React, {useContext} from 'react'
import Carro from '../components/CartContext/Carro'
import { CartContext } from '../components/CartContext/CartContext'

const Cart = () => {

    const { limpiar } = useContext(CartContext)

    return (
        <div>

            <h2 className='my-5 text-center'> Tu carro de compras </h2>
            
            <Carro/>

            <button onClick={limpiar}> Vaciar carro de compras </button>

        </div>
    )
}

export default Cart