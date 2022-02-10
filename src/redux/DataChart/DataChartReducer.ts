import {REQ,SUCCESS,ERROR,SUCCESSMONTH,SUCCESSWEEK} from './DataChartTypes'


const initState : any = {
    loading: true,
    error:'',
    
    dataChart:[],
    dataMonth:[],
    dataWeek:[],
   

   
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
         
            dataChart: action.payload
          }
        
        case SUCCESSMONTH:
          return {
            ...state,
            
            loading: false,
         
            dataMonth: action.payload
          }
          case SUCCESSWEEK:
            return {
              ...state,
              
              loading: false,
           
              dataWeek: action.payload
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