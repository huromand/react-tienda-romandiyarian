import React, { useEffect, useState } from "react";
//import { data } from "../../config";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from '../../service/firebase'
import { collection, getDocs } from 'firebase/firestore'

function ItemListCategory() {
    const [product, setProduct] = useState(null);
    const { categoria } = useParams();

    useEffect(() => {
        getData();
    }, [categoria]);

    const getData = async () => {
        const col = collection(db, "productos")
        try {
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const filtrado = result.filter((prod) => prod.categoria.toLowerCase() === categoria.toLowerCase())

            setProduct(filtrado)
            console.log(filtrado)
        } catch (error) {
            console.log(error)
        }
    }

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