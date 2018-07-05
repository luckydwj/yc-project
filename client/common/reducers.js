/**
 *  Created by daiwenjuan on 2018/7/4 22:25.
 */
import { combineReducers } from 'redux'
import { getReducers } from '../chief'

let reducers = getReducers()

const rootReducer = combineReducers({...reducers})
export default rootReducer