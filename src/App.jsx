import React from "react";
import Header from "./Containers/Header";
import ProductsDetails from "./Containers/ProductsDetails";
import ProductList from "./Containers/ProductList";
import ProductCom from "./Containers/ProductCom";
import Cart from "./Containers/Cart";
import Jew from "./Containers/Jew";
import Electronics from "./Containers/Electronics";
import { BrowserRouter,Route,Routes, } from "react-router-dom";
import { Navigate } from "react-router-dom";
import About from "./Containers/About";





function App() {
  return(
    <>
    <Header/>
     <Routes>
       <Route path="/ProductCom" element={<ProductCom/>}/>
       <Route path="" element={<ProductList/>}/>
       <Route path="ProductsDetails/:proID" element={<ProductsDetails/>}/>
        <Route path="Cart" element={<Cart/>} />
        <Route path="Jew" element={<Jew/>} />
        <Route path="Electronics" element={<Electronics/>} />
        <Route path="About" element={<About/>} />
       <Route path="*" element={<h1>404 page now found</h1>}/>
     </Routes>
    
    </>
  )
}

export default App;
