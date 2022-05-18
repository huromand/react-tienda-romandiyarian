import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" >
                <FiShoppingCart className='text-white mx-5 display-6' />
            </div>
        </>

    )
}

export default CartWidget