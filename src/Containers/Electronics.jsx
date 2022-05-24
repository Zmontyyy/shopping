import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import '../Style.css'
import { eleProducts } from '../Redux/Action/ProductsAction'
import { addItem } from '../Redux/Action/ProductsAction'

function Electronics() {

    const dispatch = useDispatch()
    const fetchData =()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>dispatch(eleProducts(json)))
    }
    useEffect(()=>{
        fetchData()
    },[])
 
    const Data = useSelector((state)=>{
       return state.ele.eleProducts
    })
    
  

  const send =(item)=>{
    dispatch(addItem(item))
    // console.log(item);
}

  return (
    <div>
     
     <div className=" jew main " >
        <div className="row ">
          {Data.map((product,index) => {
            return (
              <div key={index} className="col-3">
                <div className=" box card  mt-2">
                 
                  <img src={product.image} className="img" alt="..." />
      
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
      </div>
      {Object.keys(Data).length == 0 ? (<div>    <h1 className='bag1' >Loading...... :)  </h1></div>) : (
        <div className='subtotal' >  
          </div>
      )}


        
    </div>
  )
}

export default Electronics