
import {REQ,SUCCESS,ERROR} from './UserTypes'

import db from '../../firebase.config';

export const FETCHREQ = ()=>{
    return {
        type: REQ,
    }
}

export const FETCHSUCCESS = (users:any)=>{ 
    return {
        type:SUCCESS,
        payload: users
    }
}

export const FETCHERROR = (error:any)=>{ 
    return {
        type:ERROR,
        payload: error
    }
}

export const fetchUsers = ()=>{
    return (dispatch:any)=>{

        dispatch(FETCHREQ)

        const response=db.collection('NguoiDung');
        response.get()
                .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                    
                    usersSuccess.push(item.data())

                })
               
                
                
                dispatch(FETCHSUCCESS(usersSuccess))
               

                
                


                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                })  


        }
}