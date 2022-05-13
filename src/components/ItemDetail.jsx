import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../config';
import ItemCount from './ItemCount';


const ItemDetail = ({eventos}) => {

  const params = useParams();

  console.log(eventos)

  // console.log(Number(params));

  // const found = data.find(e=>e.id===Number(params))

  // console.log(found)

  const onAdd = (cantidad) => { 
    console.log(`Agregaste ${cantidad} items al carrito`);
  }


  return (
    <>
        <div className='d-flex' >
          <div className='card col-md-4 justify-content-center' >
              <img src={eventos.img} className="card-img-top"/>
              <div className="card-body">
                  <h2 className="card-title"> {eventos.nombre} </h2>
                  <h3> $ {eventos.precio} </h3>
                  <p className="card-text"> {eventos.descripcion} </p>
                  <ItemCount initial={1}  stock= {eventos.stock} onAdd={onAdd} />
              </div>
          </div>
        </div>
    </>
  )
}

export default ItemDetail