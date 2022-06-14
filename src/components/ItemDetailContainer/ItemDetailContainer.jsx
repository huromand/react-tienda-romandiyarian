import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { db } from '../../service/firebase';
import { getDocs, collection } from 'firebase/firestore';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [elements, setElements] = useState(null);

    const getData = async () => {
        const col = collection(db, "productos")
        try {
            const data = await getDocs(col)
            const result = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })
            const filtrado = result.find((prod) => prod.id == id)
            setElements(filtrado)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
    return (
        <div className='justify-content m-4'>
            {elements ? <ItemDetail elements={elements} /> : <Spinner/>}
        </div>
    );
};

export default ItemDetailContainer