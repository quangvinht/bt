import { combineReducers } from 'redux';
import DataDayReducer from './DataDayChart/DataDayReducer';
import DataMonthReducer from './DataMonthChart/DataMonthReducer';
import DataChart from './DataChart/DataChartReducer'

import DataEquiment from './DatAlta/DataAltaReducer'

import DataReducer from './DataTable/DataReducer'

import UserReducer from './User/UserReducer';
import DataAltaReducer from './DatAlta/DataAltaReducer';




const rootReducer = combineReducers({
    user:UserReducer,
    dataDay:DataDayReducer,
    dataMonth:DataMonthReducer,
    dataChart:DataChart,
    dataReducer:DataReducer,
    dataAlta:DataAltaReducer,
})

export default rootReducer