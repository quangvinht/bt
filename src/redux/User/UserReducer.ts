import {REQ,SUCCESS,ERROR,ADD_TEST} from './UserTypes'


const initState : any = {
    loading: true,
    error:'',
    users:[],
    dataChartDay:[],
    data_test:'Hello'
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
            users: action.payload,
            dataChartDay: action.payload
          }
        case ERROR:
         return {
          ...state,
          users:[],
          error:action.payload
          }
         
        default:
          return state
    }
  }
  
  export default reducer