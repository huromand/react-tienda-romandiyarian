import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Home from '../Views/Home';
import Cart from '../Views/Cart';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Error from '../Views/Error';
import Filtrados from '../Views/Filtrados';

const Rutas = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route Index element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/ItemDetail/:id' element={<ItemDetailContainer />} />
                        <Route path='/categoria/:categoria' element={<Filtrados />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path="*" element={<Error />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rutas