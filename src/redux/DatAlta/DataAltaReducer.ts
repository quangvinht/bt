import {REQ,SUCCESS,ERROR,SUCCESSMONTH,SUCCESSWEEK,SUCCESSEQUIMENT,SUCCESSSERVICE,SUCCESSSERVICEDETAIL


} from './DataAltaTypes'


const initState : any = {
    loading: true,
    error:'',
    
    dataChart:[],
    dataMonth:[],
    dataWeek:[],
    dataEquiment:[],
    dateService:[],
    dateServiceDetail:[],
   

   
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

            case SUCCESSEQUIMENT:
              return {
                ...state,
                
                loading: false,
             
                dataEquiment: action.payload
              }

              case SUCCESSSERVICE:
              return {
                ...state,
                
                loading: false,
             
                dataService: action.payload
              }


              case SUCCESSSERVICEDETAIL:
              return {
                ...state,
                
                loading: false,
             
                dateServiceDetail: action.payload
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