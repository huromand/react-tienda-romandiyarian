import React from 'react'
import Carro from '../components/CartContext/Carro'

const Cart = () => {

    return (
        <div style={{height: "80vh"}} >
            <h2 className='my-5 text-center'> Tu carro de compras </h2>
            <Carro/>
        </div>
    )
}

export default Cart