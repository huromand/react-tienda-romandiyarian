import React from "react"
import ItemCount from "./ItemCount";

const ItemListContainer = () => {

  const onAdd = (cantidad) => { 
    console.log(`Agregaste ${cantidad} items al carrito`);
  }

  return (
    <div className="container-fluid">
    <h2>El mejor producto</h2>
    <ItemCount initial={1} stock={8} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer