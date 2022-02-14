import {REQ,SUCCESS,ERROR,SUCCESSMONTH,SUCCESSWEEK,SUCCESSEQUIMENT,SUCCESSSERVICE
  ,SUCCESSSERVICEDETAIL,
  SUCCESSNUMBERLEVEL,
  SENDDATADETIAL,
  SUCCESSREPORT,
  SUCCESSROLE,
  SENDDATAROLE,
  SUCCESSUSERLIST,
  SUCCESSUSERDIARY


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
    dataNumberLevel:[],
    dataSend:[],
    dataSendRole:[],
    dataReport:[],
    dataRole:[],
    dataUserList:[],
    dataUserDiary:[],
   

   
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


              case SUCCESSNUMBERLEVEL:
                return {
                  ...state,
                  
                  loading: false,
               
                  dataNumberLevel: action.payload
                }

                case SENDDATADETIAL:
                  return {
                    ...state,
                    dataSend:action.payload
                  }

                  case SENDDATAROLE:
                    return {
                      ...state,
                      dataSendRole:action.payload
                    }
                
                  case SUCCESSREPORT:
                    return {
                      ...state,
                      
                      loading: false,
                   
                      dataReport: action.payload
                    }

                    case SUCCESSROLE:
                      return {
                        ...state,
                        
                        loading: false,
                     
                        dataRole: action.payload
                      }

                      case SUCCESSUSERLIST:
                      return {
                        ...state,
                        
                        loading: false,
                     
                        dataUserList: action.payload
                      }
                      
                      case SUCCESSUSERDIARY:
                        return {
                          ...state,
                          
                          loading: false,
                       
                          dataUserDiary: action.payload
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