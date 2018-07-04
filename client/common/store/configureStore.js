/**
 *  Created by daiwenjuan on 2018/7/4 22:28.
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod')
} else {
  module.exports = require('./configureStore.dev')
}