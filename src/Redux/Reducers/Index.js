import {combineReducers} from 'redux';
import { productReducer } from '../Reducers/ProductReducers';
import { userReducer } from '../Reducers/UserReducers';
import { cartReducer } from '../Reducers/CartReducers';

const rootReducer = combineReducers({
    allProducts:productReducer,
    cartProduct:cartReducer,
    loginUser:userReducer
})

export default rootReducer