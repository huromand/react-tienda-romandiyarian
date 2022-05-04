import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div>
        { productos.length > 0 ? ( productos.map( (producto) => <Item id={producto.id} nombre={producto.nombre} descripcion={producto.descripcion} precio={producto.precio} stock={producto.stock} urlImg={producto.img} />)) : (<h1>Cargando...</h1> ) } 
    </div>
  )
}

export default ItemList