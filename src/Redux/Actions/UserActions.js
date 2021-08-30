import {ActionTypes} from '../Actions/Types'
import axios from 'axios';

export const getUser = (user) => {
    //console.log('in user action')   
    return{
              type:ActionTypes.FETCH_USER,
              payload:user,
             };
}