import {REQ,SUCCESS,ERROR} from './DataMonthTypes'


const initState : any = {
    loading: true,
    error:'',
    
    
    dataChartMonth:[],
   
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
         
            dataChartMonth: action.payload
          }
        
        case SUCCESS:
          return {
            ...state,
            
            loading: false,
         
            dataChartMonth: action.payload
          }



        case ERROR:
         return {
          ...state,
          dataChartMonth:[],
          error:action.payload
          }
         
        default:
          return state
    }
  }
  
  export default reducer