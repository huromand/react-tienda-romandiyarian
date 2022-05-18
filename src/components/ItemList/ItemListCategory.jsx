import React, { useEffect, useState } from "react";
import { data } from "../../config";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListCategory() {
    const [product, setProduct] = useState(null);
    const { categoria } = useParams();

    const eventos = data.filter((evento) => evento.categoria.toLowerCase() === categoria.toLowerCase());

    useEffect(() => {
        getItem();
        return () => { };
    }, [categoria]);

    const getItem = () => {
        const getItemPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(eventos);
            }, 2000);
        });
        getItemPromise.then((res) => setProduct(res));
    };

    return (
        <>

            {product ? (
                <>
                    <h2 className='m-5 display-2'>{categoria.toLocaleUpperCase()} </h2>
                    <ItemList eventos={product} />
                </>
            ) : (
                <h3 className="text-center">Cargando...</h3>
            )}
        </>
    );
}

export default ItemListCategory;