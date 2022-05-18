import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ eventos }) => {
    return (
        <div className="row m-5 d-flex justify-conten-center">

            {eventos.length > 0 ? (
                eventos.map((evento) => <Item
                    data={evento} key={evento.id}
                />)
            ) : (
                <h2 className='text-center'>Cargando...</h2>
            )}
        </div >
    );
};

export default ItemList;