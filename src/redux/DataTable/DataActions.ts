
import {REQ,SUCCESS,ERROR} from './DataTypes'

import db from '../../firebase.config';

export const FETCHREQ = ()=>{
    return {
        type: REQ,
    }
}

export const FETCHSUCCESS = (data:any)=>{ 
    return {
        type:SUCCESS,
        payload: data
    }
}




export const FETCHERROR = (error:any)=>{ 
    return {
        type:ERROR,
        payload: error
    }
}





export const fetchDataTable = ()=>{
    return (dispatch:any)=>{

        dispatch(FETCHREQ)

        const response=db.collection('dataEquiment');
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








