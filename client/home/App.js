/**
 *  Created by daiwenjuan on 2018/7/4 22:31.
 */
import React, { Component } from 'react'
import styles from './app.module.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './action'
import { test } from './action'
import key from './key'
import EnhanceConnect from '../common/EnhanceConnect'

@EnhanceConnect((state) => {
  return {
    text: state[key.ID].text,
  }
}, {test})
export default class App extends Component {
  handleOnClick = () => {
    let {test} = this.props
    test()
  }

  render () {
    let {text} = this.props
    return (
      <div className={styles.app} onClick={this.handleOnClick}>
        {text ? text : 'hello world'}
      </div>
    )
  }
}

//function mapStateToProps (state) {
//  return state
//}
//
//function mapDispatchToProps (dispatch) {
//  return {actions: bindActionCreators(actions, dispatch)}
//}
//
//export default connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(App)