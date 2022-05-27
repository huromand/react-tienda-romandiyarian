import React, {useContext} from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'


const Carro = () => {

    const { totalItems, precioTotal } = useContext(CartContext)

    const { carro, removeItem, limpiar } = useContext(CartContext)

    const comprar= () =>{
        const x = {"display":"none"}
        if(!(carro.length>0)) return x
    }

    return (
        
        <div>
            <>
            {carro.length > 0 ?  carro.map((item, index) => (
                
                <ul className='d-flex container justify-content-center'>
                <li key={index} className='d-flex align-items-center'> 
                    {item.cantidad} Productos "{item.producto}" - Precio unitario: $ {item.precio}  
                    <button onClick={() => removeItem(item.id)} className='btn btn-outline-secondary mx-5'>
                        Eliminar
                    </button> 
                </li>
                </ul>
                
                )): 
                <>
                <div className='d-flex container justify-content-center align-items-center my-5'>
                    <h3 className="text-center" > Carro vacio </h3>
                </div> 
                <div className='d-flex container justify-content-center align-items-center mb-5'>
                    <Link to="/">
                        <button className='btn btn-outline-secondary'>
                            Ir a la tienda
                        </button>
                    </Link>
                </div>
                </>
                
            }
            </>
            <div className='d-flex justify-content-center align-items-center my-5'>
                <span >
                    Cantidad de Items: {totalItems()} - Precio total: ${precioTotal()} 
                </span>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <Link to="/checkout">
                    <button className="btn btn-success" style={comprar()}>  
                        Comprar
                    </button>
                </Link>
            </div>
            <div className='d-flex justify-content-center'>
            <button onClick={()=>limpiar()} className='m-2 btn btn-outline-secondary' style={comprar()} >
                Vaciar Carrito
            </button>
            </div>
        </div>
        
    )
}

export default Carro