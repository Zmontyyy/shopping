import { combineReducers } from "redux";
import { productReducer } from "./ProductsReducer";
import { selectedProductReducer } from "./ProductsReducer";
import { cartRecuder } from "./Cart";
import { jewReducer } from "./ProductsReducer";
import { eleReducer } from "./ProductsReducer";

 



const reducers  = combineReducers ({
    allProducts:productReducer,
    Product: selectedProductReducer,
    CartItem:cartRecuder,
    jew:jewReducer,
   ele:eleReducer
    
  

  
    
})

export default  reducers