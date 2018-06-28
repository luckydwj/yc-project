/**
 *  Created by daiwenjuan on 2018/6/28 21:49.
 */
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from './reducers/index'

export default function configureStore (preloadedState) {
  return createStore(reducers, preloadedState, applyMiddleware(logger))
}
