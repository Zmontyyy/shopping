import { ActionTypes } from "../contants/Action-types"

const initialState = {
    products:[],
    jproducts:[],
    eleProducts:[]
}

export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
            default:
                return state;  
                
            }
            
        }

export const jewReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.JEWELERY:
            return {...state,jproducts:payload};
            default:
                return state;  
                
            }
            
        }
export const eleReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.ELE:
            return {...state,eleProducts:payload};
            default:
                return state;  
                
            }
            
        }


export const selectedProductReducer=(state={},{type,payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state,...payload};
            
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
            
            default:
                return state;  
                
            }
            
        }

