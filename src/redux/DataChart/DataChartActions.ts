
import {REQ,SUCCESS,ERROR,SUCCESSMONTH,SUCCESSWEEK} from './DataChartTypes'

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


export const FETCHSUCCESSMONTH= (data:any)=>{ 
    return {
        type:SUCCESSMONTH,
        payload: data
    }
}

export const FETCHSUCCESSWEEK= (data:any)=>{ 
    return {
        type:SUCCESSWEEK,
        payload: data
    }
}



export const fetchDataChart = ()=>{
    return (dispatch:any)=>{

        dispatch(FETCHREQ)

        const response=db.collection('dataChartDay');
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


                ////////////////////////////////////////////////////////////////
                const responsem=db.collection('dataChartMonth');
                responsem.get()
                .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                    
                    usersSuccess.push(item.data())

                })
               
                
                
                dispatch(FETCHSUCCESSMONTH(usersSuccess))
               

                
                


                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                })  


                ////////////////////////////////////////////////////////////////
                const responseW=db.collection('dataChartWeek');
                responseW.get()
                .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                    
                    usersSuccess.push(item.data())

                })
               
                
                
                dispatch(FETCHSUCCESSWEEK(usersSuccess))
               

                
                


                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                }) 

        


        }
}








