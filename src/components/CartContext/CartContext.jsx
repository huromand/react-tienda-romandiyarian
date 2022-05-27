import React, { createContext, useState } from 'react'

export const CartContext = createContext('')

const GlobalProvider = ( {children} ) => {

  const [carro, setCarro] = useState([])

  const precioTotal = () => {
    return carro.reduce((accumulator, current) => accumulator + 
                        Number(current.precio * current.cantidad), 0);
 }

  const totalItems = () => {
    return carro.reduce((accumulator, current) => accumulator + current.cantidad, 0);
  }

  const AddItem = (item, cantidad) => {
    let flag = false;
    item.cantidad =cantidad;

    const filtro = carro.map((p)=>{
      if (p.id===item.id ) { 
        p.cantidad += item.cantidad;
        flag = true;
      }
      return p;
    })

    if(flag) {
      setCarro(filtro)
    } else {
      setCarro([...carro,item])
    }
  }

  const limpiar = () => setCarro([])

  const removeItem = (id) => {
    const sacoItem = carro.filter(e => e.id !== id)
    setCarro(sacoItem)
  }

  return (
    <CartContext.Provider value={{ carro, AddItem, limpiar, removeItem, totalItems, precioTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default GlobalProvider