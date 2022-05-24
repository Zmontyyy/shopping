import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import "../Style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from '../Redux/Action/ProductsAction'




function ProductCom() {
 
const  dispatch = useDispatch()


const products = useSelector((state) => {
  return  state.allProducts.products;  
});

 const send =(item)=>{
      dispatch(addItem(item))
    
 }


  return (
    <div className="animate__animated animate__fadeIn ">
      <div className="container-fluid banner" >
        <p className="para " >SPRING / SUMMER COLLECTION 2022</p>
        <h1 className=""  >
          Get up to 30% Off <br />
          New Arrivals
          <hr style={{ width: "400px" }} />
          <button className="btn  btn-danger">shop now</button>
        </h1>
        <h2 className="left" >Deals Of The Week !</h2>
        <hr className="red" />

      </div>
      <h2 className="new" >New Arrivals</h2>
      <hr className="new2" />
      {/*++++++++ products +++++++ */}


      <div className=" main " >
        <div className="row ">
          {products.map((product) => {
            return (
              <div key={product.id} className="col-3">
                <div className=" box card  mt-2">
                  <Link to={`ProductsDetails/${product.id}`} >
                  <img src={product.image} className="img" alt="..." />
                  </Link>
                    <h6>{product.title}<hr /></h6>
                    <p className="products_price">${product.price}</p>
                    <p className="text-muted">{product.category}</p>
                      <button className="btn btn-1 btn-primary mb-5 " onClick={()=>send(product)}  >Buy Now</button>
                    {/* <Link to={'Cart'} >
                    </Link> */}
                </div>

              

              </div>
            );
          })}
          
        </div>
        {Object.keys(products).length == 0 ? (<div className="loader"></div>) : (
        <div className='subtotal' >  
          </div>
      )}
      </div>



    </div>
  );
}

export default ProductCom;
