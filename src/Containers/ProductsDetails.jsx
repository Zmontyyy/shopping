import React from 'react'
import Header from './Header'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct,RemoveselectedProduct } from '../Redux/Action/ProductsAction'
import { Link } from 'react-router-dom'
import { addItem } from '../Redux/Action/ProductsAction'


function ProductsDetails() {
  const Product = useSelector((state) => {
    return state.Product;

  })

  const { proID } = useParams()
  console.log(proID);
  const dispatch = useDispatch()

  const fetchProductsDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${proID}`)
      .catch((error) => {
        console.log(error + '404 Api not found');
      })
    dispatch(selectedProduct(response.data));
    
  }

  useEffect(() => {
    fetchProductsDetails()
    return(()=>{
      dispatch(RemoveselectedProduct())
    })
      
  }, [Product.Id])
  

 const send=(e)=>{

  dispatch(addItem(e))
  

 }


  return (
    
    <div className='animate__animated animate__fadeIn' >
      {/* <Header/> */}
      {Object.keys(Product).length == 0 ?(<div className="loader"></div>):(
      <div className="container">
        <div className="row" key={Product.id} >
          <div className="col ">
            <img className='img-2' src={Product.image} />
          </div>
          <div className="col">
            <h1 className='details-h1'>{Product.title}</h1>
            <p className='details-price' >${Product.price} <span className='details-span'>  (50% OFF)</span></p>
            <p className='tax' >inclusive of all taxes</p>
          
            <button onClick={()=>send(Product)}  className='bag btn btn-danger ' >Add to Bag</button>
          
            <h5  className='details-category mt-4' >{Product.category}</h5>
            <ul className='text-muted li mt-3  ' >
              <li>100% Original Products</li>
              <li>Pay on delivery might be available</li>
              <li>Easy 30 days returns and exchanges</li>
              <li>Try & Buy might be available</li>
            </ul>
            <h6 className='mt-5' >PRODUCT DETAILS : </h6>
            <p className='mt-3'>{Product.description}</p>
          </div>
        </div>
      </div>
      )}



    </div>
  )
}

export default ProductsDetails