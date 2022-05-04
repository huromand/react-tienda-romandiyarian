import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const onAdd = (cantidad) => { 
    console.log(`Agregaste ${cantidad} items al carrito`);
  }

  const data = [
    {
      id:1,
      nombre:"Producto1",
      descripcion:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      stock: 10,
      precio: 1000,
      img: 'https://robohash.org/1',
    },
    {
      id:2,
      nombre:"Producto2",
      descripcion:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      stock: 5,
      precio: 2500,
      img: 'https://robohash.org/2',
    },
    {
      id:3,
      nombre:"Producto3",
      descripcion:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      stock: 8,
      precio: 700,
      img: 'https://robohash.org/3',
    },
    {
      id:4,
      nombre:"Producto4",
      descripcion:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
      stock: 14,
      precio: 500,
      img: 'https://robohash.org/4',
    }
  ]

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      },2000)
    })
    promesa.then((res)=>{
      setProductos(res)
    }).then(()=>
    console.log(productos)
    ).catch((error)=>
    console.log(error)
    )
    return () => {}
  }, [])
  

  return (
    <div className="container-fluid">
      <ItemList productos={productos}/>
      {/* <ItemCount initial={1} stock={8} onAdd={onAdd} /> */}
    </div>
  )
}

export default ItemListContainer