import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RemoveItem } from '../Redux/Action/ProductsAction';
import Header from './Header'
import Badge from '@mui/material/Badge';
import { useEffect} from 'react';

import '../Style.css'





function Cart() {
  
   const [price,SetPrice] = useState('')
  
  const getData = useSelector((state) => {
    return state.CartItem.carts
  })

  const  dispatch = useDispatch()
  
  // remove item
   const remove =(id)=>{
    dispatch(RemoveItem(id))
   }

   const total =()=>{
     let price = 0
     getData.map((ele,index)=>{
      SetPrice(price = ele.price + price )
     })
   }

   useEffect(()=>{
     total()
     
   },[total])
 
  return (

    <div className='container animate__animated animate__fadeIn  ' >
      <h1>Cart</h1>
      <h3 className='mt-5 cart-text text-muted' >Shopping Bag  <i class="fa-solid fa-bag-shopping"></i></h3>
      <hr />
      <div className='container' >



        {getData.map((pro, index) => {
          return (
            <div className='row' key={index} >
              <div className="col">
                <img src={pro.image} alt="" style={{ width: "10rem", height: "10rem" }} />
              </div>
              <div className="col">
                <h4>{pro.title}</h4>
                <p>{pro.category}</p>
              </div>
              <div className=" col ">
                <h4>rating :</h4>
                <p className='rate' > {pro ? pro.rating.rate : ""}★</p>
              </div>
              <div className="col ">
                <h5>${pro.price}</h5>
              </div>
              <div className="col ">
                <button onClick={()=>remove(pro.id)} className='btn btn-danger' >remove</button>
              </div>


              <hr className='mt-5' />
            </div>
          )
        })}


      </div>

      {Object.keys(getData).length == 0 ? (<div>    <h1 className='bag1' >Your Bag is empty :(  </h1></div>) : (
        <div className='subtotal' > <h4  >Sub-Total</h4>  <h5>{Math.round(price)}$</h5>
          <p className='items text-muted' >Total Items {getData.length} </p></div>
      )}

     




    </div>
  )
}

export default Cart