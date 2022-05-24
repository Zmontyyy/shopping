import { ActionTypes } from "../contants/Action-types" 

export const setProducts = (products)=>{
  
       return{
           type:ActionTypes.SET_PRODUCTS,
           payload:products,
       }
    }
export const jewProducts = (jproducts)=>{
  
       return{
           type:ActionTypes.JEWELERY,
           payload:jproducts,
       }
    }
export const eleProducts = (eproducts)=>{
  
       return{
           type:ActionTypes.ELE,
           payload:eproducts,
       }
    }
export const selectedProduct = (product)=>{
       return{
           type:ActionTypes.SELECTED_PRODUCTS,
           payload:product,
       }
    }

    
export const RemoveselectedProduct = (product)=>{
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload:product,
    }
 }
export const addItem = (items)=>{
    return{
        type:ActionTypes.ADD_CART,
        payload:items
    }
 }
export const RemoveItem = (id)=>{
    return{
        type:ActionTypes.REMOVE,
        payload:id
    }
 }


 
