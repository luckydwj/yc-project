/**
 *  Created by daiwenjuan on 2018/6/28 21:49.
 */
import React, { Children, Component, cloneElement } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {children} = this.props
    return <div>
      {children}
    </div>
  }
}

module.exports = App