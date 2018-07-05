/**
 *  Created by daiwenjuan on 2018/7/4 22:21.
 */
import React, { Children, Component, cloneElement } from 'react'
import Navbar from './Navbar'
import { Layout } from 'antd'

const {Header, Content, Footer} = Layout

class Common extends Component {

  render () {
    const {children, ...props} = this.props
    return (
      <Layout className="layout">
        <Header>
          <Navbar/>
        </Header>
        <Content style={{padding: '0 50px'}}>
          {Children.map(children, child =>
            cloneElement(child, {...props})
          )}
        </Content>
        <Footer style={{textAlign: 'center'}}>
          雨辰科技有限公司
        </Footer>
      </Layout> )
  }
}

export default Common