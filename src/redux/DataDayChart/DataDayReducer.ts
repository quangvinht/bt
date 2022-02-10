import {REQ,SUCCESS,ERROR} from './DataDayTypes'


const initState : any = {
    loading: true,
    error:'',
    
    dataChartDay:[],
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
         
            dataChartDay: action.payload
          }
        
        case SUCCESS:
          return {
            ...state,
            
            loading: false,
         
            dataChartDay: action.payload
          }



        case ERROR:
         return {
          ...state,
          dataChartDay:[],
          error:action.payload
          }
         
        default:
          return state
    }
  }
  
  export default reducer