import {ActionTypes} from '../Actions/Types'
import axios from 'axios';

export const addProductInCart = (id) => dispatch => {
    try{
    //console.log('in action')
    fetch(`http://localhost:5000/products/${id}`)
    .then(res=>res.json())
    .then(product=>
        dispatch({
            type:ActionTypes.ADD_PRODUCT_IN_CART,
            payload:product
        }))
    }catch(error){
        console.log('error in cart action', error.message)
    }
}

export const removeProductFromCart = (id) => dispatch => {
    try{
   // console.log('in action')
    
        dispatch({
            type:ActionTypes.REMOVE_PRODUCT_FROM_CART,
            payload:id
        })
    }catch(error){
        console.log('error in cart action', error.message)
    }
}

export const addProductAgainInCart = (id) => dispatch => {
    try{
    //console.log('in action',id)
    fetch(`http://localhost:5000/products/${id}`)
    .then(res=>res.json())
    .then(product=>
        dispatch({
            type:ActionTypes.ADD_PRODUCT_AGAIN_IN_CART,
            payload:product
        }))
    }catch(error){
        console.log('error in cart action', error.message)
    }
}

export const removeSecondEntry = (id) => dispatch => {
    try{
   // console.log('in action',id)
    
        dispatch({
            type:ActionTypes.REMOVE_SECOND_ENTRY_OF_PRODUCT,
            payload:id
        })
    }catch(error){
        console.log('error in cart action', error.message)
    }
}

export const removeAllSecondEntryofOneProduct = (id) => dispatch => {
    try{
   // console.log('in action',id)
    
        dispatch({
            type:ActionTypes.REMOVE_ALL_SECOND_ENTRY_OF_PRODUCT,
            payload:id
        })
    }catch(error){
        console.log('error in cart action', error.message)
    }
}