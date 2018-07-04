/**
 *  Created by daiwenjuan on 2018/7/4 22:26.
 */
export default class Plugin {
  constructor () {
    this.components = []
    this.reducers = []
    this.actions = []
  }

  setComponent (com) {
    this.components.push(com)
  }

  getComponent () {
    return this.components
  }

  setReducer (reducer) {
    this.reducers.push(reducer)
  }

  getReducers () {
    return this.reducers
  }

  setAction (action) {
    this.actions.push(action)
  }

  getActions () {
    return this.actions
  }
}