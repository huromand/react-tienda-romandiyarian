import React, { useContext } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {

    const { carro } = useContext(CartContext)
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" >
                <FiShoppingCart className='text-white mx-2 display-6' />
                <span className='text-white'> {carro.length} </span>
            </div>
        </>

    )
}

export default CartWidget