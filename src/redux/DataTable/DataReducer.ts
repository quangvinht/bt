import {REQ,SUCCESS,ERROR} from './DataTypes'


const initState : any = {
    loading: true,
    error:'',
    
    dataEquiment:[],
   
   

   
  }

  const reducer = (state = initState, action:any) =>{
    switch(action.type){
        case REQ:
          return {
            ...state,
            
          }
        case SUCCESS:
          return {
            ...state,
            
            loading: false,
         
            dataEquiment: action.payload
          }
        
     


        case ERROR:
         return {
          ...state,
          dataChart:[],
          error:action.payload
          }
         
        default:
          return state
    }
  }
  
  export default reducer