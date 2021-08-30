import {ActionTypes} from '../Actions/Types';

const initialState = {
    products:[],
    product:[],
    navdata:[]
}

export const productReducer = (state=initialState,action) => {
   // console.log('in reducer')
    switch (action.type) {
            case ActionTypes.FETCH_PRODUCTS:
                return {
                    ...state,
                    products:action.payload
                } 
            case ActionTypes.FETCH_SINGLE_PRODUCT:
                return {
                    ...state,
                    product:action.payload
                }  
        
            case ActionTypes.FETCH_NAVDATA:
                return {
                    ...state,
                    navdata:action.payload
                }  
    
        default:
            return state;
           
    }
}