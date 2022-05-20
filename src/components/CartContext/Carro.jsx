import React, {useContext} from 'react'
import { CartContext } from './CartContext'

const Carro = () => {

    const { carro, removeItem } = useContext(CartContext)

    return (
        
        <ul>
            {carro.length > 0 ? carro.map((item, index) => (
                <li key={index}> 
                    {item.cantidad} Productos "{item.producto}" - Precio unitario: $ {item.precio}  <button onClick={() => removeItem(item.id)}>Eliminar</button> 
                </li>
                )) : 
                <h3 className="text-center" >Tu carro está vacio </h3>
            }
            </ul>
        
    )
}

export default Carro