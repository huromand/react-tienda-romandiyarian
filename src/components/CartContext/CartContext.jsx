import React, { createContext, useState } from 'react'

export const CartContext = createContext('')

const GlobalProvider = ( {children} ) => {
  const [carro, setCarro] = useState([])

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
    <CartContext.Provider value={{ carro, AddItem, limpiar, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default GlobalProvider