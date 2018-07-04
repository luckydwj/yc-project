/**
 *  Created by daiwenjuan on 2018/7/4 22:32.
 */
import key from './key'

function userInfo (state = null, action) {
  switch (action.type) {
    case key.TEST:
      return {...state, text: 'sdfdsf'}
    default:
      return state
  }
}

export default {
  userInfo
}