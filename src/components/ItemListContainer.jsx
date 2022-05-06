import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { data } from "../config";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const onAdd = (cantidad) => { 
    console.log(`Agregaste ${cantidad} items al carrito`);
  }

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      },2000)
    })
    
    promesa
      .then((res)=>{setProductos(res)})
      .then(()=>console.log(productos))
      .catch((error)=>console.log(error))
    }, [])
  

  return (
    <div className="container-fluid">
      <ItemList productos={productos}/>
      {/* <ItemCount initial={1} stock={8} onAdd={onAdd} /> */}
    </div>
  )
}

export default ItemListContainer