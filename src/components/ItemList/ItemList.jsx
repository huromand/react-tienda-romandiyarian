import React from 'react'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner';

const ItemList = ({ elements }) => {
    return (
        <div className="row m-5 d-flex justify-content-center">

            {elements.length > 0 ? (
                elements.map((element) => <Item
                    data={element} key={element.id}
                />)
            ) : (
                <Spinner/>
            )}
        </div >
    );
};

export default ItemList;