
import {REQ,SUCCESS,ERROR} from './DataMonthTypes'

import db from '../../firebase.config';

export const FETCHREQ = ()=>{
    return {
        type: REQ,
    }
}

export const FETCHSUCCESS = (dataDay:any)=>{ 
    return {
        type:SUCCESS,
        payload: dataDay
    }
}




export const FETCHERROR = (error:any)=>{ 
    return {
        type:ERROR,
        payload: error
    }
}


export const fetchDataMonth = ()=>{
    return (dispatch:any)=>{

        dispatch(FETCHREQ)

        const response=db.collection('dataChartMonth');
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





