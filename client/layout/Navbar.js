/**
 *  Created by daiwenjuan on 2018/7/5 22:05.
 */
import React, { PureComponent } from 'react'
import { IndexLink, Link } from 'react-router'
import { Menu, Icon } from 'antd'

export default class Navbar extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      current: 'home'
    }
  }

  handleMenuClick = () => {

  }

  render () {
    return <div>
      <div className="logo">logo</div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{lineHeight: '64px'}}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </div>
  }
}