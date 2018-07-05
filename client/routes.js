/**
 *  Created by daiwenjuan on 2018/7/4 22:20.
 */
import { getComponent } from './chief'

if (typeof require.ensure !== 'function') {
  require.ensure = function (dependencies, callback) {
    callback(require)
  }
}

const routes = {
  childRoutes: [
    {
      path: '/',
      component: require('./layout/Root'),
      indexRoute: {
        getComponent (nextState, callback) {
          require.ensure([], require => {
            callback(null, getComponent('@home'))
          }, 'home')
        }
      },
      childRoutes: []
    }
  ]
}

export default routes