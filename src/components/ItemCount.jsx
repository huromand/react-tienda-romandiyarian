import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const decrease = () => { 
        setCount( count - 1 )
    }

    const increase = () => {
        setCount( count + 1 )
    }

  return (
    <div>
        <button className='btn btn-primary' onClick={decrease} disabled={count <= 1} > - </button>
        <span className='m-5 '>{count}</span>
        <button className='btn btn-primary' onClick={increase} disabled={count >= stock} > + </button>
        <div>
            <button className='btn btn-primary mx-5' disabled={stock <= 0} onClick={() => onAdd(count)} >Agregar</button>
        </div>
    </div>
  )
}

export default ItemCount;

