import React, {useContext} from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'


const Carro = () => {

    const { carro, removeItem, limpiar } = useContext(CartContext)

    return (
        
        <div>
            {carro.length > 0 ? carro.map((item, index) => (
                
                <ul className='d-flex container justify-content-center'>
                <li key={index} className='d-flex'> 
                    {item.cantidad} Productos "{item.producto}" - Precio unitario: $ {item.precio}  
                    <button onClick={() => removeItem(item.id)} className='btn btn-outline-secondary mx-5'>
                        Eliminar
                    </button> 
                </li>
                </ul>
                
                )) : 
                <div className='d-flex container justify-content-center align-items-center'>
                    <h3 className="text-center" > Carro vacio </h3>
                    <Link to="/">
                        <button className='btn btn-outline-secondary'>
                            Ir a la tienda
                        </button>
                    </Link>
                </div>
                
            }
            
            
            
        </div>
        
    )
}

export default Carro