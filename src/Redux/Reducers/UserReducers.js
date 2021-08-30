import {ActionTypes} from '../Actions/Types';

const initialState = {
    user:[]
}

export const userReducer = (state=initialState,action) => {
    //console.log('in user reducer')
    switch (action.type) {
        case ActionTypes.FETCH_USER:
            return {
                ...state,
                user:action.payload
            }     
        default:
            return state;
           
    }
}