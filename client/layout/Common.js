/**
 *  Created by daiwenjuan on 2018/7/4 22:21.
 */
import React, { Children, Component, cloneElement } from 'react'
import Navbar from './Navbar'

require('../styles/app.less')
import styles from './Common.module.less'

class Common extends Component {

  render () {
    const {children, ...props} = this.props
    return (
      <div className={styles['common-wrapper']}>
        <div className='common-content'>
          <div className='header'>
            <Navbar/>
          </div>
          <div className='content'>
            {Children.map(children, child =>
              cloneElement(child, {...props})
            )}
          </div>
          <div className='footer'>
            雨辰科技有限公司
          </div>
        </div>
      </div> )
  }
}

export default Common