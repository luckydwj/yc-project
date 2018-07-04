/**
 *  Created by daiwenjuan on 2018/7/4 22:21.
 */
import React, { Children, Component, cloneElement } from 'react'
import Main from './Main'

class Common extends Component {

  render() {
    const { children, ...props } = this.props
    return (
      <div>
        <Main>
          {Children.map(children, child =>
            cloneElement(child, { ...props })
          )}
        </Main>
      </div>
    )
  }
}

export default Common