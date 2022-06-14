import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';


const ItemCount = ({ data }) => {

    const { stock } = data;
    const { AddItem } = useContext(CartContext)

    const [contador, setContador] = useState(1)
    const [realStock, setRealStock] = useState(stock - contador)
    const [comprar, setComprar] = useState(false)

    const sum = () => {
        if (realStock > 0) {
            setContador(contador + 1)
            setRealStock(realStock - 1)
        }
    }

    const resta = () => {
        if (contador > 1) {

            setContador(contador - 1)
            setRealStock(realStock + 1)
        }
    }

    const onAdd = () => {
        setComprar(true)
    }

    const deshacer = () => {
        setComprar(false)
    }

    return (
        <>
            {comprar ? (
                <>
                    <h5 className=""> <i>{contador} producto/s seleccionado/s</i> </h5>
                    <Link to="/cart" className='m-1' >
                        <button className='m-1 btn btn-outline-success' onClick={() =>AddItem(data, contador)}> Comprar </button>
                    </Link>
                    <button className='m-1 btn btn-outline-warning' onClick={deshacer}> Deshacer </button>
                </>
            ) :
                <>
                    <button className='m-1 btn btn-outline-secondary' onClick={resta}> - </button>
                    <span className='m-3'> {contador} </span>
                    <button className='m-1 btn btn-outline-secondary' onClick={sum}> + </button>
                    <p> <i>Productos Disponibles : {realStock }</i> </p>
                    <button className='m-1 btn btn-outline-success' onClick={onAdd}> Comprar </button>
                </>
            }
        </>
    )
}

export default ItemCount
