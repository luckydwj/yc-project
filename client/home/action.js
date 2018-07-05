/**
 *  Created by daiwenjuan on 2018/7/4 22:31.
 */
import key from './key'

export function test () {
  return {type: key.TEST, payload: 'hello redux'}
}