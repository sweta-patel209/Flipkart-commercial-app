import {ActionTypes} from '../Actions/Types';
import { createContext } from 'react';

const initialState = {
    cartProduct:[],
    secondEntry:[]
   
}



export const cartReducer = (state=initialState,action) => {
  //  console.log('in reducer of cart', action.payload)
    switch (action.type) {
            case ActionTypes.ADD_PRODUCT_IN_CART:                
                   let exists =  state.cartProduct.find((product)=>product.id === action.payload.id)
                   if(exists){
                        return{
                            ...state
                        }   
                   }                    
                    return {
                    ...state,
                    cartProduct:[...state.cartProduct,action.payload]
                    }
            
            case ActionTypes.ADD_PRODUCT_AGAIN_IN_CART:
                
                return {
                    ...state,
                    secondEntry:[...state.secondEntry,action.payload]
                    }

            case ActionTypes.REMOVE_PRODUCT_FROM_CART:
             //   console.log('in reducer')
            //   console.log(action.payload)
                
                return {
                    ...state,
                    cartProduct:state.cartProduct.filter((product => product.id !== action.payload))
                }   
            
            case ActionTypes.REMOVE_SECOND_ENTRY_OF_PRODUCT:
                //this will delete all the entry of this product id so this will not work
               // return {
               //         ...state,
               //         secondEntry:state.secondEntry.filter((product => product.id !== action.payload))
               // }    
                ////////////////////
                //  THIS WILL DELETE ONLY SINGLE ENTRY OF ONE PRODUCT 
                const index = state.secondEntry.findIndex(
                    (Item) => Item.id === action.payload
                )
                let copyOfSecondEntry = [...state.secondEntry]
    
                if(index >=0){
                    copyOfSecondEntry.splice(index,1)
                }else{
                    console.warn('product is not in the cart')
                }
                return {
                    ...state,
                    secondEntry:copyOfSecondEntry
                }

            case ActionTypes.REMOVE_ALL_SECOND_ENTRY_OF_PRODUCT:                  
                   //this action will remove all the entry of one product    
                return {
                    ...state,
                    secondEntry:state.secondEntry.filter((product => product.id !== action.payload))
                }   
    
        default:
            return state;
           
    }
}