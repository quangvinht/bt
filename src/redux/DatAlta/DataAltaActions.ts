
import {REQ,SUCCESS,ERROR,SUCCESSMONTH,SUCCESSWEEK,SUCCESSEQUIMENT,SUCCESSSERVICE,
    
    SUCCESSSERVICEDETAIL,
    SUCCESSNUMBERLEVEL,
    SENDDATADETIAL,
    SUCCESSREPORT,
    SUCCESSROLE,
    SENDDATAROLE, 
    SUCCESSUSERLIST,
    SUCCESSUSERDIARY


} from './DataAltaTypes'

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

export const SENDDATA= (data:any)=>{
    return {
        type:SENDDATADETIAL,
        payload: data
    }
}

export const SENDDATAROLEMANAGEMENT = (data:any)=>{
    return {
        type:SENDDATAROLE,
        payload: data
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


export const FETCHSUCCESSEQUIMENT= (data:any)=>{ 
    return {
        type:SUCCESSEQUIMENT,
        payload: data
    }
}

export const FETCHSUCCESSSERVICE= (data:any)=>{ 
    return {
        type:SUCCESSSERVICE,
        payload: data
    }
}


export const FETCHSUCCESSSERVICEDETAIL= (data:any)=>{ 
    return {
        type:SUCCESSSERVICEDETAIL,
        payload: data
    }
}


export const FETCHSUCCESSNUMBERLEVEL= (data:any)=>{ 
    return {
        type:SUCCESSNUMBERLEVEL,
        payload: data
    }
}

export const FETCHSUCCESREPORT= (data:any)=>{ 
    return {
        type:SUCCESSREPORT,
        payload: data
    }
}


export const FETCHSUCCESROLE= (data:any)=>{ 
    return {
        type:SUCCESSROLE,
        payload: data
    }
}

export const FETCHSUCCESSUSERLIST= (data:any)=>{ 
    return {
        type:SUCCESSUSERLIST,
        payload: data
    }
}

export const FETCHSUCCESSUSERDIARY= (data:any)=>{ 
    return {
        type:SUCCESSUSERDIARY,
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



                ////////////////////////////////

                const responseEquiment=db.collection('dataEquiment');
                responseEquiment.get()
                .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                    
                    usersSuccess.push(item.data())

                })
               
                
                
                dispatch(FETCHSUCCESSEQUIMENT(usersSuccess))
               

                
                


                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                }) 


                ////////////////////////////////

                const responseService=db.collection('dataService');
                responseService.get()
                .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                    
                    usersSuccess.push(item.data())

                })
               
                
                
                dispatch(FETCHSUCCESSSERVICE(usersSuccess))
               

                
                


                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                }) 


                
                ////////////////////////////////

                const responseServiceDetail=db.collection('dataServiceDetail');
                responseServiceDetail.get()
                .then(response =>{
                const usersSuccess:any = []
                response.docs.forEach(item =>{
                    
                    
                    usersSuccess.push(item.data())

                })
               
                
                
                dispatch(FETCHSUCCESSSERVICEDETAIL(usersSuccess))
               

                
                


                })
                .catch(error =>{
                    const errorMessage = error.message

                dispatch(FETCHERROR(errorMessage))
                }) 

                  ////////////////////////////////

                  const responseNumberLevel=db.collection('dataNumberLevel');
                  responseNumberLevel.get()
                  .then(response =>{
                  const usersSuccess:any = []
                  response.docs.forEach(item =>{
                      
                      
                      usersSuccess.push(item.data())
  
                  })
                 
                  
                  
                  dispatch(FETCHSUCCESSNUMBERLEVEL(usersSuccess))
                 
  
                  
                  
  
  
                  })
                  .catch(error =>{
                      const errorMessage = error.message
  
                  dispatch(FETCHERROR(errorMessage))
                  }) 


                  
                  ////////////////////////////////

                  const responseReport=db.collection('dataReport');
                  responseReport.get()
                  .then(response =>{
                  const usersSuccess:any = []
                  response.docs.forEach(item =>{
                      
                      
                      usersSuccess.push(item.data())
  
                  })
                 
                  
                  
                  dispatch(FETCHSUCCESREPORT(usersSuccess))
                 
  
                  
                  
  
  
                  })
                  .catch(error =>{
                      const errorMessage = error.message
  
                  dispatch(FETCHERROR(errorMessage))
                  }) 


                    ////////////////////////////////

                    const responseRole=db.collection('dataRole');
                    responseRole.get()
                    .then(response =>{
                    const usersSuccess:any = []
                    response.docs.forEach(item =>{
                        
                        
                        usersSuccess.push(item.data())
    
                    })
                   
                    
                    
                    dispatch(FETCHSUCCESROLE(usersSuccess))
                   
    
                    
                    
    
    
                    })
                    .catch(error =>{
                        const errorMessage = error.message
    
                    dispatch(FETCHERROR(errorMessage))
                    }) 

                         ////////////////////////////////

                         const responseUserList=db.collection('dataUserList');
                         responseUserList.get()
                         .then(response =>{
                         const usersSuccess:any = []
                         response.docs.forEach(item =>{
                             
                             
                             usersSuccess.push(item.data())
         
                         })
                        
                         
                         
                         dispatch(FETCHSUCCESSUSERLIST(usersSuccess))
                        
         
                         
                         
         
         
                         })
                         .catch(error =>{
                             const errorMessage = error.message
         
                         dispatch(FETCHERROR(errorMessage))
                         })
                       ////////////////////////////////

                       const responseUserDiary=db.collection('dataUserDiary');
                       responseUserDiary.get()
                       .then(response =>{
                       const usersSuccess:any = []
                       response.docs.forEach(item =>{
                           
                           
                           usersSuccess.push(item.data())
       
                       })
                      
                       
                       
                       dispatch(FETCHSUCCESSUSERDIARY(usersSuccess))
                      
       
                       
                       
       
       
                       })
                       .catch(error =>{
                           const errorMessage = error.message
       
                       dispatch(FETCHERROR(errorMessage))
                       }) 
       
     
         
       
  
  


        


        }
}








