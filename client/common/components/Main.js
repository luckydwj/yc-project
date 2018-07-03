import React, { Component } from 'react'

class Main extends Component {
  constructor () {
    super()
  }

  render () {
    const {children} = this.props
    return (
      <main>
        {children}
      </main>
    )
  }
}

export default Main
