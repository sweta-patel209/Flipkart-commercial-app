import axios from 'axios';

const url = 'http://localhost:5000'

export const authenticateSignup = async(user) => {
    try{      
    return await axios.post(`${url}/users`,user)
    }catch(error){
        console.log('error while calling signup API')
    }

}

export const getAllUser = async() => {
    try{       
    return await axios.get(`${url}/users`)
    }catch(error){
        console.log('error while calling signup API')
    }

}

