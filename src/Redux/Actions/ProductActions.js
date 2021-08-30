import {ActionTypes} from '../Actions/Types'
import axios from 'axios';

export const getProducts = () => dispatch => {
    
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(products=>
        dispatch({
            type:ActionTypes.FETCH_PRODUCTS,
            payload:products
        }))
}

export const getSingleProduct = (id) => dispatch => {
   //console.log('***in action')
    fetch(`http://localhost:5000/products/${id}`)
    .then(res=>res.json())
    .then(product=>
        dispatch({
            type:ActionTypes.FETCH_SINGLE_PRODUCT,
            payload:product
        }))
}

export const getNavData = () => dispatch => {
    fetch('http://localhost:5000/NavData')
    .then(res=>res.json())
    .then(navData=>
        dispatch({
            type:ActionTypes.FETCH_NAVDATA,
            payload:navData
        })
        )
}
