import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCom from './ProductCom'
import { useEffect } from 'react'
import axios from 'axios'
import {setProducts} from '../Redux/Action/ProductsAction'

function ProductList() {
  // const products = useSelector((state)=>{
  //   return state
  // })
 

 
  
  const  dispatch = useDispatch()
  
  const fetchData = async()=>{
   const response = await axios
   .get('https://fakestoreapi.com/products')
   .catch((error)=>{
     console.log(error+'404 Api not found');
    })
    // console.log("111111111111111111111111",response)
   dispatch( setProducts( response.data));
  } 
  useEffect(() => {
    fetchData()
  }, [])
  

  
  return (
    
    <div className='animate__animated animate__fadeIn' >
      {/* <Header/> */}
      <ProductCom/>
    </div>
  )
}

export default ProductList