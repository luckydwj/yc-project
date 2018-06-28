/**
 *  Created by daiwenjuan on 2018/6/28 21:49.
 */
export default function myApp (state, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: state.text === 'Hello' ? 'Stark' : 'Hello'
      }
    default:
      return {
        text: 'Hello'
      }
  }
}