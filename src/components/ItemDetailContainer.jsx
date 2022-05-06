import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../config'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const {id}= useParams();
    const [producto, setProducto] = useState(null);
    
    console.log(data);
    console.log("esto es un id" + id)
    const filtrado = data.find((element)=>element.id===Number(id));

    console.log(filtrado);

    useEffect(() => {
        const pedido = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(filtrado)
            },2000)
        
        })
        pedido.then((res)=>{
            setProducto(res)
        }).then(()=>
            console.log(producto)
        ).catch((error)=>
            console.log(error)
        )
    }, [])

  return (
    <div>
    {producto ? <ItemDetail producto={producto}/> : <h2>Cargando...</h2> }
    </div>
  )
}

export default ItemDetailContainer