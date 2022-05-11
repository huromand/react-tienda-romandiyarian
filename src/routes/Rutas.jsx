import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "../components/Checkout/Checkout";
import Error from "../components/Error/Error";
import ItemDetailContainer from "../components/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer";
import Layout from "../components/Layout";

const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<ItemListContainer/>}/>
            <Route path='/item-detail/:id' element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Route>
          <Route path="*" element={<Error/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas