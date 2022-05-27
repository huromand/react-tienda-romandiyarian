import React, { createContext, useState } from 'react'

export const CartContext = createContext('')

const GlobalProvider = ( {children} ) => {

  const [carro, setCarro] = useState([])

  // const suma = (carro) => {
  //   let x = 0
  //   for (let i = 0 ; i < carro.length ; i++){
  //     x = x + carro[i].cantidad * carro[i].precio 
  //   }
  //   return x
  // }

  // const total = (carro) => {
  //   let x = 0
  //   for (let i = 0 ; i < carro.length ; i++){
  //     x = x + carro[i].cantidad 
  //   }
  //   return x
  // }

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
    <CartContext.Provider value={{ carro, AddItem, limpiar, removeItem, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export default GlobalProvider